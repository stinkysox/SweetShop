import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cards: { image: string; title?: string; description?: string }[] = [
    { image: './assets/cake7.webp', title: 'DELICIOUS CAKES', description: '' },
    { image: './assets/cake.jpg', title: 'MAKE A WISH & INDULGE', description: ''  },
    { image:'./assets/mcakes.jpg', title: 'TASTE THE MANGO MAGIC', description: '' },
    { image: './assets/gcake.webp', title: 'GOURMET CAKES', description: '' }
  ];
  currentIndex = 0;
  totalPages = Math.ceil(this.cards.length / 4);

  cakes: { id: number, image: string; title: string; price: number; quantity: number }[] = [
    { id: 1, image: './assets/chocake.webp', title: 'Chocolate Cake', price: 1799, quantity: 1 },
    { id: 2, image: './assets/bestseller/rdvcake.jpg', title: 'Red Velvet Cake', price: 1399, quantity: 1 },
    { id: 3, image: './assets/bestseller/pinecake.jpeg', title: 'PineApple Cake', price: 999, quantity: 1 },
    { id: 4, image: './assets/bestseller/cheesecake.webp', title: 'Cheesecake', price: 1899, quantity: 1 },
    { id: 5, image: './assets/bestseller/vanillacake.webp', title: 'Vanilla Cake', price: 899, quantity: 1 },
    { id: 6, image: './assets/bestseller/strawberrycake.jpg', title: 'Strawberry Cake', price: 1399, quantity: 1 },
    { id: 7, image: './assets/bestseller/blackforestcake.webp', title: 'Black Forest Cake', price: 999, quantity: 1 },
    { id: 8, image: './assets/bestseller/kitkatcake.jpg', title: 'KitKat Cake', price: 1299, quantity: 1 }
  ];

  constructor(private cartService: CartService) {}

  addToCart(product: any): void {
    this.cartService.addToCart(product);
    alert('Product added to cart');
  }

}
