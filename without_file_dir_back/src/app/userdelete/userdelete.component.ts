import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-userdelete',
  templateUrl: './userdelete.component.html',
  styleUrls: ['./userdelete.component.scss']
})
export class UserdeleteComponent implements OnInit {
  deleteForm: FormGroup;
  valid;
  constructor(
    private formBuilder: FormBuilder,
    private api: CrudService
  ) { }

  ngOnInit(): void {
    this.deleteForm = this.formBuilder.group({
      id: [null, [Validators.required]],
    });
  }
  get formControl() {
    return this.deleteForm.controls;
  }


  submitForm() {
    console.log('form', this.deleteForm.value);
    if (this.deleteForm.invalid) {
      console.log('invalid', this.deleteForm.invalid);
      return;
    }
    this.valid = localStorage.getItem('role');
    console.log('ok', this.valid);
    if (this.valid === '1') {
      confirm("User Deleted by Admin");
      this.api.deleteUser(this.deleteForm.value.id).subscribe(
        result => {
          console.log('api_result', result);
        },
        error => {
          console.log('error here', error);
        }

      );
    }
    if (this.valid === '2' || this.valid === '3') {
      confirm('You Dont Have Delete Permission');
    }
  }


}
