import { Injectable } from '@angular/core';
import { Icourses } from './Icourse';

@Injectable({
  providedIn: 'root'
})
export class ServicService {
  cart: Icourses[] = [];
  constructor() { }


  getCartLength(): number {
    let amount = 0;
    for(let item of this.cart){
      amount += item.quantity
    }
    return amount;
  }

  addQuantity(productId: number) {
    const product = this.cart.find((product) => product.id === productId);
    if (product) {
      product.quantity++;
    }
  }

  removeQuantity(i: number) {
    if (this.cart[i].quantity > 0) {
      this.cart[i].quantity--;
      if (this.cart[i].quantity === 0) {
        this.removeFromCart(i);
      }
    }
  }

  removeFromCart(i: number) {
    this.cart[i].quantity = 0;
    this.cart.splice(i, 1);
  }

  addToCart(obj: Icourses) {
    let existingProduct = null;
    for (let i = 0; i < this.cart.length; i++) {
      const product = this.cart[i];
      if (product.id === obj.id) {
        existingProduct = product;
        break;
      }
    }
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      obj.quantity = 1;
      this.cart.push(obj);
    }
  }

  getCart() {
    return this.cart;
  }

  

  
}
