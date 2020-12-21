import { Component, OnInit } from '@angular/core';
import { ChartService } from '../services/chart.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  array: any = [];
  public barChartOptions = {
    scalesShowVerticalLines: false,
    responsive: true,
  };
  public barChartLabels = ['Week1', 'Week2', 'Week3', 'Week4'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [{ data: this.array, label: 'Sales' }];
  arr: any = [];
  constructor(private service: ChartService) {}
  allBills() {
    this.service.getAllBills().subscribe((res) => {
      this.arr = res;
      for (var i = 0; i < this.arr.length; i++) {
        console.log('5555', this.arr[i].total);
        this.array.push(this.arr[i].total);
      }
    });
  }
  ngOnInit(): void {
    this.allBills();
  }
}
