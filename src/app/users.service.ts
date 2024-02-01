import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private router:Router,private http:HttpClient) { }
  isAuthenticated():boolean{
    if(sessionStorage.getItem('email')!==null){
      return true;
    }
    return false;
  }
  canAccess(){
    if(!this.isAuthenticated()){
      this.router.navigate(['/login']);
    }
 
}
insertUser(regapi:any){
  return this.http.post('http://localhost:3000/users',regapi)
}

getUser(getapi:any){
  return this.http.get('http://localhost:3000/users?'+getapi)
}

}

