import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pluck } from 'rxjs';
import { News } from 'src/app/models/news';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private readonly BASE_URL = environment.BASE_URL;
  private readonly merchantId = 71;

  constructor(private httpClient: HttpClient) {}

  getNews(): Observable<News[]> {
    return this.httpClient
      .get<any>(this.BASE_URL + `/merchants/${this.merchantId}/news`)
      .pipe(pluck('result'));
  }

  getNewsById(idNews: string): Observable<News> {
    return this.httpClient
      .get<any>(this.BASE_URL + `/merchants/${this.merchantId}/news/${idNews}`)
      .pipe(pluck('result', 0))
  }
}
