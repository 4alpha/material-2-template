import 'web-animations-js';
import 'hammerjs';

import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class MaterialImportModule { }