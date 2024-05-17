import { Component } from '@angular/core';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-cartoons',
  templateUrl: './cartoons.component.html',
  styleUrl: './cartoons.component.css'
})
export class CartoonsComponent {

  cakes: { id: number, image: string; title: string; price: number; quantity: number }[] = [
    { id: 56, image: './assets/cartoons/o1.webp', title: 'Cartoon Cake S1', price: 2999, quantity: 1 },
    { id: 57, image: './assets/cartoons/o2.avif', title: 'Cartoon Cake S2', price: 1999, quantity: 1 },
    { id: 58, image: './assets/cartoons/o3.jpg', title: 'Cartoon Cake S3', price: 2299, quantity: 1 },
    { id: 59, image: './assets/cartoons/o4.jpg', title: 'Cartoon Cake S4', price: 2199, quantity: 1 },
    { id: 60, image: './assets/cartoons/o5.png', title: 'Cartoon Cake S5', price: 1299, quantity: 1 },
    { id: 61, image: './assets/cartoons/o6.jpg', title: 'Cartoon Cake S6', price: 2999, quantity: 1 },
    { id: 62, image: './assets/cartoons/o8.jpg', title: 'Cartoon Cake S7', price: 1999, quantity: 1 },
    { id: 63, image: './assets/cartoons/o7.webp', title: 'Cartoon Cake S8', price: 2299, quantity: 1 }
  ];

  constructor(private cartService: CartService) {}

  addToCart(product: any): void {
    this.cartService.addToCart(product);
    alert('Product added to cart');
  }

}
