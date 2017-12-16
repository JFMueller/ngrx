import {
  RouterModule,
  Routes
} from '@angular/router';
import { NgModule } from '@angular/core';

import { NgrxOverviewComponent } from './ngrx-overview/ngrx-overview.component';
import { NgrxDetailsComponent } from './ngrx-details/ngrx-details.component';

const ngrxPerformanceRoutes: Routes = [
  {
    path: 'ngrx-performance',
    component: NgrxOverviewComponent,
    children: [
      {
        path: ':count',
        component: NgrxDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      ngrxPerformanceRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class NgrxPerformanceRoutingModule {
}
