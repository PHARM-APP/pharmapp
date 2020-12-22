import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailsService } from '../services/details.service';
import { BillService } from '../services/bill.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  name = '';
  myArray: any = [];

  isLoggedIn = false;
  filter: any = [];

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
  }

  loadAllProducts() {
    this.service.getAllProducts().subscribe((response) => {
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


  onlogout() {
    this.isLoggedIn = false;
    localStorage['login_status'] = '0';
    this.router.navigate(['/login']);
  }

  onChange(event: any) {
    this.filter = this.myArray.filter((item: any) => {
      if (item.name.toLowerCase().includes(this.name)) {
        return item;
      }
    });
  }


  ngOnInit(): void {}
}
