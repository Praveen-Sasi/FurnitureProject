import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(public user:UsersService, private product:ProductsService){

  }
  public cartitems:number=0;

  ngOnInit(): void {
    this.product.products().subscribe(res=>{
      this.cartitems= res.length;
    })
      
  }

}
