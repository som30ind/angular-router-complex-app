import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PackMainComponent } from './pack-main.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'pack-main',
  pathMatch: 'full'
}, {
  path: 'pack-main',
  component: PackMainComponent
}, {
  path: 'pack-lazy',
  loadChildren: () => import('./pack-lazy.module').then(m => m.PackLazyModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
