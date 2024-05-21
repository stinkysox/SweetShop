import { Component } from '@angular/core';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-shower',
  templateUrl: './shower.component.html',
  styleUrl: './shower.component.css',
})
export class ShowerComponent {
  cakes: {
    id: number;
    image: string;
    title: string;
    price: number;
    quantity: number;
  }[] = [
    {
      id: 71,
      image:
        'https://i.pinimg.com/564x/6c/f4/c4/6cf4c4b84942dc14a60121f0135abd15.jpg',
      title: 'The Warm Wishes Cakes',
      price: 2000,
      quantity: 1,
    },
    {
      id: 72,
      image:
        'https://i.pinimg.com/564x/36/63/e5/3663e575901a144fdc1d39cbc558b48d.jpg',
      title: 'Tulip Theme Cake',
      price: 1000,
      quantity: 1,
    },
    {
      id: 73,
      image:
        'https://i.pinimg.com/564x/9d/5a/ab/9d5aabaeaee03bd497e9d1dc52cd5fd5.jpg',
      title: 'Nutella Cake',
      price: 2000,
      quantity: 1,
    },
    {
      id: 74,
      image:
        'https://i.pinimg.com/564x/f4/1f/7e/f41f7e2fad41eb314dd16fc4bc3449a2.jpg',
      title: 'The Elegant Icing Cake',
      price: 2300,
      quantity: 1,
    },
    {
      id: 75,
      image:
        'https://i.pinimg.com/564x/a1/6e/38/a16e385f0fa1daa602d189e748972882.jpg',
      title: 'The Butterfly Cake',
      price: 3400,
      quantity: 1,
    },
  ];

  constructor(private cartService: CartService) {}

  addToCart(product: any): void {
    this.cartService.addToCart(product);
    alert('Product added to cart');
  }
}
