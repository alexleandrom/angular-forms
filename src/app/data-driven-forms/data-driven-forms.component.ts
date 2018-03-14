import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-data-driven-forms',
  templateUrl: './data-driven-forms.component.html'
})
export class DataDrivenFormsComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {

    this.form = new FormGroup({
      nome: new FormControl(),
      email: new FormControl()
    });

    this.form = this.formBuilder.group({
      nome: [],
      email: []
    });

  }

  onSubmit () {
    console.log(this.form);
  }

}
