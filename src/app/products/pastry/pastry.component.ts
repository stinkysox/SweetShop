import { Component } from '@angular/core';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-pastry',
  templateUrl: './pastry.component.html',
  styleUrl: './pastry.component.css',
})
export class PastryComponent {
  pastry: {
    id: number;
    image: string;
    title: string;
    price: number;
    quantity: number;
  }[] = [
    {
      id: 35,
      image:
        'https://i.pinimg.com/564x/53/34/05/5334052584b2ab5a6ba526e4ffdc9155.jpg',
      title: 'Japanese Cake Roll',
      price: 180,
      quantity: 1,
    },
    {
      id: 36,
      image:
        'https://i.pinimg.com/564x/24/5b/97/245b97f1096f95c0f8648c174c9be601.jpg',
      title: 'Craquelin With Chocolate ',
      price: 190,
      quantity: 1,
    },
    {
      id: 37,
      image:
        'https://i.pinimg.com/564x/93/7b/45/937b45be84d2a646ee4617dc0d17dff2.jpg',
      title: 'Rasberry Choux',
      price: 120,
      quantity: 1,
    },
    {
      id: 38,
      image:
        'https://i.pinimg.com/564x/c4/ec/b8/c4ecb84d858af22b5d033d529d897f11.jpg',
      title: 'Eclairs',
      price: 60,
      quantity: 1,
    },
    {
      id: 39,
      image:
        'https://i.pinimg.com/564x/d2/e1/0a/d2e10a2ca5c7154178364dfa016b41ff.jpg',
      title: 'Opera Pastry',
      price: 200,
      quantity: 1,
    },
    {
      id: 40,
      image:
        'https://i.pinimg.com/564x/05/e3/60/05e360a4a12f01eb820f7b8b026878c5.jpg',
      title: 'Caramel Chocolate',
      price: 100,
      quantity: 1,
    },
    {
      id: 41,
      image:
        'https://i.pinimg.com/564x/44/32/56/4432566810f0919dcb2b6a404ff158fc.jpg',
      title: 'Rasberry Choco',
      price: 90,
      quantity: 1,
    },
    {
      id: 42,
      image: './assets/pastry/rainbow.webp',
      title: 'Rainbow Pastry',
      price: 100,
      quantity: 1,
    },
    {
      id: 43,
      image:
        'https://i.pinimg.com/564x/c8/bd/65/c8bd659e2ba115babe5ea025bda21865.jpg',
      title: 'Strawberry Cream Pastry',
      price: 100,
      quantity: 1,
    },
    {
      id: 44,
      image: './assets/pastry/strawberry.webp',
      title: 'Strawberry Pastry',
      price: 60,
      quantity: 1,
    },
    {
      id: 45,
      image:
        'https://i.pinimg.com/564x/8c/5d/15/8c5d150183f1ba000d904942dbbcf9ff.jpg',
      title: 'White Chocolate Stawberry',
      price: 70,
      quantity: 1,
    },
    {
      id: 46,
      image:
        'https://i.pinimg.com/564x/55/b6/45/55b645591d21764e40e018eada54ce18.jpg',
      title: 'Vanilla',
      price: 60,
      quantity: 1,
    },
  ];
  constructor(private cartService: CartService) {}

  addToCart(product: any): void {
    this.cartService.addToCart(product);
    alert('Product added to cart');
  }
}
