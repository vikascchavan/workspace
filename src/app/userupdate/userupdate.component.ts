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
  index = 0;
  updateIndex = null;
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
    console.log('form value', this.updateForm.value.role);


    this.api.updateUser(this.updateForm.value).subscribe(
      result => {
        confirm('Updated Successfully');
        console.log('api_result', result);
      },
      error => {
        confirm('Not Updated');
        console.log('error here', error);
      }

    );
  }


}
