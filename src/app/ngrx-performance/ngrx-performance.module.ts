import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgrxDetailsComponent } from './ngrx-details/ngrx-details.component';
import { NgrxOverviewComponent } from './ngrx-overview/ngrx-overview.component';
import { NgrxPerformanceRoutingModule } from './ngrx-performance.routing-module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgrxPerformanceRoutingModule
  ],
  declarations: [
    NgrxOverviewComponent,
    NgrxDetailsComponent
  ],
  providers: []
})
export class NgrxPerformanceModule {
}
