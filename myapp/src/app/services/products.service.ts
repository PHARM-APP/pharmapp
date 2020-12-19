import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Product } from '../models/product'
@Injectable({
  providedIn: 'root'
})
export class ProductService {
urlApi='http://localhost:3000/api/product'
url2='http://localhost:3000/api/categorie'
  constructor(private http: HttpClient) {}

  // CRUD 
  // Methode Get
  getAll(){
   return this.http.get<Product>(this.urlApi)
  }
  //methode Delete()
  delete(id:number){
    return this.http.delete(this.urlApi+'/'+id)
  }
  //methode Post
  postitem(product:any){
    const body=new FormData()
    body.append('id',product.id)
    body.append('name',product.name)
    body.append('price',product.price)
    body.append('discount',product.discount)
    body.append('PricewithDiscount',product.PricewithDiscount)
    body.append('DoesInMG',product.DoesInMG)
    body.append('quantity',product.quantity)
    body.append('image',product.image)
    body.append('categoryid',product.categoryid)
    body.append('description',product.description)

   return this.http.post<Product>(this.urlApi,body)
  }
  //Methode Update
  updateProduct(products:any){
    return this.http.put(`${this.urlApi}`,products)

  }
  getcat(){
    return this.http.get(this.url2)
  }
}
