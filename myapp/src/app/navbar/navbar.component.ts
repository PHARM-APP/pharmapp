import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailsService } from '../services/details.service';

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
      if (item.name.includes(this.name)) {
        return item;
      }
    });
  }


  ngOnInit(): void {}
}
