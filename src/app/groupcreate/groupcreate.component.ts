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
    console.log('form value', this.createGroup.value)

    this.api.createGroup(this.createGroup.value).subscribe(
      result => {
        console.log('api_result', result);
      },
      error => {
        console.log('error here', error);
      }

    );

  }
}
