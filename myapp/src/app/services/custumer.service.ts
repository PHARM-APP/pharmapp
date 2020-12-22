import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyInterface } from '../models/my-interface';
@Injectable({
  providedIn: 'root',
})
export class CustumerService {
  urlApi = 'http://localhost:3000/api/custumer';
  constructor(private http: HttpClient) {}

  // CRUD
  // Methode Get
  getAll() {
    return this.http.get<MyInterface>(this.urlApi);
  }
  //methode Delete()
  delete(id: number) {
    return this.http.delete(this.urlApi + '/' + id);
  }
  //methode Post
  postitem(custumer: any) {
    return this.http.post<MyInterface>(this.urlApi, custumer);
  }
  updateCustumer(custumers: any) {
    return this.http.put(`${this.urlApi}`, custumers);
  }
}
