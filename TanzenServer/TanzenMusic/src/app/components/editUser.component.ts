import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from "../services/user.service";
import {SongService} from "../services/song.service";
import {User} from "../models/User";
@Component ({
  selector: 'editUser',
  templateUrl: '../html/editUser.component.html',
  styleUrls: ['../css/bootstrap.min.css', '../css/bootstrap-theme.min.css', '../css/editUser.component.css'],
  providers: [UserService, SongService]
})

export class EditUserComponent implements  OnInit {
  constructor(private userService:UserService, private songService:SongService, private router:Router) {

  }


  changePassword(passw1:string,passw2:string):void{
    if(passw1==passw2){
      this.userService.getLogUserInfo()
        .then(res => {
          console.log(res);
          this.userService.updatePassword(JSON.parse(res._body)._id,passw1).then(res=>{
            this.router.navigate(['/home']);
            console.log(res);
          });
        });
    }else {
      document.getElementById("usernameLabel").textContent+= "( las contraseñas no coinciden )";
    }
  }

  deleteThisUser():void{
    this.userService.getLogUserInfo()
      .then(ress => {
        this.userService.logoutUser().then(res=>{
          this.userService.deleteUser(JSON.parse(ress._body)._id,JSON.parse(ress._body).username).then(res=>{
            this.router.navigate(['/explorar']);
            console.log(res);
          });
        })
      });

  }

  ngOnInit(): void {
  }


}
