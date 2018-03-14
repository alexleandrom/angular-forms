import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html'
})
export class TemplateDrivenFormsComponent implements OnInit {

  // Two-way Data binding
  usuario : any = {
    nome : 'Teste 123',
    email: 'alesk@salk.com'
  };
  constructor() {
  }

  ngOnInit() {
  }

    onSubmit (form) {
      console.log(this.usuario);
      console.log(form);
    }
}
