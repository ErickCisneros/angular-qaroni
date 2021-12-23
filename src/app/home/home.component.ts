import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from '../models/news';
import { NewsService } from './services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  news: Observable<News[]> = this.newsService.getNews();
  filterString: string

  constructor(private newsService: NewsService) {
    this.filterString = ''
  }

  ngOnInit(): void {}

  filterControl(event: string) {
    this.filterString = event;
  }
}
