import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailsService } from '../services/details.service';
import { BillService } from '../services/bill.service';
import { bill } from '../models/bill';
@Component({
  selector: 'app-detailsproducts',
  templateUrl: './detailsproducts.component.html',
  styleUrls: ['./detailsproducts.component.css'],
})
export class DetailsproductsComponent implements OnInit {
  myArray: any = [];
  filter: any = [];
    name = '';

  bill: any = {
    id: '',
    custumer: '',
    order: [
      {
        id: '',
        product: '',
        quantity: '',
        name: '',
        price: 0,
      },
    ],
    total: '',
  };

  constructor(
    private router: Router,
    productService: DetailsService,
    private service: DetailsService,
    private billservice: BillService

  ) {
    productService.getproduct().subscribe((res) => {
      this.myArray = res;
    });
    this.loadAllProducts();
  }
  loadAllProducts() {
    this.service.getAllProducts().subscribe((response) => {
      console.log(response);
      this.myArray = response;
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

  addtocart(item: any) {
    //console.log(item);

    var product = {
      product: item._id,
      quantity: 1,
      price: item.price,
    };

    var newProducts = JSON.parse(localStorage.getItem('products')) || [];
    console.log(newProducts);
    newProducts.push(product);
    localStorage.setItem('products', JSON.stringify(newProducts));

    if (localStorage.getItem('bill_id') === null) {
      this.bill.order = [];
      this.bill.order.push(product);
      this.bill.custumer = localStorage.getItem('_id');

      this.billservice.postitem(this.bill).subscribe((res) => {
        console.log(res);
      });

      //localStorage.setItem('bill_id', bill_id);
    } else {
      this.bill.custumer = localStorage.getItem('_id');
      this.bill.order.push(product);

      var bill_id = this.billservice.addproducttocart(this.bill);
    }

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
