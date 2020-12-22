import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ChartService {
  http: HttpClient;
  url = 'http://localhost:3000/api/bill';

  constructor(httpClient: HttpClient) {
    this.http = httpClient;
  }
  getAllBills() {
    return this.http.get(this.url);
  }
}
