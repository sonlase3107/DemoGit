import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from 'src/app/_services/employee-service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {


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
      license: 'Le Anh Son',
      cartype: '12345678',
      carcolor: ['', Validators.required],
      company: 'male',
      parkinglot: 'Thanh Hoa,Viet Nam',


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
