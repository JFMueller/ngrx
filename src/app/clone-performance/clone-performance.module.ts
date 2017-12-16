import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClonePerformanceRoutingModule } from './clone-performance.routing-module';
import { CloneDetailsComponent } from './clone-details/clone-details.component';
import { CloneOverviewComponent } from './clone-overview/clone-overview.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ClonePerformanceRoutingModule
  ],
  declarations: [
    CloneOverviewComponent,
    CloneDetailsComponent
  ],
  providers: []
})
export class ClonePerformanceModule {
}
