import { Component } from '@angular/core';
import { Icourses } from '../Icourse';
import { courses } from '../course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  courses: Icourses[] = courses;
}
