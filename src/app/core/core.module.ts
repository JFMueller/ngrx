import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataSampleService } from './services/data-sample.service';
import { CloneService } from './services/clone.service';
import { PerformanceLogService } from './services/performance-log.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    DataSampleService,
    CloneService,
    PerformanceLogService
  ]
})
export class CoreModule {
}
