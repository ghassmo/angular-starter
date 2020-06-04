import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SharedModule } from '../shared/shared.module';
import { AuthContentComponent } from './auth-content/auth-content.component';
import { AuthDialogComponent } from './auth-dialog/auth-dialog.component';


@NgModule({
  declarations: [AuthComponent, AuthContentComponent, AuthDialogComponent],
  imports: [
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
