import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  private user = null
  login(){

  }

  isloggedin():boolean{
    return this.user !== null;
  }
}
