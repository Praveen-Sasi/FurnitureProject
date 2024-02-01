import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-car-slide',
  templateUrl: './car-slide.component.html',
  styleUrls: ['./car-slide.component.scss']
})
export class CarSlideComponent implements OnInit {
  constructor (private product:ProductsService){}
  ngOnInit(): void {
    this.preDeals()
    
  }
productlist:any[]=[];
preDeals(){
  this.product.premDeal().subscribe((result:any)=>{
    this.productlist=result;
    console.log(this.productlist);
  })
}
  
}