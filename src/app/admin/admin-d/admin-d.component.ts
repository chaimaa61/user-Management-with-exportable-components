import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/auth/Services/api.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-admin-d',
  templateUrl: './admin-d.component.html',
  styleUrls: ['./admin-d.component.css'],
})
export class AdminDComponent implements OnInit {
  i: number = 0;
  users: User[] = [];
  editUser: User | null = null; // Stores the user being edited
  showedit: boolean = false;

  constructor(private service: ApiService) {}

  ngOnInit(): void {
    console.log('helo');
    this.getUsers();
    console.log('helo2');
  }
  getUsers() {
    this.service.getU().subscribe((data) => {
      // console.log(data);
      this.users = data;
    });
  }
  edit(user: User) {
    this.showedit = !this.showedit;
    console.log(this.showedit);
    
    console.log('editinggggggggg');

    this.editUser = { ...user };
  }
  // This function submits the edited user data
  save() {
    if (this.editUser) {
      this.service.updateUser(this.editUser).subscribe((updatedUser) => {
        console.log(updatedUser);
        this.getUsers();
        // Update the user in the users array
        // const index = this.users.findIndex(u => u.id === updatedUser.id);
        // if (index !== -1) {
        //   this.users[index] = updatedUser;
        // }
         this.editUser = null; // Reset the edit form
      });
    }
  }

  cancelEdit() {
    this.editUser = null; // Cancel editing
    this.showedit = !this.showedit;
  }
  delete(user: User) {
    this.service.deleteUser(user).subscribe(
      (resp) => {
        this.users.splice(this.users.indexOf(user), 1);
      },
      (error) => {
        console.log('errur', error);
      }
    );
  }
}
