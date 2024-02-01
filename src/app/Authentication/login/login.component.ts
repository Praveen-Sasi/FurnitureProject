import { Component,OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
   
  }

  [x: string]: any;
    
  email:string='';
  password:string='';
  log:any[]=[]
  constructor(private user:UsersService,private router:Router){}
  
  login(){
    let getapi="email="+this.email+"&password="+this.password;
    this.user.getUser(getapi).subscribe((response:any)=>{
      this.log=response;
      if(this.log.length>0){
        alert('login sucessfull')
        sessionStorage.setItem("email",this.log[0].email)
        this.router.navigate(['/']);

      }
      else{
        alert('Email or Password Incorrect');
        this.email='';
        this.password='';
      }
      
    }) 
    
 }
}
