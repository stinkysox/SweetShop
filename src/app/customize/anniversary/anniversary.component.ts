import { Component } from '@angular/core';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-anniversary',
  templateUrl: './anniversary.component.html',
  styleUrl: './anniversary.component.css'
})
export class AnniversaryComponent {

  cakes: { id: number, image: string; title: string; price: number; quantity: number }[] = [
    { id: 47, image: './assets/anniversary/o1.jpg', title: 'Anniversary Cake S1', price: 2999, quantity: 1 },
    { id: 48, image: './assets/anniversary/o2.jpg', title: 'Anniversary Cake S2', price: 1999, quantity: 1 },
    { id: 49, image: './assets/anniversary/o3.webp', title: 'Anniversary Cake S3', price: 2299, quantity: 1 },
    { id: 50, image: './assets/anniversary/o4.jpeg', title: 'Anniversary Cake S4', price: 2199, quantity: 1 },
    { id: 51, image: './assets/anniversary/o5.jpg', title: 'Anniversary Cake S5', price: 1299, quantity: 1 }  
  ];

  constructor(private cartService: CartService) {}

  addToCart(product: any): void {
    this.cartService.addToCart(product);
    alert('Product added to cart');
  }

}
