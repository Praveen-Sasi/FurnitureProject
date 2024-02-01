import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Authentication/login/login.component';
import { RegistrationComponent } from './Authentication/registration/registration.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProfileComponent } from './Pages/profile/profile.component';
import { ProductDescriptionComponent } from './Pages/product-description/product-description.component';
import { ProductsComponent } from './Pages/products/products.component';


const routes: Routes = [
  {path :"login",component:LoginComponent},
  {path :"register", component:RegistrationComponent},
  {path :"" , component:HomeComponent},
  {path :"car", component:CarouselComponent},
  {path :"profile", component:ProfileComponent},
  {path :"individualPro/:productId", component:ProductDescriptionComponent},
  {path : "product" , component:ProductsComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
