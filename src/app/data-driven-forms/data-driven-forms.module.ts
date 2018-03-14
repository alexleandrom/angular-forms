import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataDrivenFormsComponent } from './data-driven-forms.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [DataDrivenFormsComponent]
})
export class DataDrivenFormsModule {
}
