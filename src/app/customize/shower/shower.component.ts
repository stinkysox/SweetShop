import { Component } from '@angular/core';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-shower',
  templateUrl: './shower.component.html',
  styleUrl: './shower.component.css'
})
export class ShowerComponent {

  cakes: { id: number, image: string; title: string; price: number;quantity: number }[] = [
    { id: 71, image: './assets/shower/o1.webp', title: 'BabyShower Cake S1', price: 2999, quantity: 1 },
    { id: 72, image: './assets/shower/o2.webp', title: 'BabyShower Cake S2', price: 1999, quantity: 1 },
    { id: 73, image: './assets/shower/o3.jpg', title: 'BabyShower Cake S3', price: 2299, quantity: 1 },
    { id: 74, image: './assets/shower/o4.jpg', title: 'BabyShower Cake S4', price: 2199, quantity: 1 },
    { id: 75, image: './assets/shower/o5.jpg', title: 'BabyShower Cake S5', price: 1299, quantity: 1 }   
  ];

  constructor(private cartService: CartService) {}

  addToCart(product: any): void {
    this.cartService.addToCart(product);
    alert('Product added to cart');
  }

}
