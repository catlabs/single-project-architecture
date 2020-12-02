import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';

const routes: Routes = [];

// Load first feature as if it comes from npm repo
if (environment.enabledFeatures.firstFeature)
  routes.push({
    path: 'first-feature',
    loadChildren: () => import('projects/first-feature/src/lib/first-feature.module').then(m => m.FirstFeatureModule)
  });

if (environment.enabledFeatures.secondFeature)
  routes.push({
    path: 'second-feature',
    loadChildren: () => import('projects/second-feature/src/lib/second-feature.module').then(m => m.SecondFeatureModule)
  });

if (environment.enabledFeatures.thirdFeature)
  routes.push({
    path: 'third-feature',
    loadChildren: () => import('projects/third-feature/src/lib/third-feature.module').then(m => m.ThirdFeatureModule)
  });


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
