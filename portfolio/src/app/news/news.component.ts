import { Component, OnInit } from '@angular/core';
import { news } from '../news';
import { inews } from '../inews';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  news: inews[] = news;

  ngOnInit(): void {
    
  }
}
