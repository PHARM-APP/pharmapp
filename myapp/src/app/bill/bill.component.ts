import { Component, OnInit } from '@angular/core';
import { BillService } from '../services/bill.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css'],
})
export class BillComponent implements OnInit {
  billProducts: any = [];
  total: number = 0;
  bill: any;
  constructor(
    private httpClient: HttpClient,
    private billService: BillService
  ) {}

  // addBill() {
  //   var order = JSON.parse(localStorage.getItem('products'));
  //   var custumer = '5fe0a1bf7e1d092a20e671f4';
  // }

  getBillProducts() {
    this.total = 0;
    var tmpProducts = JSON.parse(localStorage.getItem('products'));
    var arrayOfPromises = [];

    tmpProducts.forEach((item) => {
      arrayOfPromises.push(
        this.httpClient
          .get(`http://localhost:3000/api/product/${item.product}`)
          .toPromise()
      );
    });
    Promise.all(arrayOfPromises).then((result) => {

      tmpProducts.forEach((item, index) => {
        item.product = result[index];
        this.total += item.product.price * item.quantity;
      });
      this.billProducts = tmpProducts;
    });
  }

  deleteProductFromBill(id: String) {
    console.log(id);
    localStorage.setItem(
      'products',
      JSON.stringify(

        JSON.parse(localStorage.getItem('products')).filter((item) => {
          return item.product !== id;
        })
      )
    );
    this.getBillProducts();
  }

  // postBill()
  count(item: any) {
    item.quantity++;
    this.total += Number(item.product.price);
    var products = JSON.parse(localStorage.getItem('products'));

    products.forEach((product) => {
      if (product.product === item.product._id) {
        product.quantity++;
      }
    });
    localStorage.setItem('products', JSON.stringify(products));
  }

  ngOnInit(): void {
    this.getBillProducts();
  }
}

