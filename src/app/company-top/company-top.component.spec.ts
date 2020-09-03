import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyTopComponent } from './company-top.component';

describe('CompanyTopComponent', () => {
  let component: CompanyTopComponent;
  let fixture: ComponentFixture<CompanyTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
