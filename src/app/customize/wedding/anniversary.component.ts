import { Component } from '@angular/core';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-anniversary',
  templateUrl: './anniversary.component.html',
  styleUrl: './anniversary.component.css',
})
export class AnniversaryComponent {
  cakes: {
    id: number;
    image: string;
    title: string;
    price: number;
    quantity: number;
  }[] = [
    {
      id: 47,
      image:
        'https://i.pinimg.com/564x/ee/d1/27/eed127c49a821fc9f914819c2764b82b.jpg',
      title: 'Wedding Cake 3 Layers',
      price: 4000,
      quantity: 1,
    },
    {
      id: 48,
      image:
        'https://i.pinimg.com/564x/18/e0/43/18e043b3968887c8402723a10d2f4112.jpg',
      title: 'The playful wedds Cake',
      price: 5000,
      quantity: 1,
    },
    {
      id: 49,
      image:
        'https://i.pinimg.com/564x/63/c8/0e/63c80eff087ee1f03086d123c767c83a.jpg',
      title: 'Black and White Choco Wedding',
      price: 4200,
      quantity: 1,
    },
    {
      id: 50,
      image:
        'https://i.pinimg.com/564x/7c/f2/70/7cf270a6dd9b9b65ca7df286e1232e61.jpg',
      title: 'Flower Wedding Cake ',
      price: 2000,
      quantity: 1,
    },
    {
      id: 51,
      image:
        'https://i.pinimg.com/564x/97/60/b6/9760b63bff6aa11a9be8590a07931aed.jpg',
      title: 'Batman Wedding Cake',
      price: 6000,
      quantity: 1,
    },
  ];

  constructor(private cartService: CartService) {}

  addToCart(product: any): void {
    this.cartService.addToCart(product);
    alert('Product added to cart');
  }
}
