import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MaterialImportModule } from './material.import.module';
import { AddNewContactDialogComponent } from './add-new-contact-dialog/add-new-contact-dialog.component';
import { SharedModule } from './shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { SearchComponent } from './shared/search/search.component';

const appRoutes: Routes = [
  {
    path: '',
    // component: DashboardComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'search',
        component: SearchComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AddNewContactDialogComponent
  ],
  imports: [
    BrowserModule,
    MaterialImportModule,
    SharedModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  entryComponents: [
    AddNewContactDialogComponent
  ],
  exports: [
    RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
