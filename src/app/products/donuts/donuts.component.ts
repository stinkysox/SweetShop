import { Component } from '@angular/core';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrl: './donuts.component.css',
})
export class DonutsComponent {
  cakes: {
    id: number;
    image: string;
    title: string;
    price: number;
    quantity: number;
  }[] = [
    {
      id: 30,
      image:
        'https://i.pinimg.com/564x/8d/a4/3d/8da43dde29c98af372c0a2c93307e4a4.jpg',
      title: 'PinkSuga Donut',
      price: 100,
      quantity: 1,
    },
    {
      id: 31,
      image:
        'https://i.pinimg.com/564x/85/9a/ae/859aaef11cb6e35effe79ca4d87787b9.jpg',
      title: 'Pista Donut',
      price: 100,
      quantity: 1,
    },
    {
      id: 32,
      image:
        'https://i.pinimg.com/564x/ac/89/95/ac89958c2d7faa0db63c6df38915b48a.jpg',
      title: 'Chocolate Fudge Donut',
      price: 200,
      quantity: 1,
    },
    {
      id: 33,
      image:
        'https://i.pinimg.com/564x/ac/b5/a5/acb5a5044d1a36f1d522e0fe5f353d34.jpg',
      title: 'Donut pack',
      price: 120,
      quantity: 1,
    },
    {
      id: 34,
      image:
        'https://i.pinimg.com/564x/1b/cd/38/1bcd38e66c8b9763fb0bc3fbe6058945.jpg',
      title: 'Chocolate Glaze Dounut',
      price: 99,
      quantity: 1,
    },
  ];

  constructor(private cartService: CartService) {}

  addToCart(product: any): void {
    this.cartService.addToCart(product);
    alert('Product added to cart');
  }
}
