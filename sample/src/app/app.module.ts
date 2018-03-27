import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MaterialImportModule } from './material.import.module';
import { AddNewContactDialogComponent } from './add-new-contact-dialog/add-new-contact-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    AddNewContactDialogComponent
  ],
  imports: [
    BrowserModule,
    MaterialImportModule
  ],
  providers: [],
  entryComponents: [
    AddNewContactDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
