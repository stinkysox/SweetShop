import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  cards: { image: string; title?: string; description?: string }[] = [
    {
      image:
        'https://i.pinimg.com/564x/52/70/08/5270083d9ade37cd63a923a302160775.jpg',
      title: 'Tasty Cakes',
      description: '',
    },
    {
      image:
        'https://i.pinimg.com/564x/6c/f4/c4/6cf4c4b84942dc14a60121f0135abd15.jpg',
      title: 'Treat Yourself',
      description: '',
    },
    {
      image:
        'https://i.pinimg.com/564x/e9/16/06/e91606e6809805d2e1f95b7fb09d07f5.jpg',
      title: 'Death By Chocolate',
      description: '',
    },
    {
      image:
        'https://i.pinimg.com/564x/3e/f9/f5/3ef9f5348d4fd827324dc303b7ce68ae.jpg',
      title: 'Custom Cakes',
      description: '',
    },
  ];
  currentIndex = 0;
  totalPages = Math.ceil(this.cards.length / 4);

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
        'https://i.pinimg.com/564x/f9/21/43/f92143fab8689f568068084400d77380.jpg',
      title: 'Avengers Cake ',
      price: 2000,
      quantity: 1,
    },
    {
      id: 2,
      image:
        'https://i.pinimg.com/564x/84/98/fc/8498fc795a3ad8242cacd0c4e4ad9031.jpg',
      title: 'GOT Cake',
      price: 1500,
      quantity: 1,
    },
    {
      id: 3,
      image:
        'https://i.pinimg.com/564x/aa/45/38/aa4538df63c02716489c3afd11e8318f.jpg',
      title: 'DARK Cake',
      price: 3000,
      quantity: 1,
    },
    {
      id: 4,
      image:
        'https://i.pinimg.com/564x/db/e0/56/dbe056f6b63750e988ab11a92fefd692.jpg',
      title: 'Superman Cake',
      price: 1000,
      quantity: 1,
    },
    {
      id: 5,
      image:
        'https://i.pinimg.com/564x/30/c4/e4/30c4e4523ccd33c33b154f3dc17a9652.jpg',
      title: 'Uchiha Cake',
      price: 3500,
      quantity: 1,
    },
    {
      id: 6,
      image:
        'https://i.pinimg.com/564x/b0/45/a3/b045a3b988bef22cbee05dce33c8b9cc.jpg',
      title: 'Batman Cake',
      price: 1900,
      quantity: 1,
    },
    {
      id: 7,
      image:
        'https://i.pinimg.com/564x/01/c0/28/01c02893982f2e044fffb341ebb1ba09.jpg',
      title: 'Breaking Bad Cake',
      price: 1100,
      quantity: 1,
    },
    {
      id: 8,
      image:
        'https://i.pinimg.com/564x/d4/6b/3f/d46b3f0ab633cb0f96641ba2453e3c6e.jpg',
      title: 'Scream Cake',
      price: 1299,
      quantity: 1,
    },
  ];

  constructor(private cartService: CartService) {}

  addToCart(product: any): void {
    this.cartService.addToCart(product);
    alert('Product added to cart');
  }
}
