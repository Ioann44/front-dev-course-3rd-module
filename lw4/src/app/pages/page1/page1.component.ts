import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.css'
})
export class Page1Component {
  names: any[] = [];
  myForm: FormGroup = new FormGroup({});
  // myForm: FormGroup = new FormGroup({
  //   "name": new FormControl('', Validators.required)
  // })

  constructor() {
    this.onreInitForm();
  }

  onreInitForm() {
    this.myForm = new FormGroup({
      "name": new FormControl('', Validators.required)
    })
  }

  onSubmit() {
    // console.log(this.myForm.getRawValue());
    this.names.push(this.myForm.getRawValue());
  }
}
