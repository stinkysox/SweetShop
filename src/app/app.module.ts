import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CustomizeComponent } from './customize/customize.component';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './footer/footer.component';
import { CakesComponent } from './products/cakes/cakes.component';
import { PastryComponent } from './products/pastry/pastry.component';
import { DonutsComponent } from './products/donuts/donuts.component';
import { BrowniesComponent } from './products/brownies/brownies.component';
import { CupckaesComponent } from './products/cupckaes/cupckaes.component';
import { CookiesComponent } from './products/cookies/cookies.component';
import { AnniversaryComponent } from './customize/wedding/anniversary.component';
import { ShowerComponent } from './customize/birthday/shower.component';
import { CartoonsComponent } from './customize/themecake/cartoons.component';
import { DiwaliComponent } from './customize/newyear/diwali.component';
import { CarsbikesComponent } from './customize/christmas/carsbikes.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderdetailsComponent } from './checkout/orderdetails/orderdetails.component';
import { ContactdetailsComponent } from './checkout/contactdetails/contactdetails.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { OrdertrackingComponent } from './ordertracking/ordertracking.component';
import { StoremanagementComponent } from './storemanagement/storemanagement.component';
// import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ProductsComponent,
    CustomizeComponent,
    CartComponent,
    FooterComponent,
    CakesComponent,
    PastryComponent,
    DonutsComponent,
    BrowniesComponent,
    CupckaesComponent,
    CookiesComponent,
    AnniversaryComponent,
    ShowerComponent,
    CartoonsComponent,
    DiwaliComponent,
    CarsbikesComponent,
    CheckoutComponent,
    OrderdetailsComponent,
    ContactdetailsComponent,
    OrdertrackingComponent,
    StoremanagementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    GoogleMapsModule,
  ],
  providers: [
    // AuthService,
    provideClientHydration(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
