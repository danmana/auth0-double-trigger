import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { PrivatePageComponent } from './private-page/private-page.component';
import { PublicPageComponent } from './public-page/public-page.component';

const routes: Routes = [
  {
    path: 'public-page',
    component: PublicPageComponent,
  },
  {
    path: 'private-page',
    component: PrivatePageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'lazy',
    loadChildren: () => import('./lazy.module').then(m => m.LazyModule),
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
