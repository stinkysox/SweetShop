import { Component } from '@angular/core';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrl: './cookies.component.css',
})
export class CookiesComponent {
  cakes: {
    id: number;
    image: string;
    title: string;
    price: number;
    quantity: number;
  }[] = [
    {
      id: 22,
      image:
        'https://i.pinimg.com/564x/3f/2c/e9/3f2ce961f24022f2897ea4301fec8b03.jpg',
      title: 'Chocolate Nut Cookie',
      price: 200,
      quantity: 1,
    },
    {
      id: 23,
      image:
        'https://i.pinimg.com/564x/bc/97/eb/bc97eb42ff8f831f6d1315aabadcf7ba.jpg',
      title: 'Cookie Box',
      price: 350,
      quantity: 1,
    },
    {
      id: 24,
      image:
        'https://i.pinimg.com/564x/e9/81/1b/e9811b13afd95e423753da44e2e7d896.jpg',
      title: 'Cookie Delight',
      price: 320,
      quantity: 1,
    },
  ];

  constructor(private cartService: CartService) {}

  addToCart(product: any): void {
    this.cartService.addToCart(product);
    alert('Product added to cart');
  }
}
