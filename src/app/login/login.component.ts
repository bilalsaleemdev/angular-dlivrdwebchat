import { AuthService } from './../auth/auth.service';
import { LoginService } from './../auth/login.service';
import { GuestGaurdService } from './../guards/guest-gaurd.service';
import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService, GuestGaurdService],
})
export class LoginComponent implements OnInit {

  loginParams : Login = {
    email : '',
    password : '',
    device_name : 'browser'
  }

  constructor(private loginService : LoginService, 
    private authService : AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  myFunction() {
    let x = (<HTMLInputElement>document.getElementById("password"));
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  login(){
    this.loginService.login(this.loginParams).subscribe(response => {
      this.authService.saveToken(response.info.token);
      this.router.navigateByUrl('/admin');
    });
  }

}
