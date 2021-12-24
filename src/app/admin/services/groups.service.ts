import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { GroupsResultEntity } from 'src/app/models/groups-response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GroupsService {
  private readonly BASE_URL = environment.BASE_URL;
  private readonly merchantId = 71;

  constructor(private httpClient: HttpClient) {}

  getGroups(): Observable<GroupsResultEntity[]> {
    return this.httpClient
      .get<any>(this.BASE_URL + `/merchants/${this.merchantId}/groups`)
      .pipe(pluck('result'));
  }

  getGroupById(idGroup: string): Observable<GroupsResultEntity> {
    return this.httpClient
      .get<any>(
        this.BASE_URL + `/merchants/${this.merchantId}/groups/${idGroup}`
      )
      .pipe(pluck('result', 0));
  }
}
