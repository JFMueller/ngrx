import {
  Component,
  OnInit
} from '@angular/core';
import { DataSampleService } from '../../core/services/data-sample.service';

@Component({
  selector: 'app-ngrx-overview',
  templateUrl: './ngrx-overview.component.html'
})
export class NgrxOverviewComponent implements OnInit {
  constructor(private dataSampleService: DataSampleService) {
  }

  ngOnInit(): void {
    this.dataSampleService.loadWorldBankSample()
      .subscribe((data) => console.log(data));
  }
}
