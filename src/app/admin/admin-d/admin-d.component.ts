import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/auth/Services/api.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-admin-d',
  templateUrl: './admin-d.component.html',
  styleUrls: ['./admin-d.component.css']
})
export class AdminDComponent implements OnInit{
i : number = 0
users : User[] = []

constructor(private service:ApiService){}

ngOnInit(): void {
  this. service.getU().subscribe(data=>{ 
    console.log(data)
    this.users = data
  })
}
}
