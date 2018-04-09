import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatFormFieldModule, MatIconModule, MatSelectModule,
  MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatInputModule
} from '@angular/material';
import { ReportComponent } from './report.component';
import { FormsModule, NgControl } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement, ModuleWithComponentFactories } from '@angular/core';
// import { By } from 'selenium-webdriver';
import { By } from '@angular/platform-browser';

fdescribe('ReportComponent', () => {
  let component: ReportComponent;
  let fixture: ComponentFixture<ReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReportComponent],
      imports: [
        NoopAnimationsModule,
        MatIconModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        FormsModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      providers: [
        NgControl
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create report component', () => {
    expect(component).toBeTruthy();
  });

  it('should render checkbox', () => {
    fixture.detectChanges();
    // console.log(fixture.debugElement.query(By.css('.checkbox')));
    expect(component.today).toBeFalsy();
    // component.today = true;
    fixture.detectChanges();
    // console.log(component.today);
    expect(fixture.debugElement.query(By.css('.checkbox'))).toBeTruthy();
  });

  // fit('should changed values on checkbox changed', () => {
  //   fixture.detectChanges();
  //   const checkbox = fixture.debugElement.nativeElement.query(By.css('.checkbox'));
  //   checkbox.click();
  //   fixture.whenStable().then(() => {
  //     expect(component.today).toBeTruthy();
  //   });
  // });

  it('should render mat-select', () => {
    const selection = fixture.debugElement.query(By.css('mat-select'));
    selection.nativeElement.click();
    fixture.detectChanges();
    const selectionOption = fixture.debugElement.queryAll(By.css('mat-option'));
    console.log(component.reportList);
    expect(selection).toBeTruthy();
  });
});
