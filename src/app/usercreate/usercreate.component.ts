import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-usercreate',
  templateUrl: './usercreate.component.html',
  styleUrls: ['./usercreate.component.scss']
})
export class UsercreateComponent implements OnInit {
  createForm: FormGroup;
  users = [];
  roles = [
    { value: 1, label: "Admin" },
    { value: 3, label: "Read" },
    { value: 2, label: "Read-Write" },

  ];
  index = 0;
  updateIndex = null;
  hide = true;
  constructor(
    private formBuilder: FormBuilder,
    private api: CrudService
  ) { }

  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
      first_name: [null, [Validators.required]],
      last_name: [null, [Validators.required]],
      email: [null, [Validators.required]],
      contact_number: [null, [Validators.required]],
      role: [null, [Validators.required]],
      password: [null, [Validators.required]],
      updated_by: 0
    });
    console.log('localstorage', localStorage.getItem('id'));


  }
  get formControl() {
    return this.createForm.controls;
  }


  submitForm() {
    console.log('form', this.createForm.value);
    if (this.createForm.invalid) {
      console.log('invalid', this.createForm.invalid);
      return;
    }
    this.api.createUser(this.createForm.value).subscribe(
      result => {
        console.log('api_result', result);
      },
      error => {
        console.log('error here', error);
      }

    );
  }


}
