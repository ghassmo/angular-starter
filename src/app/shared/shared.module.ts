import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material-module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
    imports: [CommonModule],
    declarations: [],
    exports: [
        CommonModule, 
        FormsModule, 
        MaterialModule, 
        FlexLayoutModule]
})
export class SharedModule { }