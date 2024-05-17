import { Component } from '@angular/core';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-carsbikes',
  templateUrl: './carsbikes.component.html',
  styleUrl: './carsbikes.component.css'
})
export class CarsbikesComponent {
  cakes: { id: number, image: string; title: string; price: number; quantity: number }[] = [
    { id: 52, image: './assets/carsbikes/o1.jpg', title: 'Cars & Bikes Cake S1', price: 2999, quantity: 1 },
    { id: 53, image: './assets/carsbikes/o2.jpg', title: 'Cars & Bikes Cake S2', price: 1999, quantity: 1 },
    { id: 54, image: './assets/carsbikes/o4.jpg', title: 'Cars & Bikes Cake S4', price: 2199, quantity: 1 },
    { id: 55, image: './assets/carsbikes/o3.jpg', title: 'Cars & Bikes Cake S5', price: 1299, quantity: 1 }  
  ];

  constructor(private cartService: CartService) {}

  addToCart(product: any): void {
    this.cartService.addToCart(product);
    alert('Product added to cart');
  }
}
