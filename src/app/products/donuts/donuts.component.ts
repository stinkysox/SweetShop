import { Component } from '@angular/core';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrl: './donuts.component.css'
})
export class DonutsComponent {
  cakes: { id: number, image: string; title: string; price: number; quantity: number }[] = [
    { id: 30, image: './assets/donut/cottoncandyglazed.jpg', title: 'Cooton Candy Glazed Donut', price: 199, quantity: 1 },
    { id: 31, image: './assets/donut/doublechocolate.jpg', title: 'Double Chocolate Donut', price: 99, quantity: 1 },
    { id: 32, image: './assets/donut/oreoring.jpg', title: 'Oreo Ring Donut', price: 299, quantity: 1 },
    { id: 33, image: './assets/donut/trufflefantasy.jpg', title: 'Truffle Fantasy Donut', price: 89, quantity: 1 },
    { id: 34, image: './assets/donut/whitesprinkler.jpg', title: 'White Sprinkler Donut', price: 99, quantity: 1 },
    
  ];

  constructor(private cartService: CartService) {}

  addToCart(product: any): void {
    this.cartService.addToCart(product);
    alert('Product added to cart');
  }
}
