import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DetailsService} from '../services/details.service'
@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  myArray:any =[]
  isLoggedIn = false;

  constructor(private router: Router,productService:DetailsService, private service:DetailsService) {
    productService.getproduct().subscribe((res:any)=>{
      this.myArray=res  })
        this.loadAllProducts()
  }
  loadAllProducts(){
    this.service.getAllProducts().subscribe((response:any)=>{
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
  onlogout() {
    this.isLoggedIn = false;
    localStorage['login_status']='0'
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
  }

}
