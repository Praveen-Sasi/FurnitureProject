import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

constructor(private user:UsersService){}
  ngOnInit(): void {
     this.user.canAccess();
  }
  screen1:boolean=true;
  screen2:boolean=false;
  screen3:boolean=false;
  screen4:boolean=false;
  
clickinfo(){
  this.screen1=true;
 this.screen2=false;
 this.screen3=false;
 this.screen4=false;
 
 
}
clickaddress(){
  this.screen2=true;
  this.screen1=false;
  this.screen3=false;
  this.screen4=false;
 
}
clickReview(){
  this.screen3=true;
  this.screen1=false;
  this.screen2=false; 
  this.screen4=false;
}
clickWishlist(){
  this.screen3=false;
  this.screen1=false;
  this.screen2=false; 
  this.screen4=true;
}
}