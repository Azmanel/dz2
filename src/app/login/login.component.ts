import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    login: "",
    password: ""
  }

  users: any[] = []
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  Enter() {
    localStorage.setItem("data", JSON.stringify(this.user))
    this.users.push({
      "login":this.user.login,
      "password":this.user.login
    })
  }

}
