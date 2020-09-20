import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  params = {
    userName : 'Anas Majeed',
    password : 'Huh!!!!!'
  }

  constructor() { }

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

}
