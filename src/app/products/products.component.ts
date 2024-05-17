import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  items: Product[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    // Fetch product data (example)
    this.items = [
      { id: 1, title: 'Product 1', price: 10, image: 'image1.jpg', quantity: 1 },
      // ... other products
    ];
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}