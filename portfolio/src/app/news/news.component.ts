import { Component, OnInit } from '@angular/core';
import { news } from '../news';
import { inews } from '../inews';
import { Icourses } from '../Icourse';
import { courses } from '../course';
import { ServicService } from '../servic.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  news: inews[] = news;
  courses: Icourses[] = courses;

  constructor(private ServicService: ServicService) {}

  ngOnInit(): void {
    
  }
}
