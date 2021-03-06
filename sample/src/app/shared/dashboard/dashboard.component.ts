import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {
  reportList: string[];
  todaysData: string[];
  dataInRange: { name: Date; value: number; }[];
  showTodaysTable: boolean;
  showLeadCount: boolean;
  showGraph: boolean;
  showOptions: boolean;
  toDate: any;
  fromDate: any;
  showRangeTable: boolean;
  today: any;
  leadCount: number;
  displayedColumns = ['name', 'value'];
  displayedColumns2 = ['email'];
  dataSource: any;
  dataSource2: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatPaginator) paginator2: MatPaginator;
  single: any[];
  view: any[] = [700, 350];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Date';
  showYAxisLabel = true;
  yAxisLabel = 'Leads';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    this.reportList = [
      'Lead Generated',
      'Lead by Campaign',
      'Lead by Team',
      'Lead by Employee Role'
    ];
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }

  showInTabularFormat() {
    this.dataSource = new MatTableDataSource(this.dataInRange);
    this.dataSource.paginator = this.paginator;
    console.log(this.dataSource.paginator);
    this.showRangeTable = true;
    this.showGraph = false;
    this.showTodaysTable = false;
  }
  showInGraphFormat() {
    this.showRangeTable = false;
    this.showGraph = true;
    this.showTodaysTable = false;
  }

  showTodaysDetails() {
    this.todaysData = [
      'abce@gmail.com', 'xyz.ashdg@kjhsa.com', 'abce@gmail.com', 'xyz.ashdg@kjhsa.com', 'abce3243234@gmail.com', 'xyz.123@kjhsa.com',
      'abce123111@gmail.com', 'xyz.a9g@kjhsa.com'
    ];
    this.showTodaysTable = true;
    this.showRangeTable = false;
    this.showGraph = false;
    this.dataSource2 = new MatTableDataSource(this.todaysData);
    this.dataSource2.paginator = this.paginator2;
    console.log(this.dataSource2.paginator);
  }

  onShow(event) {
    this.today = event.today;
    if (event.reportSelected === 'Lead Generated') {
      if (event.today) {
        // this.leadCount = event.leadCount;
        this.showOptions = false;
        this.showLeadCount = true;
        this.showRangeTable = false;
        this.showGraph = false;
        // Get lead Count
        this.leadCount = 10;
      } else {
        this.showLeadCount = false;
        this.showTodaysTable = false;
        if (event.fromDate && event.toDate) {
          this.showOptions = true;
          let fromDate: any = new Date(event.fromDate);
          let toDate: any = new Date(event.toDate);
          fromDate = fromDate.getFullYear() + '-' + fromDate.getMonth() + 1 + '-' + fromDate.getDate();
          toDate = toDate.getFullYear() + '-' + toDate.getMonth() + 1 + '-' + toDate.getDate();
          // Get Range Data
          this.dataInRange = [
            {
              name: new Date('2/3/2018'),
              value: 200
            },
            {
              name: new Date('4/3/2018'),
              value: 350
            },
            {
              name: new Date('5/3/2018'),
              value: 350
            },
            {
              name: new Date('6/3/2018'),
              value: 350
            },
            {
              name: new Date('7/3/2018'),
              value: 350
            },
            {
              name: new Date('8/3/2018'),
              value: 390
            },
            {
              name: new Date('10/3/2018'),
              value: 420
            }
          ];
        }
      }
    }
  }

  // onCheckboxChanged(event) {
  //   if (event === true) {
  //     this.showLeadCount = true;
  //     this.showRangeTable = false;
  //     this.showGraph = false;
  //     this.showOptions = false;
  //     this.fromDate = this.toDate = null;
  //   } else {
  //     this.showLeadCount = false;
  //     this.showTodaysTable = false;
  //   }
  // }
}
