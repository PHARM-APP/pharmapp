import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DetailsService {
  http: HttpClient;
  url = 'http://localhost:3000/api/product';

  constructor(httpClient: HttpClient) {
    this.http = httpClient;
  }
  getAllProducts() {
    return this.http.get(this.url);
  }
  getproduct() {
    return this.http.get(this.url);
  }
  delete(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
  //methode Post
}
