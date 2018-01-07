import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataSampleEffects } from './services/data-sample.service';
import { CloneService } from './services/clone.service';
import { PerformanceLogService } from './services/performance-log.service';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forRoot([
      DataSampleEffects
    ])
  ],
  providers: [
    CloneService,
    PerformanceLogService
  ]
})
export class CoreModule {
}
