import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import {ProductsService} from '../services/products.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
// myArray:any=[]
// myProduct:any={
  id=""
  name=""
  price=""
  discount=""
  PricewithDiscount=""
  DoesInMG=""
  quantity=''
  image= ""
  
  description=""

  constructor(private myVar:ProductsService) { }

  ngOnInit():void {
   
  }
  addProduct(){
    this.myVar.addService(this.id,this.name,this.price,this.discount,this.PricewithDiscount,this.DoesInMG,this.quantity,this.image,this.description)
    .subscribe((res)=>{
      console.log(' product added')
    })
  }
  onSelectImage(event:any){
    console.log(event.target.files[0])
    this.image=event.target.name
  }
}

