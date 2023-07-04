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
  formattedTotal: number = 0;
  
  constructor(private ServicService : ServicService){}

  ngDoCheck(): void {
    this.length = this.ServicService.getCartLength()
    this.formattedTotal = this.ServicService.calculateTotal();
  }

  ngOnInit(): void {
    this.cart = this.ServicService.getCart();
    this.formattedTotal = this.ServicService.calculateTotal();
  }
  removeFromCart(i : number){
    this.ServicService.removeFromCart(i);
    this.formattedTotal = this.ServicService.calculateTotal();
  }

  addQuantity(productId: number) {
    this.ServicService.addQuantity(productId);
    this.formattedTotal = this.ServicService.calculateTotal();
  }

  removeQuantity(i: number){
    this.ServicService.removeQuantity(i);
    this.formattedTotal = this.ServicService.calculateTotal();
  }

  buyItem(){
    window.alert('Your purchase was successful');
    this.cart = this.ServicService.clearCart();
  }

}
