import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Role } from '../enums/role';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 private user = {
  role:Role.admin
  }
isAdmin(): boolean{
  return this.user.role === 'admin';
}

isUser(): boolean{
  return this.user.role === 'user';
}
 
}
