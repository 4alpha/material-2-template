import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { Validators, FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  wrongDateRange = false;
  reportControl = new FormControl('', [Validators.required]);
  selected: any;
  dataToSend: {};
  todaysData: string[];
  dataInRange: { name: Date; value: number; }[];
  toDate: any;
  fromDate: any;
  today = false;
  leadCount: number;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onShow = new EventEmitter<any>();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onCheckboxChanged = new EventEmitter<any>();
  @Input() reportList;
  @ViewChild('reportForm') form: NgForm;

  dateChanged() {
    const fromDate = this.fromDate.setHours(0, 0, 0, 0);
    const toDate = this.toDate.setHours(0, 0, 0, 0);
    if (toDate < fromDate) {
      console.log('Error');
      this.wrongDateRange = true;
      return;
    }
    this.wrongDateRange = false;
  }

  checkboxChanged() {
    if (this.today) {
      this.fromDate = this.toDate = new Date();
    }
    // else {
    //   this.fromDate = this.toDate = null;
    // }
    // this.show();
    // this.onCheckboxChanged.emit(this.today);
    // if (!this.today) {
    //   this.fromDate = this.toDate = null;
    // }
  }

  show() {

    // if (this.reportControl.status === 'INVALID') {
    //   console.log('error');
    //   return;
    // }

    this.dataToSend = {
      today: this.today,
      // leadCount: this.leadCount,
      // dataInRange: this.dataInRange
      fromDate: this.fromDate,
      toDate: this.toDate,
      reportSelected: this.selected
    };
    console.log(this.dataToSend);
    this.onShow.emit(this.dataToSend);
  }

  constructor() { }

  ngOnInit() {
    this.fromDate = this.toDate = new Date();
  }

}
