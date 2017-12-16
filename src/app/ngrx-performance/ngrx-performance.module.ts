import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgrxDetailsComponent } from './ngrx-details/ngrx-details.component';
import { NgrxOverviewComponent } from './ngrx-overview/ngrx-overview.component';
import { NgrxPerformanceRoutingModule } from './ngrx-performance.routing-module';

@NgModule({
  imports: [
    CommonModule,
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
