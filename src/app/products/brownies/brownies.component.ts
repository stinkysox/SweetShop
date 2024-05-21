import { Component } from '@angular/core';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-brownies',
  templateUrl: './brownies.component.html',
  styleUrl: './brownies.component.css',
})
export class BrowniesComponent {
  cakes: {
    id: number;
    image: string;
    title: string;
    price: number;
    quantity: number;
  }[] = [
    {
      id: 19,
      image:
        'https://i.pinimg.com/564x/c9/5f/68/c95f68316cbc2da2d8f818735000a7b3.jpg',
      title: 'Sea Salt Caramel Brownie',
      price: 220,
      quantity: 1,
    },
    {
      id: 20,
      image:
        'https://i.pinimg.com/564x/1d/2a/0e/1d2a0e7cc59a1a120039e2ad51f70a43.jpg',
      title: 'Rasberry Brownie',
      price: 99,
      quantity: 1,
    },
    {
      id: 21,
      image:
        'https://i.pinimg.com/564x/48/0f/0b/480f0be8398f7b20b1425ef7a654912a.jpg',
      title: 'Vanilla Icecream Chocolate Brownie',
      price: 300,
      quantity: 1,
    },
  ];

  constructor(private cartService: CartService) {}

  addToCart(product: any): void {
    this.cartService.addToCart(product);
    alert('Product added to cart');
  }
}
