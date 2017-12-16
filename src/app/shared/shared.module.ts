import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    PageNotFoundComponent,
    NavigationComponent,
    HomeComponent
  ],
  exports: [
    PageNotFoundComponent,
    NavigationComponent,
    HomeComponent
  ]
})
export class SharedModule {
}
