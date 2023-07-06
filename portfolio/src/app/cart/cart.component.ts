import { Component, OnInit } from '@angular/core';
import { Icourses } from '../Icourse';
import { ServicService } from '../servic.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  product: Icourses= {} as Icourses;
  cart: Icourses[] = [];
  length: number = 0;
  discount: number = 0;
  formattedTotal: number = 0;
  total: number = 0;
  
  constructor(private ServicService : ServicService){}

  ngDoCheck(): void {
    this.length = this.ServicService.getCartLength();
    this.formattedTotal = this.calculateTotal()[1];
    this.total = this.calculateTotal()[0];
  }

  ngOnInit(): void {
    this.cart = this.ServicService.getCart();
    this.formattedTotal = this.calculateTotal()[1];
    this.total = this.calculateTotal()[0];
  }
  removeFromCart(i : number){
    this.ServicService.removeFromCart(i);
    this.formattedTotal = this.calculateTotal()[1];
    this.total = this.calculateTotal()[0];
  }

  addQuantity(productId: number) {
    this.ServicService.addQuantity(productId);
    this.formattedTotal = this.calculateTotal()[1];
    this.total = this.calculateTotal()[0];
  }

  removeQuantity(i: number){
    this.ServicService.removeQuantity(i);
    this.formattedTotal = this.calculateTotal()[1];
    this.total = this.calculateTotal()[0];
  }

    // navigateTo(url: string): void {
    //   window.location.href = url;
    //   window.alert('Your purchase was successful');
    // }

  buyItem(){
    window.alert('Your purchase was successful');
    this.cart = this.clearCart();
  }

  calculateTotal() {
    let formattedTotal: number = 0;
    let total: number = 0;
    for (let val of this.cart) {
      total += val.price * val.quantity;
    }

    if (this.length == 2) {
      this.discount = total * 0.1;
      formattedTotal = total - this.discount;
    }else if(this.length > 2) {
        this.discount = total * 0.2;
        formattedTotal = total - this.discount;
      }
    // const formattedTotal = Number(total.toFixed(2));
    return [total, formattedTotal];
  }

  

  clearCart() {
    // this.cart = [];
    this.discount = 0;
    this.ServicService.resetQtty();
    return this.cart = [];
  }
}
