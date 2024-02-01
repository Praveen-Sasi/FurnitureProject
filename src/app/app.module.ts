import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Authentication/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegistrationComponent } from './Authentication/registration/registration.component';
import { LogoutComponent } from './Authentication/logout/logout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './navbar/header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProfileComponent } from './Pages/profile/profile.component';
import { CarSlideComponent } from './home/car-slide/car-slide.component';
import { AboutComponent } from './home/about/about.component';
import { InfoComponent } from './profile/cat/info/info.component';
import { AddressComponent } from './profile/cat/address/address.component';
import { ReviewComponent } from './profile/cat/review/review.component';
import { WishlistComponent } from './profile/cat/wishlist/wishlist.component';
import { ProductDescriptionComponent } from './Pages/product-description/product-description.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { ProductsComponent } from './Pages/products/products.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    LogoutComponent,
    NavbarComponent,
    HomeComponent,
    HeaderComponent,
    CarouselComponent,
    ProfileComponent,
    CarSlideComponent,
    AboutComponent,
    InfoComponent,
    AddressComponent,
    ReviewComponent,
    WishlistComponent,
    ProductDescriptionComponent,
    ProductsComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
  
  
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
