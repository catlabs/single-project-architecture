import { NgModule } from '@angular/core';
import { ThirdFeatureRoutingModule } from './third-feature-routing.module';
import { ThirdFeatureComponent } from './third-feature.component';



@NgModule({
  declarations: [ThirdFeatureComponent],
  imports: [
    ThirdFeatureRoutingModule
  ],
  exports: [ThirdFeatureComponent]
})
export class ThirdFeatureModule { }
