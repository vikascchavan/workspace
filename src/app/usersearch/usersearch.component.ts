import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CrudService } from '../services/crud.service';
@Component({
  selector: 'app-usersearch',
  templateUrl: './usersearch.component.html',
  styleUrls: ['./usersearch.component.scss']
})
export class UsersearchComponent implements OnInit {

  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'email', 'contact_number'];
  dataSource;
  model;
  crudservice: any;
  resultarr: any = [];
  bugService: any;
  searchForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private api: CrudService
  ) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      searchid: [null, [Validators.required]],
    });
    console.log('localstorage', localStorage.getItem('id'));

  }



  getSingle() {
    console.log('form value', this.searchForm.value.searchid);
    this.api.getUser(this.searchForm.value.searchid).subscribe(
      result => {
        var data = [];
        data.push(result.data);
        this.model = data
        this.dataSource = data
        if (this.dataSource[0]['role'] = 1) {
          this.dataSource[0]['role'] = 'admin'
        }
        console.log('api_result', result);
      },
      error => {
        console.log('error', error);
      });
    this.model = [];
    this.dataSource = [];
  }
  getMultiple() {
    this.api.getAllUser().subscribe(
      result => {
        this.model = result.data

        console.log('api_result', result);
      },
      error => {
        console.log('error', error);
      });
    this.model = [];

  }

}
