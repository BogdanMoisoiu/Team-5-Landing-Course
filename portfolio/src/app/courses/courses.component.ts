import { Component } from '@angular/core';
import { Icourses } from '../Icourse';
import { courses } from '../course';
import { ServicService } from '../servic.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  courses: Icourses[] = courses;

  constructor(private ServicService: ServicService) {}
  addToCart(product: Icourses): void {
    alert("Product was added to the Cart");
    this.ServicService.addToCart(product);
  }
}
