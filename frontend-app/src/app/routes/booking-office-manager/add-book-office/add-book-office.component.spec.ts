import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookOfficeComponent } from './add-book-office.component';

describe('AddBookOfficeComponent', () => {
  let component: AddBookOfficeComponent;
  let fixture: ComponentFixture<AddBookOfficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBookOfficeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBookOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
