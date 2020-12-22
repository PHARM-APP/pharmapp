import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailsService } from '../services/details.service';
@Component({
  selector: 'app-detailsproducts',
  templateUrl: './detailsproducts.component.html',
  styleUrls: ['./detailsproducts.component.css'],
})
export class DetailsproductsComponent implements OnInit {
  name = '';
  filter: any = [];
  myArray: any = [];

  constructor(
    private router: Router,
    productService: DetailsService,
    private service: DetailsService
  ) {
    productService.getproduct().subscribe((res) => {
      this.myArray = res;
    });
    this.loadAllProducts();
  }
  loadAllProducts() {
    this.service.getAllProducts().subscribe((response: any) => {
      // if(this.mycondition){
      //   for(var i=0;i<response.length;i++){
      //     if(response[i].name==name){
      //       this.myArray.push(response[i])
      //       console.log(this.myArray)

      //     }
      //   }
      // }
      console.log(response);
      this.myArray = response;
      this.filter = response;
    });
  }
  deleteProduct(id: number) {
    console.log(id);

    this.service
      .delete(id)

      .subscribe(() => {
        // return this.myArray=this.myArray.filter((item:any)=>item.id !== id)
        return this.loadAllProducts();
      });
  }
  onChange(event: any) {
    this.filter = this.myArray.filter((item: any) => {
      if (item.name.includes(this.name)) {
        return item;
      }
    });
  }
  

  ngOnInit(): void {}
}
