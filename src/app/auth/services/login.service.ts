import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserResponse } from 'src/app/models/user-response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly BASE_URL = environment.BASE_URL;
  private readonly merchantId = 71;

  constructor(private httpClient: HttpClient) { }

  login(user: User): Observable<UserResponse> {
    return this.httpClient.post<UserResponse>(
      this.BASE_URL + `/merchants/${this.merchantId}/users/logins`,
      user
    );
  }
}
