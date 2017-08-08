import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {SongService} from "../services/song.service";
import {UserService} from "../services/user.service";
import {SharedUser, Song} from "../models/Song";
import {User} from "../models/User";
import Any = jasmine.Any;
@Component ({
  selector: 'newSong',
  templateUrl: '../html/newSong.component.html',
  styleUrls: ['../css/bootstrap.min.css', '../css/bootstrap-theme.min.css', '../css/register.component.css'],
  providers: [SongService,UserService]
})

export class NewSongComponent implements  OnInit {
  constructor(private userService:UserService, private songService:SongService,private router:Router) {}


  ngOnInit(): void {
  }

  checkUsername(username:string):void{
    this.userService.searchUser(username)
      .then(res => {
        if (res && !((<HTMLInputElement>document.getElementById("integrantes")).value.indexOf(username) >= 0)) {
          (<HTMLInputElement>document.getElementById("integrantes")).value += username + ";";
        }else{
          document.getElementById("username").textContent="usuario no existente";
        }
      });
  }

  crearCancion(title:string,artist:string,genre:string,year:string,privacy:string,sharedWith:string):void{
    this.userService.getLogUserInfo().then(res=> {
      let user = res;
      let sharedUsernames: string[];
      sharedWith=sharedWith.substr(0,sharedWith.length-1);
      sharedWith= sharedWith.trim();
      sharedUsernames = sharedWith.split(";");
      let song : Song;
      if(user) {
        song = {
          "_id": "",
          "title": title,
          "artist": artist,
          "genre": genre,
          "date": year,
          "visibility": privacy,
          "shared_with": sharedUsernames,
          "owner_username": JSON.parse(user._body).username
        }
      }
      this.songService.createSong(song).then(ress=> {
        if(ress){
          this.router.navigate(['/home']);
        }
      });
    });



}

  getUser():any{

  }

}
