import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html'
})
export class TemplateDrivenFormsComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit (form) {
    console.log(form);
  }
}
