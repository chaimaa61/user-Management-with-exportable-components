import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/auth/Services/api.service';
import { UserService } from 'src/app/core/Services/user.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
// user : User= {id:0,username :"",password :"" , role:Role.user};
user !: User
constructor(private service: ApiService , private serviceU: UserService){
  serviceU.getUser.subscribe(
    data =>(
      this.user = data
    )
  )
}
ngOnInit(): void {
  // this.service.getOneUser(this.user.id).subscribe(data=>{
  //   this.user = data
  //   console.log(this.user);
    
  }

}
