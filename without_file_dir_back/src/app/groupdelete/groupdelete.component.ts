import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-groupdelete',
  templateUrl: './groupdelete.component.html',
  styleUrls: ['./groupdelete.component.scss']
})
export class GroupdeleteComponent implements OnInit {
  deleteGroup: FormGroup;
  deleteUser: FormGroup;
  valid;
  constructor(
    private formBuilder: FormBuilder,
    private api: CrudService

  ) { }

  ngOnInit(): void {
    this.deleteGroup = this.formBuilder.group({
      id: [null, [Validators.required]],
    });
    this.deleteUser = this.formBuilder.group({
      u_id: [null, [Validators.required]],
      g_id: [null, [Validators.required]],
    });
  }

  get formControl() {
    return this.deleteGroup.controls;
  }

  deleteGroupForm() {
    if (this.deleteGroup.invalid) {
      console.log('invalid', this.deleteGroup.invalid);
      return;
    }
    this.valid = localStorage.getItem('role');
    if (this.valid === '1') {
      this.api.removeGroup(this.deleteGroup.value.id).subscribe(
        result => {
          console.log('api_result', result);
          if (result['message']) {
            confirm("GroupId is Incorrect");
          }
          else {
            confirm("Group Deleted Successfully by Admin");
          }
        },
        error => {
          console.log('error here', error);
        }
      );
    }
    if (this.valid === '2' || this.valid === '3') {
      confirm('You Dont Have Permission To Delete Group');
    }
  }
  deleteUserForm() {
    if (this.deleteUser.invalid) {
      console.log('invalid', this.deleteUser.invalid);
      return;
    }
    this.valid = localStorage.getItem('role');
    if (this.valid === '1') {
      console.log('userdelete', this.deleteUser.value);
      this.api.removeUserFromGroup(this.deleteUser.value).subscribe(
        result => {
          console.log('api_result', result);
          if (result['message']) {
            confirm("GroupId is Incorrect");
          }
          else {
            confirm("User Deleted Successfully From Group");
          }
        },
        error => {
          console.log('error here', error);
        }
      );
    }
    if (this.valid === '2' || this.valid === '3') {
      confirm('You Dont Have Permission To Delete User From Group');
    }
  }


}
