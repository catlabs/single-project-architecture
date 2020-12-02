import { NgModule } from '@angular/core';
import { SecondFeatureRoutingModule } from './second-feature-routing.module';
import { SecondFeatureComponent } from './second-feature.component';



@NgModule({
  declarations: [SecondFeatureComponent],
  imports: [
    SecondFeatureRoutingModule
  ],
  exports: [SecondFeatureComponent]
})
export class SecondFeatureModule { }
