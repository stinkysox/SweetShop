import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<Product[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  constructor() {}

  addToCart(product: Product) {
    const existingProduct = this.cartItemsSubject.value.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      this.cartItemsSubject.next([...this.cartItemsSubject.value, product]);
    }
  }

  removeFromCart(productId: number) {
    this.cartItemsSubject.next(
      this.cartItemsSubject.value.filter((item) => item.id !== productId)
    );
  }

  // getCartItems(): Product[] {
  //   return this.cartItems;
  // }

  getCartItems(): { cake: any; quantity: number }[] {
    const cartItems = this.cartItemsSubject.getValue();
    return cartItems.map((item) => ({ cake: item, quantity: item.quantity }));
  }

  private cartItems: Product[] = [];
}
