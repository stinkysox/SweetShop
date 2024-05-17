import { Component } from '@angular/core';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrl: './cookies.component.css'
})
export class CookiesComponent {
  cakes: { id: number, image: string; title: string; price: number; quantity: number }[] = [
    { id: 22, image: './assets/cookies/doublechoc.jpg', title: 'Double Chocolate Cookies', price: 199, quantity: 1 },
    { id: 23, image: './assets/cookies/oatmeal.jpg', title: 'Oatmeal Cookies', price: 99, quantity: 1 },
    { id: 24, image: './assets/cookies/peanutbutter.jpg', title: 'Peanut Butter Cookies', price: 299, quantity: 1 }
  ];

  constructor(private cartService: CartService) {}

  addToCart(product: any): void {
    this.cartService.addToCart(product);
    alert('Product added to cart');
  }

}
