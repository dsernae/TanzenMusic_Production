import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import {AppComponent} from "./components/app.component"
import { HomeComponent } from './components/home.component';
import {LoginComponent} from './components/login.component';
import {RegisterComponent} from './components/register.component';
import {ExplorarComponent} from "./components/explorar.component";
import {NewSongComponent} from "./components/newSong.component";
import {EditComponent} from "./components/edit.component";
import {UserService} from "./services/user.service"
import {SongService} from "./services/song.service";
import {CustExtBrowserXhr} from "./cust-ext-browser-xhr";
import {SharedWithMeComponent} from "./components/sharedWithMe.component";
import {EditUserComponent} from "./components/editUser.component";



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ExplorarComponent,
    NewSongComponent,
    EditComponent,
    SharedWithMeComponent,
    EditUserComponent,
    AppComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [UserService, SongService, CustExtBrowserXhr],
  bootstrap: [AppComponent]
})
export class AppModule { }
