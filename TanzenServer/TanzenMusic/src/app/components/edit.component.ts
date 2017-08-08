import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from "../services/user.service";
import {SongService} from "../services/song.service";
import {User} from "../models/User";
import {Song} from "../models/Song";
@Component ({
  selector: 'edit',
  templateUrl: '../html/edit.component.html',
  styleUrls: ['../css/bootstrap.min.css', '../css/bootstrap-theme.min.css', '../css/edit.component.css'],
  providers: [UserService, SongService]
})

export class EditComponent implements  OnInit {
  public editingtitle:string;
  public editingartist:string;
  public editinggenre:string;
  public editingdate:string;
  public editingvisibility:string;
  constructor(private userService:UserService,private songService: SongService, private router:Router) {
    let song = new Song();
     song = JSON.parse(sessionStorage.getItem('editSong'));
     this.editingtitle=song.title;
     this.editingartist=song.artist;
     this.editingdate= song.date;
     this.editinggenre = song.genre;
     this.editingvisibility = song.visibility;
  }

  updateSong():void{
    let song = new Song();
    song = JSON.parse(sessionStorage.getItem('editSong'));
    song.title = this.editingtitle;
    song.artist = this.editingartist;
    song.date = this.editingdate;
    song.visibility = this.editingvisibility;
    song.genre = this.editinggenre;
    console.log(song);
    this.songService.updateSong(song).then(res=>{
      console.log(res);
      if(res._body.toString().indexOf("exitosamente")!=-1){
        this.router.navigate(['/home']);
      }
    })
  }

  deleteSong(){
    let song = new Song();
    song = JSON.parse(sessionStorage.getItem('editSong'));
    this.songService.deleteSong(song._id).then(res=>{
      this.router.navigate(['/home'])
    });
  }

  ngOnInit(): void {
  }


}
