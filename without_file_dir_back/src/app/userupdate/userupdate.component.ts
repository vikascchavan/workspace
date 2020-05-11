import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from '../services/crud.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-userupdate',
  templateUrl: './userupdate.component.html',
  styleUrls: ['./userupdate.component.scss']
})
export class UserupdateComponent implements OnInit {
  updateForm: FormGroup;
  users = [];
  valid;
  index = 0;
  updateIndex = null;
  roles = [
    { value: 1, label: "Admin" },
    { value: 3, label: "Read" },
    { value: 2, label: "Read-Write" },

  ];
  hide = true;
  constructor(
    private formBuilder: FormBuilder,
    private api: CrudService
  ) { }

  ngOnInit(): void {
    this.updateForm = this.formBuilder.group({
      id: [null, [Validators.required]],
      first_name: [null, [Validators.required]],
      last_name: [null, [Validators.required]],
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      role: [null, [Validators.required]],
      contact_number: null,
      updated_by: 0
    });

  }
  get formControl() {
    return this.updateForm.controls;
  }

  submitForm() {
    if (this.updateForm.invalid) {
      console.log('invalid', this.updateForm.invalid);
      return;
    }
    this.valid = localStorage.getItem('role');
    if (this.valid === '1') {
      this.api.updateUser(this.updateForm.value).subscribe(
        result => {
          confirm("user created by admin");
          console.log('api_result', result);
        },
        error => {
          confirm('Not Updated');
          console.log('error here', error);
        }

      );
    }
    if (this.valid === '2' || this.valid === '3') {
      confirm('You Dont Have Update Permission');
    }
  }


}
