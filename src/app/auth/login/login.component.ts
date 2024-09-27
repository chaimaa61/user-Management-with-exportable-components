import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { ApiService } from '../Services/api.service';
import { LoginRequest } from 'src/app/interfaces/LoginRequest';
import { Role } from 'src/app/enums/role';
import { UserService } from 'src/app/core/Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // email : string = ""
  // password : string = ""
  loginRequest:LoginRequest={username:"",password:""}
  constructor(private api:ApiService,private service : UserService,private route:Router){}

  ngOnInit(): void {
    
  }
  
  authenticate() {
    this.api.authenticate(this.loginRequest).subscribe(
      (result) => {
        console.log(result)
        // Handle successful login
        if (result.role === Role.admin) {
          console.log("admin")
          this.route.navigate(['/admin']); // Navigate to Admin page
        } else if (result.role === Role.user) {
          console.log("user")
          this.service.setUserAuth(result);
          this.route.navigate(['/UserProfile']); // Navigate to User Profile page
        }
      },
      (error) => {
        // Handle login error
        console.error('Login failed', error);
        alert('Login failed! Please check your credentials.');
      }
    );
  }

  // Submit(){
  //   console.log("hello");
    
  // }
  
}
