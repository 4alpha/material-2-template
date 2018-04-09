import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MaterialImportModule } from '../material.import.module';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReportComponent } from './report/report.component';


@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule,
    MaterialImportModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    DashboardComponent,
    SearchComponent
  ],
  declarations: [DashboardComponent, SearchComponent, ReportComponent]
})
export class SharedModule { }
