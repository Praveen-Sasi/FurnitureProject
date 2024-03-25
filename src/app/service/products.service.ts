import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public cartitemlist:any=[];
  public productlist =new BehaviorSubject<any>([])

  constructor(private http:HttpClient) { }
  getproduct(): Observable<any[]>{
   return this.http.get<any[]>('https://retoolapi.dev/25pmda/data');
  }
  getproductbyid(id:any){
   return this.http.get('https://retoolapi.dev/25pmda/data'+id);

  }
  getProductsByFilter(apiUrl : string){
    return this.http.get(apiUrl);
  }
  getproductbycategory(category:any){
  return this.http.get('https://retoolapi.dev/25pmda/data'+category);
  }
  sofafilter(){
   return this.http.get('https://retoolapi.dev/25pmda/data?category=sofa');
  }
  chairfilter(){
    return this.http.get('https://retoolapi.dev/25pmda/data?category=chair');
   }
   swingfilter(){
    return this.http.get('https://retoolapi.dev/25pmda/data?category=swing');
   }
   cubboardfilter(){
    return this.http.get('https://retoolapi.dev/25pmda/data?category=cupboard');
   }
   babyfilter(){
    return this.http.get('https://retoolapi.dev/25pmda/data?category=Baby furniture');
   }
   tablefilter(){
    return this.http.get('https://retoolapi.dev/25pmda/data?category=table');
   }
   bedfilter(){
    return this.http.get('https://retoolapi.dev/25pmda/data?category=bed');
   }
   dis5filter(){
    return this.http.get('https://retoolapi.dev/25pmda/data?discount=5%');
   }
   dis10filter(){
    return this.http.get('https://retoolapi.dev/25pmda/data?discount=10%');
   }
   dis20filter(){
    return this.http.get('https://retoolapi.dev/25pmda/data?discount=20%');
   }
   dis30filter(){
    return this.http.get('https://retoolapi.dev/25pmda/data?discount=30%');
   }
   dis40filter(){
    return this.http.get('https://retoolapi.dev/25pmda/data?discount=40%');
   }
   dis50filter(){
    return this.http.get('https://retoolapi.dev/25pmda/data?discount=50%');
   }
   dis60filter(){
    return this.http.get('https://retoolapi.dev/25pmda/data?discount=60%');
   }
   dis70filter(){
    return this.http.get('https://retoolapi.dev/25pmda/data?discount=70%');
   }
   premDeal(){
    return this.http.get('https://retoolapi.dev/25pmda/data?rating=4');
   }
  addtocart(data:any){
     this.cartitemlist.push(data);
     this.productlist.next(this.cartitemlist);
     console.log(this.cartitemlist);
  }
  products(){
    return this.productlist.asObservable();
  }
  removecartitem(data:any){
  this.cartitemlist.map((a:any,index:any)=>{
    if(data.id===a.id){
      this.cartitemlist.splice(index,1)
    }
  })
  this.productlist.next(this.cartitemlist)
  }
  //total amount
  calcluateprice(){
    let total =0;
    this.cartitemlist.map((a:any)=>{
      total +=a.disAcc;
    })
    return total;
  }
  //remove all item
  removeallitem(){
    this.cartitemlist =[];
    this.productlist.next(this.cartitemlist);
  }
}
