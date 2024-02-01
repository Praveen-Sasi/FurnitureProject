import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/users.service';
  

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit{
 
  
    firstName:string="";
    lastName:string="";
    email:string="";
    Password:string="";
    cPassword:string="";
    reguser:any[]=[]
     
    constructor(private user:UsersService, private router:Router){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  log:any[]=[]
    register(){
      if(this.firstName !="" && this.lastName !="" && this.email !="" && this.Password !="" && this.cPassword!="" && this.Password == this.cPassword){
  
  
      let reguser={
        firstName:this.firstName,
        lastName:this.lastName,
        password:this.Password,
        email:this.email
  
      }
      this.user.insertUser(reguser).subscribe((response)=>{
        if(response!=null){
          alert("signup success")
          let getapi="email="+this.email+"&password="+this.Password;
          this.router.navigate(["/"])
          this.user.getUser(getapi).subscribe((reponse:any)=>{
            this.log=reponse;
            if(this.log.length>0){
              sessionStorage.setItem("email",this.log[0].email)
              console.log(this.log)
              
            
            }
          }) 
        }
        else{
          alert("signup failed")
        }
      })
      
    }else{
      alert('Invalid')
    }
  
  }
  }





