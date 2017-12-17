import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ClonePerformanceModule } from './clone-performance/clone-performance.module';
import { NgrxPerformanceModule } from './ngrx-performance/ngrx-performance.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app.routing-module';
import { CoreModule } from './core/core.module';
import { StoreModule } from '@ngrx/store';
import { reducer } from './ngrx-performance/state/ngrx.reducers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ counter: reducer }),
    RouterModule,
    HttpClientModule,
    SharedModule,
    ClonePerformanceModule,
    NgrxPerformanceModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
