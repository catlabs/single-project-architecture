import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThirdFeatureComponent } from './third-feature.component';

const routes: Routes = [
  { component: ThirdFeatureComponent, path: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThirdFeatureRoutingModule { }
