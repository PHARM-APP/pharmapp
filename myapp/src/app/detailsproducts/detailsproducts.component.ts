import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {DetailsService} from '../services/details.service'
@Component({
  selector: 'app-detailsproducts',
  templateUrl: './detailsproducts.component.html',
  styleUrls: ['./detailsproducts.component.css']
})
export class DetailsproductsComponent implements OnInit {
  myArray:any =[]

  constructor( private router:Router,productService:DetailsService, private service:DetailsService) { 
  productService.getproduct().subscribe((res)=>{
this.myArray=res  })
  this.loadAllProducts()
  }
  loadAllProducts(){
    this.service.getAllProducts().subscribe(response=>{
      console.log(response)
      this.myArray=response
    })
  }
  deleteProduct(id:number){
    console.log(id)
  
    this.service.delete(id)
  
     .subscribe(()=>{
      // return this.myArray=this.myArray.filter((item:any)=>item.id !== id)
      return   this.loadAllProducts()

     })
   }
  
  
  ngOnInit(): void {
  }

}
