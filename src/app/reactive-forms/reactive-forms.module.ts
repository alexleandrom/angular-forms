import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsComponent} from './reactive-forms.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ReactiveFormsComponent]
})
export class ReactiveFormsModule {
}
