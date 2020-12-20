import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {RegisterService} from '../services/register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: string = ""
  password: string = ""

  service: RegisterService

  constructor(private router: Router, 
    userservice:RegisterService
    ) {
      this.service=userservice
     }
addMember(){
  console.log(this.username)
  if(this.username.length===0){
    alert("username is required")
  }
  else if(this.password.length===0){
    alert("password is required")
  }
  else{
    this.service.addUser(this.username, this.password).subscribe((res:any)=>{
    
      if(res.username !== null){
        alert("you have successfully added")
        this.router.navigate(['/login'])
      }else{
        alert("error")
      }
    })
  }
}
  ngOnInit(): void {
  }

}
