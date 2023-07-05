import { Component, DoCheck } from '@angular/core';
import { ServicService } from '../servic.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements DoCheck {
length: number = 0;

constructor(private ServicService: ServicService){}

ngDoCheck(): void {
  this.length = this.ServicService.getCartLength();
}
}
