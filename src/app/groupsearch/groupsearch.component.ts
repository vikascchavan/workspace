import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-groupsearch',
  templateUrl: './groupsearch.component.html',
  styleUrls: ['./groupsearch.component.scss']
})
export class GroupsearchComponent implements OnInit {
  searchGroup: FormGroup;
  dataSource;
  model;

  constructor(
    private formBuilder: FormBuilder,
    private api: CrudService
  ) { }

  ngOnInit(): void {
    this.searchGroup = this.formBuilder.group({
      gid: [null, [Validators.required]],
    });
  }
  getSingle() {
    this.api.getAllUserInGroup(this.searchGroup.value.gid).subscribe(
      result => {
        this.dataSource = result['data']
        console.log('api_result', result['data']);
      },
      error => {
        console.log('here error occure')
        console.log('error', error);
      });
    this.dataSource = [];

  }

  getMultiple() {
    this.api.getAllGroups().subscribe(
      result => {
        this.model = result.data
        console.log('api_result', result['data']);
      },
      error => {
        console.log('error', error);
      });
    this.model = []
  }

}
