import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ReactiveFormsComponent} from './reactive-forms/reactive-forms.component';
import {TemplateDrivenFormsComponent} from './template-driven-forms/template-driven-forms.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'template-driven'},
  {path: 'template-driven', component: TemplateDrivenFormsComponent},
  {path: 'reative', component: ReactiveFormsComponent},
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
