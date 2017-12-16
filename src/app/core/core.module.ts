import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataSampleService } from './services/data-sample.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    DataSampleService
  ]
})
export class CoreModule {
}
