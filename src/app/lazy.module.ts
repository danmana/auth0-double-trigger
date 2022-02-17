import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LazyPrivatePageComponent } from './lazy-private-page/lazy-private-page.component';
import { LazyRoutingModule } from './lazy-routing.module';


@NgModule({
  declarations: [
    LazyPrivatePageComponent
  ],
  imports: [
    LazyRoutingModule,
  ],
  providers: [],
})
export class LazyModule { }
