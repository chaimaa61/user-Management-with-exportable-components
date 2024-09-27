import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AdminDComponent } from './admin/admin-d/admin-d.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';

const routes: Routes = [
  { path : 'reset-password' , component : ResetPasswordComponent},
  { path : 'login' , component : LoginComponent},
  { path : 'admin' , component : AdminDComponent},
  { path : 'UserProfile' , component : UserProfileComponent},
  { path : '' , redirectTo : '/login' , pathMatch: 'full'}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
