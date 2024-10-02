import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './Services/user.service';
import { AuthService } from './auth.service';
import { AdminGuard } from './Guards/admin.guard';




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
