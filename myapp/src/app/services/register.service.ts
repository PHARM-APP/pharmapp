import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  http : HttpClient
  url = 'http://localhost:3000/api/auth/register'
  constructor(httpClient: HttpClient) {
    this.http = httpClient
  }
  addUser(username:string, password:string){
    const body = {
      username: username,
      password: password
    }
    return this.http.post(this.url, body)
  }
}
