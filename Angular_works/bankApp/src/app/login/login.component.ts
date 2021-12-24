import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  value = 'Account number ... ';

  loginForm = this.fb.group({
    uname: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    password: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
  });

  constructor(
    private router: Router,
    private ds: DataService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}

  login() {
    let acno = this.loginForm.value.uname;
    let pswd = this.loginForm.value.password;
    if (this.loginForm.valid) {
      this.ds.login(acno, pswd).subscribe(
        (result: any) => {
          if (result) {
            localStorage.setItem("userData", result.currentUser)
            localStorage.setItem("token", JSON.stringify(result.token))
            localStorage.setItem("acno",result.currentAcno)
            alert(result.message);
            this.router.navigateByUrl('home');
          }
        },
        (result: any) => {
          alert(result.error.message);
        }
      );
    } else {
      alert('Form invalid');
    }
  }
}
