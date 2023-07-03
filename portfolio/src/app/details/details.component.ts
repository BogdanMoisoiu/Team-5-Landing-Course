import { Component } from '@angular/core';
import { Icourses } from '../Icourse';
import { ActivatedRoute, Params } from '@angular/router';
import { ServicService } from '../servic.service';
import { courses } from '../course';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  product: Icourses= {} as Icourses;
  index: number = 0;

  constructor(private route : ActivatedRoute, private ServicService: ServicService) {

  }

  addToCart() {
    alert("your product has been added to the cart!");
    this.ServicService.addToCart(this.product);
    console.log(this.product);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.index = +params['index'];
      this.product = courses[this.index];
    });
}
}
