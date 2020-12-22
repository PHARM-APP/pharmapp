import { Component, OnInit } from '@angular/core';
import { BillService } from '../services/bill.service';
@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css'],
})
export class BillComponent implements OnInit {
  myArray: any = [];
  total: number = 0;
  constructor(private myVar: BillService) {
    this.getbills();
  }

  getbills() {
    this.myVar.getAll().subscribe((data) => {
      console.log(data);
      this.myArray = data;
      for (let i = 0; i < this.myArray.length; i++) {
        this.total += this.myArray[i].order[0].price;
      }
      console.log(this.total);
    });
  }

  deletebill(id: number) {
    this.myVar.delete(id).subscribe(() => {
      return this.getbills();
    });
  }

  // postBill()
  count(item: any) {
    item.order[0].quantity++;
    this.total = Number(item.order[0].quantity) * Number(item.order[0].price);
  }

  ngOnInit(): void {}
}
