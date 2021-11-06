import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { AppConstant } from 'src/app/_constant/app-constant';
import { Employee } from 'src/app/_models/employee';
import { EmployeeService } from 'src/app/_services/employee-service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  NOTICE_FULLNAME = 'Full-Name must not empty!!!';
  NOTICE_PHONE = 'Phone must not empty!!!';
  NOTICE_DOB = 'Date Of Birth must not empty!!!';
  NOTICE_ADRESS = 'Address must not empty!!!';
  NOTICE_EMAIL = 'Email must not empty!!!';
  NOTICE_ACCOUNT = 'Account must not empty!!!';
  NOTICE_PASSWORD = 'Password must not empty!!!';
  NOTICE_DEPARTMENT = 'Department must not empty!!!';
  emID: number = 0;
  isSubmited = false;
  profileForm: FormGroup;
  departmentData = [
    { name: "Employee" },
    { name: "Human Resource" }
  ]

  constructor(private router: Router, private fb: FormBuilder, private employeeService: EmployeeService, private toatr: ToastrService) {
    this.emID = this.initEmployeeIDFromLocalStore();
    console.log(this.emID)
    this.profileForm = this.fb.group({
      fullname: '',
      phone: '',
      dob: '',
      gender: '',
      address: '',
      email: '',
      account: '',
      password: '',
      department: this.departmentData[0].name,
    });
  }

  ngOnInit(): void {
    this.employeeService.getEmployeeById(this.emID).subscribe((res) => {
      if (res !== undefined && res.success === true) {
        console.log(res)
        this.initDataForm(res.data);
      }
    },
      (err) => {
        console.log(err)
      })
  }

  initDataForm(emp: any) {
    this.profileForm.controls['account'].setValue(emp.account)
    this.profileForm.controls['fullname'].setValue(emp.employeeName)
    this.profileForm.controls['phone'].setValue(emp.employeePhone)
    this.profileForm.controls['dob'].setValue(emp.employeeBirthDate)
    this.profileForm.controls['address'].setValue(emp.employeeAddress)
    this.profileForm.controls['password'].setValue(emp.password)
    this.profileForm.controls['email'].setValue(emp.employeeEmail)
    this.profileForm.controls['department'].setValue(emp.department)
    this.profileForm.controls['gender'].setValue(emp.sex)
  }
  submit() {
    this.isSubmited = true;
    if (this.profileForm.valid && this.profileForm.touched) {
      const sexEm = this.profileForm.value.sex.female ? 'f' : 'm'
      // console.log(sexEm)
      const emp = {
        employeeID: this.getEmployeeIDFromLocalStore(),
        account: this.profileForm.value.account,
        department: this.profileForm.value.department,
        employeeAddress: this.profileForm.value.address,
        employeeBirthDate: this.profileForm.value.dob,
        employeeEmail: this.profileForm.value.email,
        employeeName: this.profileForm.value.fullname,
        employeePhone: this.profileForm.value.phone,
        password: this.profileForm.value.password,
        sex: sexEm
      }
      console.log(emp)
      this.employeeService.updateEmployee(emp).subscribe((res) => {
        console.log(res)
        if (res !== null && res !== undefined) {
          if (res.success === true) {
            this.toatr.success("Update Employee Successfully!!!")
            this.resetEmployeeIDFromLocalStore();
            this.router.navigate(['dashboard', 'employee-manager', 'list'])
          } else {
            this.toatr.error("Update Employee Faill!!!")
          }
        } else {
          this.toatr.warning("No Response")
        }
      })

    }
  }
  resetEmployeeIDFromLocalStore(): void {
    localStorage.removeItem(AppConstant.EmployeeIDLocalStore)
  }
  initEmployeeIDFromLocalStore(): number {
    return Number(localStorage.getItem(AppConstant.EmployeeIDLocalStore))
  }
  getEmployeeIDFromLocalStore(): number {
    return Number(localStorage.getItem(AppConstant.EmployeeIDLocalStore))
  }
  reset() {
    this.profileForm.reset();
  }
  back() {
    // this.router.navigate(['employee-manager'])
  }
}
