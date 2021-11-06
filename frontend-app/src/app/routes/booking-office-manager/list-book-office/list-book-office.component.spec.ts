import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBookOfficeComponent } from './list-book-office.component';

describe('ListBookOfficeComponent', () => {
  let component: ListBookOfficeComponent;
  let fixture: ComponentFixture<ListBookOfficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBookOfficeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBookOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
