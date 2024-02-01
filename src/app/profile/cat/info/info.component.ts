import { Component } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {
  edit1:boolean=true;
  edit2:boolean=true;
  edit3:boolean=true;
  edit4:boolean=true;
  

  FirstName:string="";
  LastName:string="";
  gender:any="";
  mail:any="";
  mobile:any="";


}
