import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {User} from "../models/User";
import {UserService} from "../services/user.service";

@Component ({
  selector: 'register',
  templateUrl: '../html/register.component.html',
  styleUrls: ['../css/bootstrap.min.css', '../css/bootstrap-theme.min.css', '../css/register.component.css'],
  providers: [UserService]
})

export class RegisterComponent implements  OnInit {
  private activeUser:User;
  constructor(private userService:UserService, private router: Router ) {}


  ngOnInit(): void {
  }


  createUser(username:string, password:string, password1:string): void {
    if (password == password1) {
      this.userService.createUser(username, password)
        .then(res => {
          console.log(res);
          if (res.status.toString().indexOf("200") != -1) {
            let link = ['/home'];
            this.router.navigate(link);
          }
          else {
          document.getElementById("usernameLabel").textContent += " (¡este usuario ya existe!)";
          }
        });
    }
    else{
      document.getElementById("passwLabel").textContent += "(Las contraseñas que has ingresado son diferentes)"
    }
  }
}
