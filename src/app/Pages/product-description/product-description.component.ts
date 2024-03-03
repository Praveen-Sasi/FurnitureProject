import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/service/products.service';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss']
})
export class ProductDescriptionComponent implements OnInit {
  
  productData:any=[];
  showadd:boolean=true;
  showremove:boolean=false;
item: any;
  products: any;
  constructor(config: NgbRatingConfig,private product:ProductsService, private activatedroute:ActivatedRoute){
    config.max=5;
    config.readonly =true;
  }
  ngOnInit(): void {
this.getelementsbyid();
  }
getelementsbyid(){
  let productId=this.activatedroute.snapshot.paramMap.get('productId');
console.log(productId);
productId && this.product.getproductbyid(productId).subscribe((result:any)=>{
this.productData=result;
console.log(this.productData)
  })
    
}
  
  quantity:number=1;
  increase(){
   this.quantity+=1
  }  
  decrease(){
   this.quantity-=1
  }  
  addtocart(productdata:any){
    this.showadd=false;
    this.showremove=true;
    this.product.addtocart(productdata);
   
  }
  removeitem(productdata:any){
    this.showadd=true;
    this.showremove=false;
    this.product.removecartitem(productdata);
  }
  
}
