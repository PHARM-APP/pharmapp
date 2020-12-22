import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  http: HttpClient;
  url = 'http://localhost:3000/api/auth/login';

  constructor(private httpClient: HttpClient) {
    this.http = httpClient;
  }

  login(username: String, password: String) {
    const body = {
      username: username,
      password: password,
    };

    return this.http.post(this.url, body);
  }
}
