import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  getproduct(): Observable<any[]>{
   return this.http.get<any[]>('http://localhost:3000/products');
  }
  getproductbyid(id:any){
   return this.http.get('http://localhost:3000/products/'+id);

  }
  getProductsByFilter(apiUrl : string){
    return this.http.get(apiUrl);
  }
  getproductbycategory(category:any){
  return this.http.get('http://localhost:3000/products/'+category);
  }
  sofafilter(){
   return this.http.get('http://localhost:3000/products?category=sofa');
  }
  chairfilter(){
    return this.http.get('http://localhost:3000/products?category=chair');
   }
   swingfilter(){
    return this.http.get('http://localhost:3000/products?category=swing');
   }
   cubboardfilter(){
    return this.http.get('http://localhost:3000/products?category=cupboard');
   }
   babyfilter(){
    return this.http.get('http://localhost:3000/products?category=Baby furniture');
   }
   tablefilter(){
    return this.http.get('http://localhost:3000/products?category=table');
   }
   bedfilter(){
    return this.http.get('http://localhost:3000/products?category=bed');
   }
   dis5filter(){
    return this.http.get('http://localhost:3000/products?discount=5%');
   }
   dis10filter(){
    return this.http.get('http://localhost:3000/products?discount=10%');
   }
   dis20filter(){
    return this.http.get('http://localhost:3000/products?discount=20%');
   }
   dis30filter(){
    return this.http.get('http://localhost:3000/products?discount=30%');
   }
   dis40filter(){
    return this.http.get('http://localhost:3000/products?discount=40%');
   }
   dis50filter(){
    return this.http.get('http://localhost:3000/products?discount=50%');
   }
   dis60filter(){
    return this.http.get('http://localhost:3000/products?discount=60%');
   }
   dis70filter(){
    return this.http.get('http://localhost:3000/products?discount=70%');
   }
   premDeal(){
    return this.http.get('http://localhost:3000/products?rating=4');
   }

}
