import { Component } from '@angular/core';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-cupckaes',
  templateUrl: './cupckaes.component.html',
  styleUrl: './cupckaes.component.css'
})
export class CupckaesComponent {
  cakes: { id: number, image: string; title: string; price: number; quantity: number }[] = [
    { id: 25, image: './assets/cupcake/belgiumchoc.jpg', title: 'Belgium Chocolate Cupcake', price: 199, quantity: 1 },
    { id: 26, image: './assets/cupcake/blueberry.jpg', title: 'Blueberry Cupcake', price: 199, quantity: 1 },
    { id: 27, image: './assets/cupcake/hazelnuttruffle.jpg', title: 'HazelNut Truffle Cupcake', price: 299, quantity: 1 },
    { id: 28, image: './assets/cupcake/redv.jpg', title: 'Red Velvet Cupcake', price: 399, quantity: 1 },
    { id: 29, image: './assets/cupcake/vanillacreamfrosting.jpg', title: 'Vanilla Cream Frosting Cupcake', price: 99, quantity: 1 }  
  ];

  constructor(private cartService: CartService) {}

  addToCart(product: any): void {
    this.cartService.addToCart(product);
    alert('Product added to cart');
  }
}
