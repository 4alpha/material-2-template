import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MaterialImportModule } from '../material.import.module';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule,
    MaterialImportModule,
    FormsModule
  ],
  exports: [
    DashboardComponent,
    SearchComponent
  ],
  declarations: [DashboardComponent, SearchComponent]
})
export class SharedModule { }
