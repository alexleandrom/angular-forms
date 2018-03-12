import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TemplateDrivenFormsComponent} from './template-driven-forms.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [TemplateDrivenFormsComponent]
})
export class TemplateDrivenFormsModule {
}
