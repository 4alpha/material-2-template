import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddNewContactDialogComponent } from '../../add-new-contact-dialog/add-new-contact-dialog.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openDialog() {
    const dialogRef = this.dialog.open(AddNewContactDialogComponent, {
      width: '500px',
      height: '250px',
      position: { bottom: '5%', left: '30%', right: '30%' },
      disableClose: true
    });
  }

}
