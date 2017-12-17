import {
  Component,
  OnInit
} from '@angular/core';
import { CloneTypes } from '../../core/enums/clone-type';
import { CloneService } from '../../core/services/clone.service';
import { PerformanceLogService } from '../../core/services/performance-log.service';
import { DataSampleService } from '../../core/services/data-sample.service';
import {
  ActivatedRoute,
  Params
} from '@angular/router';
import { WorldBankDto } from '../../core/domain/world-bank';
import { Observable } from 'rxjs/Observable';

interface CountAndData {
  count: number;
  data: any;
}

@Component({
  selector: 'rx-clone-details',
  templateUrl: './clone-details.component.html'
})
export class CloneDetailsComponent implements OnInit {

  clones$: Observable<WorldBankDto[]>;

  constructor(private dataSampleService: DataSampleService,
              private cloneService: CloneService,
              private pls: PerformanceLogService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.clones$ = this.activatedRoute.params
      .map((params: Params) => +params['count'])
      .filter((count: number) => count <= 10000)
      .do((count: number) => this.pls.log(`Cloning ${count} elements...`))
      .switchMap(() => this.dataSampleService.loadWorldBankSample(),
        (count: number, data: any) => Object.assign({count: count, data: data}))
      .map((countAndData: CountAndData) =>
        this.cloneService.cloneMultipleTimes(countAndData.data, CloneTypes.DeepNative, countAndData.count))
      .map((clones: any[][]) => clones.pop())
      .map((clones: any[]) => clones.map((worldBankDto: WorldBankDto) => Object.assign({
        approvalfy: worldBankDto.approvalfy,
        board_approval_month: worldBankDto.board_approval_month,
        lendprojectcost: worldBankDto.lendprojectcost,
        lendinginstr: worldBankDto.lendinginstr,
        country_namecode: worldBankDto.country_namecode
      })))
      .do(() => this.pls.log('Finished!'));
  }
}
