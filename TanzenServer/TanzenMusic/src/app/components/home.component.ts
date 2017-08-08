import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from "../services/user.service";
import {SongService} from "../services/song.service";
import {User} from "../models/User";
import {Song} from "../models/Song";
@Component ({
    selector: 'home',
    templateUrl: '../html/home.component.html',
    styleUrls: [ '../css/style.css','../css/bootstrap.min.css', '../css/table.css', '../css/bootstrap-theme.min.css'],
    providers: [UserService, SongService]
})

export class HomeComponent implements  OnInit {
  public mysongs: Song[];
    constructor(private router:Router,private userService:UserService, private  songService:SongService)
    {
      this.userService.getLogUserInfo().then(res=>{
        this.songService.getMySongs(JSON.parse(res._body).username).then(ress=>{
          this.mysongs=ress;
        })

      })
    }

  editSong(song:Song):void{
    sessionStorage.setItem("editSong",JSON.stringify(song));
    this.router.navigate(['/edit']);
  }

  search(searchTerm:string):void{
    this.userService.getLogUserInfo().then(res=>{
      this.songService.searchMySongByTitle(searchTerm,JSON.parse(res._body).username).then(ress=>{
        this.mysongs=ress;
      })

    })
  }

    ngOnInit(): void {

    }

    cerrarSesion():void{
      this.userService.logoutUser().then(res=>{console.log(res)});
    }
}
