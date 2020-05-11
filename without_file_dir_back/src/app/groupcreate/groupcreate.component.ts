import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-groupcreate',
  templateUrl: './groupcreate.component.html',
  styleUrls: ['./groupcreate.component.scss']
})
export class GroupcreateComponent implements OnInit {
  createGroup: FormGroup;
  valid;
  constructor(
    private formBuilder: FormBuilder,
    private api: CrudService

  ) { }

  ngOnInit(): void {
    this.createGroup = this.formBuilder.group({
      gname: [null, [Validators.required]]
    });
    console.log('localstorage', localStorage.getItem('id'));

  }

  submitForm() {
    this.valid = localStorage.getItem('role');
    if (this.valid === '1') {
      this.api.createGroup(this.createGroup.value).subscribe(
        result => {
          confirm('Group Created Successfully By Admin')
          console.log('api_result', result);
        },
        error => {
          console.log('error', error);
        }

      );
    }
    if (this.valid === '2' || this.valid === '3') {
      confirm('You Dont Have Permission To Create Group');
    }
  }
}
