import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit {
  public totalamount:number=0;
  constructor (private product:ProductsService){}
  ngOnInit(): void {
    setTimeout(() => {
      
    }, 4000);
  
   //total amount coming from api 
   this.totalamount=this.product.calcluateprice();
  }

}
