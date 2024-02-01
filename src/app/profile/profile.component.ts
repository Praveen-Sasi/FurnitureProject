import { Component } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  constructor(private api:ApiService){}
  ngOnInit(): void {
     this.api.canAccess();
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


