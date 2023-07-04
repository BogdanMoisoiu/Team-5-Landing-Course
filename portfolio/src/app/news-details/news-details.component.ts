import { Component, OnInit } from '@angular/core';
import { inews } from '../inews';
import { ActivatedRoute, Params } from '@angular/router';
import { news } from '../news';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit{
new: inews = {} as inews;
index: number = 0;

constructor(private route: ActivatedRoute){}

ngOnInit(): void {
  this.route.params.subscribe((params: Params) => {
    this.index = +params['indexRouting'];
    this.new = news[this.index];
  });
}
}
