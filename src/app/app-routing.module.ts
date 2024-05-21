import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CustomizeComponent } from './customize/customize.component';
import { CartComponent } from './cart/cart.component';
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
import { OrdertrackingComponent } from './ordertracking/ordertracking.component';
import { StoremanagementComponent } from './storemanagement/storemanagement.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'products',
    component: ProductsComponent,
    children: [
      { path: 'cakes', component: CakesComponent },
      { path: 'pastry', component: PastryComponent },
      { path: 'donuts', component: DonutsComponent },
      { path: 'brownies', component: BrowniesComponent },
      { path: 'cupcakes', component: CupckaesComponent },
      { path: 'cookies', component: CookiesComponent },
    ],
  },
  {
    path: 'customize',
    component: CustomizeComponent,
    children: [
      { path: 'anniversary', component: AnniversaryComponent },
      { path: 'shower', component: ShowerComponent },
      { path: 'cartoons', component: CartoonsComponent },
      { path: 'diwali', component: DiwaliComponent },
      { path: 'carsbikes', component: CarsbikesComponent },
    ],
  },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'ordertracking', component: OrdertrackingComponent },
  { path: 'store', component: StoremanagementComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
