import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { adminGuard } from './Guards/admin.guard';
import { authGuard } from './Guards/auth.guard';
import { AuthService } from './Services/auth.service';
import { UserService } from './Services/user.service';




@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    
    AuthService,
    UserService

  ]
})
export class CoreModule { }
