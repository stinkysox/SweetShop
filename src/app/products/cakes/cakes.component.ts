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
      image: './assets/chocake.webp',
      title: 'Chocolate Cake',
      price: 1799,
      quantity: 1,
    },
    {
      id: 2,
      image: './assets/bestseller/rdvcake.jpg',
      title: 'Red Velvet Cake',
      price: 1399,
      quantity: 1,
    },
    {
      id: 3,
      image: './assets/bestseller/pinecake.jpeg',
      title: 'PineApple Cake',
      price: 999,
      quantity: 1,
    },
    {
      id: 4,
      image: './assets/bestseller/cheesecake.webp',
      title: 'Cheesecake',
      price: 1899,
      quantity: 1,
    },
    {
      id: 5,
      image: './assets/bestseller/vanillacake.webp',
      title: 'Vanilla Cake',
      price: 899,
      quantity: 1,
    },
    {
      id: 6,
      image: './assets/bestseller/strawberrycake.jpg',
      title: 'Strawberry Cake',
      price: 1399,
      quantity: 1,
    },
    {
      id: 7,
      image: 'assets/bestseller/blackforestcake.webp',
      title: 'Black Forest Cake',
      price: 999,
      quantity: 1,
    },
    {
      id: 8,
      image: './assets/bestseller/kitkatcake.jpg',
      title: 'KitKat Cake',
      price: 1299,
      quantity: 1,
    },
    {
      id: 9,
      image: './assets/2tiercake.png',
      title: '2Tier Cake',
      price: 1299,
      quantity: 1,
    },
    {
      id: 10,
      image: './assets/blueberry.jpg',
      title: 'Blueberry Cheese Cake',
      price: 2199,
      quantity: 1,
    },
    {
      id: 11,
      image: './assets/butterflycake.webp',
      title: 'Butterfly Cake',
      price: 2999,
      quantity: 1,
    },
    {
      id: 12,
      image: './assets/capcake.jpg',
      title: 'Cpuccino Chocolate Cake',
      price: 1999,
      quantity: 1,
    },
    {
      id: 13,
      image: './assets/frostedcake.webp',
      title: 'Frosted Cake',
      price: 1699,
      quantity: 1,
    },
    {
      id: 14,
      image: './assets/o-cake.jpg',
      title: 'O-Cake',
      price: 999,
      quantity: 1,
    },
    {
      id: 15,
      image: './assets/rascake.webp',
      title: 'Rasmalai Cake',
      price: 1499,
      quantity: 1,
    },
    {
      id: 16,
      image: './assets/rbcake.jpg',
      title: 'Rich ButterScotch Cake',
      price: 1099,
      quantity: 1,
    },
    {
      id: 17,
      image: './assets/shcake.jpg',
      title: 'SweetHeart Cake',
      price: 1899,
      quantity: 1,
    },
    {
      id: 18,
      image: './assets/wfcake.jpg',
      title: 'White Forest Cake',
      price: 799,
      quantity: 1,
    },
  ];

  constructor(private cartService: CartService) {}

  addToCart(product: any): void {
    this.cartService.addToCart(product);
    alert('Product added to cart');
  }
}
