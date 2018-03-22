import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(public snackBar: MatSnackBar) {}

  openSnackBar() {
    this.snackBar.open("Snackbar Message", "Ok", {
      duration: 500,
    });
  }
}
