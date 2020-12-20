import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Product } from '../models/product'
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  http:HttpClient
urlApi='http://localhost:3000/api/product/'
  constructor(private httpClient: HttpClient) {
    this.http=httpClient
  }
  addService(
    id: string,
    name: string,
    price:string,
    discount:string,
    pricewithDiscount:string,
    doseInMFG:string,
    quantity:string,
    image:any,
    description:string
    
  ){
  const body=new FormData()
  body.append('id',id)
  body.append('name',name)
  body.append('price', price)
  body.append('discount', discount)
  body.append('priceWithDiscount', pricewithDiscount)
  body.append('doseInMG', doseInMFG)
  body.append('quantity', quantity)
  body.append('image', image)
  body.append('description',description)

return this.http.post(this.urlApi,body)


  



  }



  
}
