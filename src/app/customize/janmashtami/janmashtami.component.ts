import { Component } from '@angular/core';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-janmashtami',
  templateUrl: './janmashtami.component.html',
  styleUrl: './janmashtami.component.css'
})
export class JanmashtamiComponent {

  cakes: { id: number, image: string; title: string; price: number; quantity: number }[] = [
    { id: 68, image: './assets/janmashtami/o1.jpg', title: 'Janmashtami Cake S1', price: 1999, quantity: 1 },
    { id: 69, image: './assets/janmashtami/o2.jpg', title: 'Janmashtami Cake S2', price: 1499, quantity: 1 },
    { id: 70, image: './assets/janmashtami/o3.jpg', title: 'Janmashtami Cake S3', price: 1299, quantity: 1 }  
  ];

  constructor(private cartService: CartService) {}

  addToCart(product: any): void {
    this.cartService.addToCart(product);
    alert('Product added to cart');
  }

}
