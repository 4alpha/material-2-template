import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddNewContactDialogComponent } from './add-new-contact-dialog/add-new-contact-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(AddNewContactDialogComponent, {
      width: '500px',
      height: '250px',
      position: { bottom: '5%', left: '30%', right: '30%' },
      disableClose: true
    });
  }
}
