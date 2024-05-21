import { Component } from '@angular/core';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-cakes',
  templateUrl: './cakes.component.html',
  styleUrl: './cakes.component.css',
})
export class CakesComponent {
  cakes: {
    id: number;
    image: string;
    title: string;
    price: number;
    quantity: number;
  }[] = [
    {
      id: 1,
      image:
        'https://i.pinimg.com/564x/a2/a9/80/a2a98076389d9d56ad3d69e790099961.jpg',
      title: 'BlueBerry Cake',
      price: 2200,
      quantity: 1,
    },
    {
      id: 2,
      image:
        'https://i.pinimg.com/564x/89/a8/36/89a8360a02e86b49d73540f95460570e.jpg',
      title: 'Vanilla Cake',
      price: 1000,
      quantity: 1,
    },
    {
      id: 3,
      image:
        'https://i.pinimg.com/564x/88/9a/33/889a333bc1acd31b7c5bef1d7a8eefb7.jpg',
      title: 'Unicorn Cake',
      price: 2800,
      quantity: 1,
    },
    {
      id: 4,
      image:
        'https://i.pinimg.com/564x/db/cd/a0/dbcda01a17ab656cc1aaf3f182dcb9c0.jpg',
      title: 'Death By Chocolate Cake',
      price: 1200,
      quantity: 1,
    },
    {
      id: 5,
      image:
        'https://i.pinimg.com/564x/ad/00/2b/ad002bbb7f3211d2ce4c360ae92681dd.jpg',
      title: 'Strawberry Cake',
      price: 3000,
      quantity: 1,
    },
    {
      id: 6,
      image:
        'https://i.pinimg.com/564x/8c/fe/a3/8cfea33a6a4da13558cbea5de1bf982b.jpg',
      title: 'Vanilla Strawberry Cake',
      price: 1399,
      quantity: 1,
    },
    {
      id: 7,
      image:
        'https://i.pinimg.com/564x/46/e3/a2/46e3a2c55124036a6ffe623a71949be7.jpg',
      title: 'Butterscotch Cake',
      price: 2000,
      quantity: 1,
    },
    {
      id: 8,
      image:
        'https://i.pinimg.com/564x/85/87/5c/85875c5c7ae6f728f4964933abcf250d.jpg',
      title: 'Gems Cake',
      price: 1000,
      quantity: 1,
    },
    {
      id: 9,
      image:
        'https://i.pinimg.com/564x/eb/c8/57/ebc857c2d041c926e321459220e1b843.jpg',
      title: 'Butterfly Cake',
      price: 3000,
      quantity: 1,
    },
    {
      id: 10,
      image:
        'https://i.pinimg.com/564x/83/9a/18/839a18ac2790140dcfc9024cb94ff7d8.jpg',
      title: 'Fairy Cake',
      price: 2199,
      quantity: 1,
    },
    {
      id: 11,
      image:
        'https://i.pinimg.com/564x/70/ff/f4/70fff4709a44d2167fe7bac1c10a028b.jpg',
      title: 'Barbie Cake',
      price: 2999,
      quantity: 1,
    },
    {
      id: 12,
      image:
        'https://i.pinimg.com/564x/a6/01/59/a60159586bfafe5889e7ae636e1f902a.jpg',
      title: 'Panda Cake',
      price: 2000,
      quantity: 1,
    },
    {
      id: 13,
      image:
        'https://i.pinimg.com/564x/79/90/78/799078787d5d4ef811dd573b4bd53666.jpg',
      title: 'Doremon Cake',
      price: 3000,
      quantity: 1,
    },
    {
      id: 14,
      image:
        'https://i.pinimg.com/564x/ff/c2/0e/ffc20e786675b623c5051c9a911e29c3.jpg',
      title: 'Teddy Cake',
      price: 1200,
      quantity: 1,
    },
    {
      id: 15,
      image:
        'https://i.pinimg.com/564x/c8/ba/28/c8ba28f1890bd72222b378a02e31771e.jpg',
      title: 'Minion Cake',
      price: 2000,
      quantity: 1,
    },
    {
      id: 16,
      image:
        'https://i.pinimg.com/564x/6e/d8/ff/6ed8ffeee032ae5ff111c75cb5930420.jpg',
      title: 'Tom and Jerry Cake',
      price: 1200,
      quantity: 1,
    },
    {
      id: 17,
      image:
        'https://i.pinimg.com/564x/b2/7d/73/b27d7372f2e64cb8fc79915d67b7cf2d.jpg',
      title: 'The BobCake',
      price: 2200,
      quantity: 1,
    },
    {
      id: 18,
      image:
        'https://i.pinimg.com/564x/cb/58/cc/cb58ccb282959a89e01e02b2ae6a1161.jpg',
      title: 'Valantine Cake',
      price: 1000,
      quantity: 1,
    },
  ];

  constructor(private cartService: CartService) {}

  addToCart(product: any): void {
    this.cartService.addToCart(product);
    alert('Product added to cart');
  }
}
