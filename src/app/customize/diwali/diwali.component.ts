import { Component } from '@angular/core';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-diwali',
  templateUrl: './diwali.component.html',
  styleUrl: './diwali.component.css'
})
export class DiwaliComponent {

  cakes: { id: number, image: string; title: string; price: number; quantity: number }[] = [
    { id: 64, image: './assets/diwali/o1.jpg', title: 'Diwali Cakes S1', price: 1599, quantity: 1 },
    { id: 65, image: './assets/diwali/o2.jpg', title: 'Diwali Cakes S2', price: 1999, quantity: 1 },
    { id: 66, image: './assets/diwali/o3.jpg', title: 'Diwali Cakes S3', price: 2299, quantity: 1 }  
  ];

  constructor(private cartService: CartService) {}

  addToCart(product: any): void {
    this.cartService.addToCart(product);
    alert('Product added to cart');
  }

}
