import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from 'src/app/_services/employee-service';
import { MAT_DATE_FORMATS } from '@angular/material/core';
   
export const MY_DATE_FORMATS = {
    parse: {
      dateInput: 'DD/MM/YYYY',
    },
    display: {
      dateInput: 'DD/MM/YYYY',
      monthYearLabel: 'MMMM YYYY',
      dateA11yLabel: 'LL',
      monthYearA11yLabel: 'MMMM YYYY'
    },
};
@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.css'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ]
})
export class AddTripComponent implements OnInit {

  NOTICE_LICENSE = 'License must not empty!!!';
  NOTICE_CAR_TYPE = 'Car Type must not empty!!!';
  NOTICE_COMPANY = 'Company must not empty!!!';
  NOTICE_PARKINGLOT = 'Parking Lot must not empty!!!';

  isSubmited = false;

  companyData = [
    { name: "Phuong Trang" },
    { name: "Hoang Long" }
  ]


  profileForm: FormGroup;
  constructor(private fb: FormBuilder, private employeeService: EmployeeService, private toatr: ToastrService, private router: Router) {
    this.profileForm = this.fb.group({
      license: '',
      cartype: '',
      carcolor: ['', Validators.required],
      company: '',
      parkinglot: '',


    });
  }
  submit() {
    this.isSubmited = true;
    console.log(this.profileForm)
    if (this.profileForm.valid && this.profileForm.touched) {

    }
  }
  reset() {
    this.profileForm.reset();
  }

  ngOnInit(): void { }

}
