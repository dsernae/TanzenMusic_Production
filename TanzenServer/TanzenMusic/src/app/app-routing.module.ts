import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home.component';
import { LoginComponent } from './components/login.component';
import { RegisterComponent } from './components/register.component';
import {ExplorarComponent} from "./components/explorar.component";
import {NewSongComponent} from "./components/newSong.component";
import {EditComponent} from "./components/edit.component";
import {SharedWithMeComponent} from "./components/sharedWithMe.component";
import {EditUserComponent} from "./components/editUser.component";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login',  component: LoginComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'register',  component: RegisterComponent },
  { path: 'explorar',  component: ExplorarComponent },
  { path: 'newSong',  component: NewSongComponent },
  { path: 'edit',  component: EditComponent },
  { path: 'sharedWithMe',  component: SharedWithMeComponent },
  { path: 'editUser',  component: EditUserComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule {

}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
