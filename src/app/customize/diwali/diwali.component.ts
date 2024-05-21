import { Component } from '@angular/core';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-diwali',
  templateUrl: './diwali.component.html',
  styleUrl: './diwali.component.css',
})
export class DiwaliComponent {
  cakes: {
    id: number;
    image: string;
    title: string;
    price: number;
    quantity: number;
  }[] = [
    {
      id: 64,
      image:
        'https://i.pinimg.com/564x/5d/84/27/5d842782b18a6de7a6d376161ca24b45.jpg',
      title: 'Vibe New Cake',
      price: 1899,
      quantity: 1,
    },
    {
      id: 65,
      image:
        'https://i.pinimg.com/564x/8b/f0/7a/8bf07a586867075e235a9059282e39e7.jpg',
      title: 'Spark White Cake',
      price: 2299,
      quantity: 1,
    },
    {
      id: 66,
      image:
        'https://i.pinimg.com/564x/c3/5f/a1/c35fa13d2f130289d73e12107456fb41.jpg',
      title: 'New Clock Cake',
      price: 2699,
      quantity: 1,
    },
  ];

  constructor(private cartService: CartService) {}

  addToCart(product: any): void {
    this.cartService.addToCart(product);
    alert('Product added to cart');
  }
}
