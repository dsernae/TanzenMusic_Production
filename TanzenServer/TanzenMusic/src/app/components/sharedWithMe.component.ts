import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from "../services/user.service";
import {SongService} from "../services/song.service";
import {Song} from "../models/Song";
@Component ({
  selector: 'sharedWithMe',
  templateUrl: '../html/sharedWithMe.component.html',
  styleUrls: ['../css/bootstrap.min.css', '../css/style.css', '../css/table.css', '../css/bootstrap-theme.min.css'],
  providers: [UserService, SongService]
})

export class SharedWithMeComponent implements  OnInit {
  public mysongs: Song[];
  constructor(private songService:SongService,private userService:UserService, private router: Router) {
    this.userService.getLogUserInfo().then(res=>{
      this.songService.getSongsSharedWithMe(JSON.parse(res._body).username).then(ress=>{
        this.mysongs=ress;
      })
    })

  }



  ngOnInit(): void {
  }


}

