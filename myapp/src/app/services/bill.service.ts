import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { bill } from '../models/bill';
@Injectable({
  providedIn: 'root',
})
export class BillService {
  urlApi = 'http://localhost:3000/api/bill';
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<bill>(this.urlApi);
  }
  //methode Delete()
  delete(id: number) {
    return this.http.delete(this.urlApi + '/' + id);
  }

  postitem(bill: any) {
    return this.http.post<bill>(this.urlApi, bill);
  }
  updateitem(bill: any) {
    return this.http.put(this.urlApi, bill);
  }

  //methode Post
  addproducttocart(bill: any) {
    return this.http.put<bill>(this.urlApi, bill);
  }
}