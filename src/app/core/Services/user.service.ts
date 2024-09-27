import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   userAuth !: User 

  constructor() { }
  private message = new BehaviorSubject(this.userAuth)
   getUser = this.message.asObservable()

   setUserAuth( user :User){
    this.userAuth = user ;
    this.message.next(this.userAuth);
   }
}
