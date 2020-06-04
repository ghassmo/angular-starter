import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material-module';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule],
    declarations: [
        HeaderComponent,
    ],
    exports: [
        HeaderComponent,
        CommonModule,
        FormsModule,
        MaterialModule,
        ReactiveFormsModule,
        FlexLayoutModule]
})
export class SharedModule { }