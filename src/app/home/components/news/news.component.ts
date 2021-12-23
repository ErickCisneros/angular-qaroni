import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { News } from 'src/app/models/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  @Input() news: Observable<News[]> = of([])
  @Input() filterString: string = '';

  constructor() {}

  ngOnInit(): void {}
}
