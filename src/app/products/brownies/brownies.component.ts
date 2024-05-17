import { Component } from '@angular/core';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-brownies',
  templateUrl: './brownies.component.html',
  styleUrl: './brownies.component.css'
})
export class BrowniesComponent {

  cakes: { id: number, image: string; title: string; price: number; quantity: number }[] = [
    { id: 19, image: './assets/brownie/chocochip.jpg', title: 'Choco Chip Brownie', price: 199, quantity: 1 },
    { id: 20, image: './assets/brownie/nutella.webp', title: 'Nutella Brownie', price: 99, quantity: 1 },
    { id: 21, image: './assets/brownie/walnut.jpg', title: 'Walnut Brownie', price: 299, quantity: 1 }  
  ];

  constructor(private cartService: CartService) {}

  addToCart(product: any): void {
    this.cartService.addToCart(product);
    alert('Product added to cart');
  }

}
