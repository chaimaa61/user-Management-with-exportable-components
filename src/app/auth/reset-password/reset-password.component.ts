import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl} from '@angular/forms';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  onSubmit(formReset:any){
    console.log("formSubmitted" , formReset.value);
    formReset.reset();
  }
  ngOnInit(): void {
    
  }
  // myForm : FormGroup ;
}
