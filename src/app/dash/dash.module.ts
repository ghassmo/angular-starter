import { NgModule } from '@angular/core';

import { DashRoutingModule } from './dash-routing.module';
import { DashComponent } from './dash.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [DashComponent],
  imports: [
    SharedModule,
    DashRoutingModule
  ]
})
export class DashModule { }
