import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Song } from '../models/Song';

@Injectable()
export class SongService {
  private headers = new Headers({ "Content-Type": "application/json"});
  private songUrl = '';
  constructor(private http: Http) {
  }


  createSong(song: Song): Promise<Song> {
    return this.http.post(this.songUrl+ "createSong", JSON.stringify(song), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Song )
      .catch(this.handleError);
  }

  deleteSong(id: string): Promise<void>{
    let url = this.songUrl + "deleteSong";
    return this.http.post(url,JSON.stringify({_id:id}), {headers: this.headers})
      .toPromise()
      .then(()=>null)
      .catch(this.handleError)
  }

  getAllSongs(): Promise<Song[]> {
    return this.http.get(this.songUrl+"getAllSongs")
      .toPromise()
      .then(courses => courses.json() as Song[])
      .catch(this.handleError);
  }

  searchSongByTitle(searchTerm : string): Promise<Song[]> {
    let url = this.songUrl + "searchSongs";
    return this.http.post(url, JSON.stringify({searchTerm:searchTerm}),{headers: this.headers})
      .toPromise()
      .then(res=> res.json() as Song[])
      .catch(this.handleError)
  }

  searchMySongByTitle(searchTerm : string, username:string): Promise<Song[]> {
    let url = this.songUrl + "searchSongs";
    return this.http.post(url, JSON.stringify({searchTerm:searchTerm, username:username}), {headers: this.headers})
      .toPromise()
      .then(res=> res.json() as Song[])
      .catch(this.handleError)
  }

  getAllSongsByGenre(searchTerm: string): Promise<Song[]> {
    return this.http.post(this.songUrl+"songGenre", JSON.stringify({searchTerm:searchTerm}), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Song[])
      .catch(this.handleError);
  }

  getMySongs(username : string): Promise<Song[]> {
    let url = this.songUrl + "mySongs" ;
    return this.http.post(url,JSON.stringify({username:username}), {headers: this.headers})
      .toPromise()
      .then(res=> res.json() as Song[])
      .catch(this.handleError)
  }

  getSongsSharedWithMe(username : string): Promise<Song[]> {
    let url = this.songUrl + "sharedWith" ;
    return this.http.post(url, JSON.stringify({username:username}), {headers: this.headers})
      .toPromise()
      .then(res=> res.json() as Song[])
      .catch(this.handleError)
  }

  shareSongWith(_id: string, username: string): Promise<any> {
    return this.http.post(this.songUrl+ "shareSongs", JSON.stringify({_id:_id,username: username}), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as any )
      .catch(this.handleError);
  }

  updateSong(song:Song):Promise<any>{
    return this.http.post(this.songUrl+"updateSong", JSON.stringify(song), {headers:this.headers})
      .toPromise()
      .then(res=> res as any)
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
