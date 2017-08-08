import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";
import {User} from "../models/User";
import {Router} from '@angular/router';

@Component ({
  selector: 'login',
  templateUrl: '../html/login.component.html',
  styleUrls: ['../css/bootstrap.min.css', '../css/bootstrap-theme.min.css', '../css/login.component.css'],
  providers: [UserService]
})

export class LoginComponent implements  OnInit {
  private activeUser:User;
  constructor(private userService:UserService, private router: Router ) {}

  ngOnInit(): void {

   /* this.userService.createUser("jeee","te amo daniel")
      .then(res => {

        console.log(res + "res");
      });
*/
  }

  login(username:string, password:string): void{
    this.userService.loginUser(username,password)
      .then(res =>{
        console.log(res);
        if(res.status.toString().indexOf("200")!=-1){
          let link = ['/home'];
          this.router.navigate(link);
        }
        else {

        }
    });
  }


}
