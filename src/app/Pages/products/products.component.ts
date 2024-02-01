import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

import { ProductsService } from 'src/app/service/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  apiUrl = 'http://localhost:3000/products';
  // discounts : any = new FormGroup({
  //   disc5 : new FormControl(''),
  //   disc10 : new FormControl('')
  // });

  disc5 = false;
  disc10 = false;
  disc20 = false;
  disc30 = false;
  disc40 = false;
  disc50 = false;

  constructor(config: NgbRatingConfig, private productService:ProductsService,private activatedRoute:ActivatedRoute) {
    config.max=1;
    config.readonly =true;
  }
 
  
  ngOnInit(): void {
    this.disc5 = false;
    this.disc10  = false;
    this.disc20  = false;
    this.disc30  = false;
    this.disc40  = false;
    this.disc50  = false;
    this.getallProducts();
    this.getallProductsbycategory();
    
  }
  productList:any[]=[];
  
  getallProductsbycategory(){
      let categoryproduct = this.activatedRoute.snapshot.paramMap.get('category');
      console.log(categoryproduct);
      categoryproduct && this.productService.getproductbycategory(categoryproduct).subscribe((result:any)=>{
        this.productList=result;
        console.log(this.productList)
      })
     
  
  }

  getallProducts(){
     this.productService.getproduct().subscribe((result:any)=>{
      this.productList=result;
      console.log(this.productList);
    })
  }
  sofaFilter(){
    this.productService.sofafilter().subscribe((result1:any)=>{
      this.productList=result1;
      console.log(this.productList);

    })
  }
  bedFilter(){
    this.productService.bedfilter().subscribe((result2:any)=>{
      this.productList=result2;
      console.log(this.productList);
    })
  }
  tableFilter(){
    this.productService.tablefilter().subscribe((result3:any)=>{
      this.productList=result3;

    })
  }
  cupboardFilter(){
    this.productService.cubboardfilter().subscribe((result4:any)=>{
      this.productList=result4;
      console.log(this.productList);
    })
  }
  swingFilter(){
    this.productService.swingfilter().subscribe((result5:any)=>{
      this.productList=result5;
      console.log(this.productList);

    })
  }
  babyFilter(){
    this.productService.babyfilter().subscribe((result6:any)=>{
      this.productList=result6;
      console.log(this.productList);
    
    })
  }
chairFilter(){
  this.productService.chairfilter().subscribe((result7:any)=>{
    this.productList=result7;
    console.log(this.productList);
  })
}

removeDiscFilter(discountPercent:string){
  this.apiUrl = this.apiUrl.replace('discount='+discountPercent,'');
  this.apiUrl = this.apiUrl.includes('discount') ? this.apiUrl : this.apiUrl.replace('?','');
  this.apiUrl = this.apiUrl.includes('discount') ? this.apiUrl : this.apiUrl.replace('&','');
}

applyDiscFilter(discountPercent:string){
  this.apiUrl = this.apiUrl.includes('?') ? this.apiUrl+"&" : this.apiUrl  + "?";
  this.apiUrl = this.apiUrl + "discount=" + discountPercent ;
}

checkBoxAction(item:string){
  switch(item){
    case '5':
      this.disc5 = !this.disc5;
      this.disc5 ? this.applyDiscFilter(item) : this.removeDiscFilter(item);
      break;
    case '10':
      this.disc10 = !this.disc10;
      this.disc10 ? this.applyDiscFilter(item) : this.removeDiscFilter(item);
      break;
      case '20':
        this.disc20 = !this.disc20;
        this.disc20 ? this.applyDiscFilter(item) : this.removeDiscFilter(item);
        break;
        case '30':
          this.disc30 = !this.disc30;
          this.disc30 ? this.applyDiscFilter(item) : this.removeDiscFilter(item);
          break;
          case '40':
            this.disc40 = !this.disc40;
            this.disc40 ? this.applyDiscFilter(item) : this.removeDiscFilter(item);
            break;
            case '50':
              this.disc50 = !this.disc50;
              this.disc50 ? this.applyDiscFilter(item) : this.removeDiscFilter(item);
                    
  }
}

discFilter(discountPercent: string){
  this.checkBoxAction(discountPercent);
  console.log(this.disc5, this.disc10,this.disc20,this.disc30,this.disc40,this.disc50, this.apiUrl);
  
  this.productService.getProductsByFilter(this.apiUrl).subscribe(
    (response:any) => {
      console.log(response);
      this.productList = response;
    },
    err => {
      console.log(err);
    }
  )
}

}
