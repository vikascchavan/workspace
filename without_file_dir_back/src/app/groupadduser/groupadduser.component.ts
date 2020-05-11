import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-groupadduser',
  templateUrl: './groupadduser.component.html',
  styleUrls: ['./groupadduser.component.scss']
})
export class GroupadduserComponent implements OnInit {
  addUserGroup: FormGroup;
  json;
  valid;
  constructor(
    private formBuilder: FormBuilder,
    private api: CrudService

  ) { }

  ngOnInit(): void {
    this.addUserGroup = this.formBuilder.group({
      id: [null, [Validators.required]],
      gid: [null, [Validators.required]]
    });
  }
  get formControl() {
    return this.addUserGroup.controls;
  }
  submitForm() {
    if (this.addUserGroup.invalid) {
      console.log('invalid', this.addUserGroup.invalid);
      return;
    }
    this.valid = localStorage.getItem('role');
    console.log('ok', this.valid);
    if (this.valid === '1') {
      this.api.userAddInGroup(this.addUserGroup.value).subscribe(
        result => {
          console.log('api_result', result);
          if (result['message']) {
            confirm("Either groupId or userId Incorrect");
          }
          else {
            confirm("User Successfully Added by Admin");
          }
        },
        error => {
          console.log('error here', error);
        }

      );
    }
    if (this.valid === '2' || this.valid === '3') {
      confirm('You Dont Have Add Permission');
    }

  }

}
