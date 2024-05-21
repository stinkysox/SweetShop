import { Component } from '@angular/core';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-cupckaes',
  templateUrl: './cupckaes.component.html',
  styleUrl: './cupckaes.component.css',
})
export class CupckaesComponent {
  cakes: {
    id: number;
    image: string;
    title: string;
    price: number;
    quantity: number;
  }[] = [
    {
      id: 25,
      image:
        'https://i.pinimg.com/564x/6d/d3/f4/6dd3f426534070096400f54cd7a8f731.jpg',
      title: 'Oreo Cupcake',
      price: 250,
      quantity: 1,
    },
    {
      id: 26,
      image:
        'https://i.pinimg.com/564x/4c/a6/e0/4ca6e0b2da68cc71fa3d1e5294137a6e.jpg',
      title: 'BlackBerry Cupcake',
      price: 180,
      quantity: 1,
    },
    {
      id: 27,
      image:
        'https://i.pinimg.com/564x/29/8d/79/298d790724b58b24e3393a8ea24ab5ea.jpg',
      title: 'Rasberry Cupcake',
      price: 200,
      quantity: 1,
    },
    {
      id: 28,
      image:
        'https://i.pinimg.com/564x/7c/c6/b2/7cc6b22a507625340f6b3f710bbc2718.jpg',
      title: 'Berry Delight Cupcake',
      price: 399,
      quantity: 1,
    },
    {
      id: 29,
      image:
        'https://i.pinimg.com/564x/92/c4/cd/92c4cdd406e65f7fae1b31e55310da02.jpg',
      title: 'CranBerry Sugar Cupcake',
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
