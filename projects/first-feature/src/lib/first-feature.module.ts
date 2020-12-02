import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FirstFeatureRoutingModule } from './first-feature-routing.module';
import { FirstFeatureComponent } from './first-feature.component';

@NgModule({
  declarations: [FirstFeatureComponent],
  imports: [
    FirstFeatureRoutingModule,
    MatButtonModule
  ],
  exports: [FirstFeatureComponent]
})
export class FirstFeatureModule { }
