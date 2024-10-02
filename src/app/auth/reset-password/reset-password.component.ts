import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl} from '@angular/forms';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  email = ''

  onSubmit(formReset:any){
    console.log("formSubmitted" , formReset.email);
  }
  ngOnInit(): void {
    
  }
  // myForm : FormGroup ;
}
