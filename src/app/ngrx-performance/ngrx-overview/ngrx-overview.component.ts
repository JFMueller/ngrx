import {
  Component,
  OnInit
} from '@angular/core';
import { DataSampleService } from '../../core/services/data-sample.service';
import { CloneService } from '../../core/services/clone.service';
import { PerformanceLogService } from '../../core/services/performance-log.service';

@Component({
  selector: 'rx-ngrx-overview',
  templateUrl: './ngrx-overview.component.html'
})
export class NgrxOverviewComponent implements OnInit {
  constructor(private dataSampleService: DataSampleService,
              private cloneService: CloneService,
              private pls: PerformanceLogService) {
  }

  ngOnInit(): void {
  }
}
