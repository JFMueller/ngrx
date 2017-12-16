import {
  RouterModule,
  Routes
} from '@angular/router';
import { NgModule } from '@angular/core';

import { CloneDetailsComponent } from './clone-details/clone-details.component';
import { CloneOverviewComponent } from './clone-overview/clone-overview.component';

const clonePerformanceRoutes: Routes = [
  {
    path: 'clone-performance',
    component: CloneOverviewComponent,
    children: [
      {
        path: ':count',
        component: CloneDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      clonePerformanceRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class ClonePerformanceRoutingModule {
}
