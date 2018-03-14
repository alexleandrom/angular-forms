import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TemplateDrivenFormsComponent} from './template-driven-forms/template-driven-forms.component';
import {DataDrivenFormsComponent} from './data-driven-forms/data-driven-forms.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'reactive'},
  {path: 'template-driven', component: TemplateDrivenFormsComponent},
  {path: 'reactive', component: DataDrivenFormsComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {enableTracing: true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
