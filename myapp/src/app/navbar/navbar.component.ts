import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BillService } from '../services/bill.service';
import { DetailsService } from '../services/details.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  name = '';
  myArray: any = [];
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


  isLoggedIn = false;
  filter: any = [];


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

  addtocart(item: any) {
    //console.log(item);

    var product = {
      id: '',
      product: item._id,
      quantity: '1',
      name: item.name,
      price: item.price,
    };

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

  onlogout() {
    this.isLoggedIn = false;
    localStorage['login_status'] = '0';
    this.router.navigate(['/login']);
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
