import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyPrivatePageComponent } from './lazy-private-page/lazy-private-page.component';

const routes: Routes = [
  {
    path: 'lazy-private-page',
    component: LazyPrivatePageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule {


}
