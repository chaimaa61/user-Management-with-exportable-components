import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AdminDComponent } from './admin/admin-d/admin-d.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { AdminGuard } from './core/Guards/admin.guard';
import { NotAuthorizedComponent } from './admin/not-authorized/not-authorized.component';
import { AuthGuard } from './core/Guards/auth.guard';

const routes: Routes = [
  { path : 'reset-password' , component : ResetPasswordComponent},
  { path : 'login' , component : LoginComponent},
  { path : 'admin' , component : AdminDComponent , canActivate :[AdminGuard],},
  { path : 'UserProfile' , component : UserProfileComponent , canActivate :[AuthGuard]},
  { path : '' , redirectTo : '/login' , pathMatch: 'full'},
  { path : 'not-authorized' , component : NotAuthorizedComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
