import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LogComponent } from './log/log.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { SimpleTableComponent } from './simple-table/simple-table.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    PageNotFoundComponent,
    NavigationComponent,
    HomeComponent,
    LogComponent,
    TopNavigationComponent,
    SimpleTableComponent
  ],
  exports: [
    PageNotFoundComponent,
    NavigationComponent,
    HomeComponent,
    LogComponent,
    TopNavigationComponent,
    SimpleTableComponent
  ]
})
export class SharedModule {
}
