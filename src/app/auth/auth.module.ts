import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [AuthComponent],
  imports: [
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
