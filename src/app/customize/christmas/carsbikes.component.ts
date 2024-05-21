import { Component } from '@angular/core';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-carsbikes',
  templateUrl: './carsbikes.component.html',
  styleUrl: './carsbikes.component.css',
})
export class CarsbikesComponent {
  cakes: {
    id: number;
    image: string;
    title: string;
    price: number;
    quantity: number;
  }[] = [
    {
      id: 52,
      image:
        'https://i.pinimg.com/564x/d2/63/61/d263617418a0a4937298a62170a3eee3.jpg',
      title: 'Cars & Bikes Cake S1',
      price: 3499,
      quantity: 1,
    },
    {
      id: 53,
      image:
        'https://i.pinimg.com/564x/f5/dc/e1/f5dce1fadafacf4a60e5147c89d34ea1.jpg',
      title: 'Cars & Bikes Cake S2',
      price: 2599,
      quantity: 1,
    },
    {
      id: 54,
      image:
        'https://i.pinimg.com/564x/4d/df/db/4ddfdb116c3d9093d72009c27eaebcc0.jpg',
      title: 'Cars & Bikes Cake S4',
      price: 2899,
      quantity: 1,
    },
    {
      id: 55,
      image:
        'https://i.pinimg.com/564x/e4/68/d8/e468d81c40fd3c1b6b133f80a48f6538.jpg',
      title: 'Cars & Bikes Cake S5',
      price: 1799,
      quantity: 1,
    },
  ];

  constructor(private cartService: CartService) {}

  addToCart(product: any): void {
    this.cartService.addToCart(product);
    alert('Product added to cart');
  }
}
