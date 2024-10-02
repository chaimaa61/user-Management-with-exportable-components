import { NgModule } from '@angular/core';
import { CommonModule, NgForOf } from '@angular/common';
import { AdminDComponent } from './admin-d/admin-d.component';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminDComponent,
    NotAuthorizedComponent
  ],
  imports: [
    CommonModule,
    FormsModule
    ],
 
})
export class AdminModule { }
