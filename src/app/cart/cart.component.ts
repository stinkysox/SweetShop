
import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];
  totalItems: number = 0;
  cartItemsSubject = new Subject<Product[]>();

  constructor(private cartService: CartService,
    private router: Router) {}

  ngOnInit() {
    this.cartService.cartItems$.subscribe((items) => {
      this.cartItems = items;
      this.calculateTotalItems();
    });
  }

  removeFromCart(productId: number) {
    this.cartService.removeFromCart(productId);
  }

  calculateTotal(): number {
    return this.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  calculateTotalItems(): void {
    this.totalItems = this.cartItems.reduce((count, item) => count + item.quantity, 0);
  }

  incrementQuantity(productId: number) {
    const existingProduct = this.cartItems.find((item) => item.id === productId);
    if (existingProduct) {
      existingProduct.quantity++;
      this.cartService.addToCart(existingProduct); 
    }
  }

  decrementQuantity(productId: number) {
    const existingProduct = this.cartItems.find((item) => item.id === productId);
    if (existingProduct && existingProduct.quantity > 1) {
      existingProduct.quantity--;
      this.cartService.addToCart(existingProduct); 
    }
  }

  onSubmit() {
      this.router.navigate(['/checkout']);
    }
  }

