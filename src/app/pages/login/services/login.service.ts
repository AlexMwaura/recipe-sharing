import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = environment.apiUrl.baseUrl;

  constructor(private http: HttpClient) {}
  login(username: string, password: string): Observable<any> {
    const loginPayload = { username, password };
    const url = `${this.apiUrl}` + environment.apiUrl.auth.portal.login;

    return this.http.post(url, loginPayload);
  }
}
