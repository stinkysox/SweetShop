import { Component } from '@angular/core';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-pastry',
  templateUrl: './pastry.component.html',
  styleUrl: './pastry.component.css'
})
export class PastryComponent {
  pastry: { id: number, image: string; title: string; price: number; quantity: number }[] = [
    { id: 35, image: './assets/pastry/blackf.jpg', title: 'Black Forest Pastry', price: 70, quantity: 1 },
    { id: 36, image: './assets/pastry/blueberry.jpg', title: 'Blueberry Pastry', price: 80, quantity: 1 },
    { id: 37, image: './assets/pastry/boracabomb.jpg', title: 'Boraca Bomb Pastry', price: 60, quantity: 1},
    { id: 38, image: './assets/pastry/chocovanilla.webp', title: 'Chocolate Vanilla Pastry', price: 60, quantity: 1 },
    { id: 39, image: './assets/pastry/ferrerorocher.jpg', title: 'Ferrero Rocher Pastry', price: 80, quantity: 1 },
    { id: 40, image: './assets/pastry/mango.jpg', title: 'Mango Pastry', price: 60, quantity: 1 },
    { id: 41, image: './assets/pastry/rabdipistaalmond.jpg', title: 'Rabdi Pista Almond Pastry', price:90, quantity: 1},
    { id: 42, image: './assets/pastry/rainbow.webp', title: 'Rainbow Pastry', price: 80, quantity: 1 },
    { id: 43, image: './assets/pastry/redv.jpg', title: 'Red Velvet Pastry', price: 70, quantity: 1},
    { id: 44, image: './assets/pastry/strawberry.webp', title: 'Strawberry Pastry', price: 60, quantity: 1 },
    { id: 45, image: './assets/pastry/whitechocolate.jpg', title: 'White Chocolate Pastry', price: 70, quantity: 1 },
    { id: 46, image: './assets/pastry/whitef.jpg', title: 'White Forest Pastry', price: 60, quantity: 1 }
  ];
  constructor(private cartService: CartService) {}

  addToCart(product: any): void {
    this.cartService.addToCart(product);
    alert('Product added to cart');
  }
}
