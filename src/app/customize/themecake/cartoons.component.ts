import { Component } from '@angular/core';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-cartoons',
  templateUrl: './cartoons.component.html',
  styleUrl: './cartoons.component.css',
})
export class CartoonsComponent {
  cakes: {
    id: number;
    image: string;
    title: string;
    price: number;
    quantity: number;
  }[] = [
    {
      id: 56,
      image:
        'https://i.pinimg.com/564x/6d/1a/f0/6d1af05a22a326206031e09b3bef5a08.jpg',
      title: 'Butterfly Theme',
      price: 3499,
      quantity: 1,
    },
    {
      id: 57,
      image:
        'https://i.pinimg.com/564x/4e/0a/20/4e0a208c76ab288dbfa3e1cacb6555ef.jpg',
      title: 'Aqua Cake',
      price: 2599,
      quantity: 1,
    },
    {
      id: 58,
      image:
        'https://i.pinimg.com/564x/64/5d/d7/645dd762fff05efc290b08f89119383a.jpg',
      title: 'Beach Cake',
      price: 2899,
      quantity: 1,
    },
    {
      id: 59,
      image:
        'https://i.pinimg.com/564x/ad/d7/4f/add74f24b85b28db0fe6d524b1cf300d.jpg',
      title: 'Flora Cake',
      price: 2799,
      quantity: 1,
    },
    {
      id: 60,
      image:
        'https://i.pinimg.com/564x/b4/09/e4/b409e4b1cd00d1d38708e29c8ddddf11.jpg',
      title: 'Best Kittes Cake',
      price: 1799,
      quantity: 1,
    },
    {
      id: 61,
      image:
        'https://i.pinimg.com/564x/35/37/8d/35378d1f4459e3948f0f68a774a8ad2c.jpg',
      title: 'Kitten Cake',
      price: 3499,
      quantity: 1,
    },
    {
      id: 62,
      image:
        'https://i.pinimg.com/564x/1a/1a/80/1a1a8057e93fcccf9ace8383465d124b.jpg',
      title: 'Clouds Cake',
      price: 2599,
      quantity: 1,
    },
    {
      id: 63,
      image:
        'https://i.pinimg.com/564x/53/0e/e1/530ee12236e1d9de4ef2fbc4b9267e34.jpg',
      title: 'Austronaut Cake',
      price: 2899,
      quantity: 1,
    },
  ];

  constructor(private cartService: CartService) {}

  addToCart(product: any): void {
    this.cartService.addToCart(product);
    alert('Product added to cart');
  }
}
