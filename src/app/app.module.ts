import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ReactiveFormsModule} from './reactive-forms/reactive-forms.module';
import {TemplateDrivenFormsModule} from './template-driven-forms/template-driven-forms.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    TemplateDrivenFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
