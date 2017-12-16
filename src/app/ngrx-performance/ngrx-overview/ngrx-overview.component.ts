import {
  Component,
  OnInit
} from '@angular/core';
import { DataSampleService } from '../../core/services/data-sample.service';
import { CloneService } from '../../core/services/clone.service';
import { CloneTypes } from '../../core/enums/clone-type';
import { PerformanceLogService } from '../../core/services/performance-log.service';

@Component({
  selector: 'app-ngrx-overview',
  templateUrl: './ngrx-overview.component.html'
})
export class NgrxOverviewComponent implements OnInit {
  constructor(private dataSampleService: DataSampleService,
              private cloneService: CloneService,
              private pls: PerformanceLogService) {
  }

  ngOnInit(): void {
    this.dataSampleService.loadWorldBankSample()
      .subscribe((data) => {
        const clones = this.cloneService.cloneMultipleTimes(data, CloneTypes.DeepNative, 10);
        this.pls.log(clones);
      });
  }
}
