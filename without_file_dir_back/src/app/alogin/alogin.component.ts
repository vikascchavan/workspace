import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-alogin',
  templateUrl: './alogin.component.html',
  styleUrls: ['./alogin.component.scss']
})
export class AloginComponent implements OnInit {
  loginForm: FormGroup;
  valid;
  constructor(
    private formBuilder: FormBuilder,
    private api: CrudService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      user_id: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });



  }
  get formControl() {
    return this.loginForm.controls;
  }


  goToPage(pageName: string): void {
    if (this.loginForm.invalid) {
      console.log('invalid', this.loginForm.invalid);
      return;
    }
    this.api.loginUser(this.loginForm.value).subscribe(
      result => {
        this.valid = result
        if (result['data'] === 1) {
          localStorage.setItem('role', this.valid['data']);
          console.log('localstorage', result['data']);
          this.router.navigate([`${pageName}`]);
        }
        if (result['data'] === 2) {
          localStorage.setItem('role', this.valid['data']);
          console.log('localstorage', result['data']);
          this.router.navigate([`${pageName}`]);
        }
        if (result['data'] === 3) {
          localStorage.setItem('role', this.valid['data']);
          console.log('localstorage', result['data']);
          this.router.navigate([`${pageName}`]);
        }
        if (result['message']) {
          confirm('Invalid Username Or Password');
        }
        console.log('api_result', result);

      },
      error => {
        console.log('error here', error);
      }

    );
  }

}
