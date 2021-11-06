import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from 'src/app/_services/employee-service';

@Component({
  selector: 'app-add-book-office',
  templateUrl: './add-book-office.component.html',
  styleUrls: ['./add-book-office.component.css']
})
export class AddBookOfficeComponent implements OnInit {



  NOTICE_FULLNAME = 'Full-Name must not empty!!!';
  NOTICE_PHONE = 'Phone must not empty!!!';
  NOTICE_DOB = 'Date Of Birth must not empty!!!';
  NOTICE_ADRESS = 'Address must not empty!!!';
  NOTICE_EMAIL = 'Email must not empty!!!';
  NOTICE_ACCOUNT = 'Account must not empty!!!';
  NOTICE_PASSWORD = 'Password must not empty!!!';
  NOTICE_DEPARTMENT = 'Department must not empty!!!';

  isSubmited = false;

  departmentData = [
    { name: "Employee" },
    { name: "Human Resource" }
  ]


  profileForm: FormGroup;
  constructor(private fb: FormBuilder, private employeeService: EmployeeService, private toatr: ToastrService, private router: Router) {
    this.profileForm = this.fb.group({
      fullname: 'Le Anh Son',
      phone: '12345678',
      dob: ['', Validators.required],
      gender: 'male',
      address: 'Thanh Hoa,Viet Nam',
      email: 'sonlase3107@gmail.com',
      account: 'sk123',
      password: '123456',
      department: this.departmentData[0].name,
    });
  }
  submit() {
    this.isSubmited = true;
    console.log(this.profileForm)
    if (this.profileForm.valid && this.profileForm.touched) {
      const sexEm = this.profileForm.value.gender == 'male' ? 'm' : 'f'
      const emp = {
        account: this.profileForm.value.account,
        department: this.profileForm.value.department,
        employeeAddress: this.profileForm.value.address,
        employeeBirthDate: JSON.parse(JSON.stringify(this.profileForm.value.dob)),
        employeeEmail: this.profileForm.value.email,
        employeeName: this.profileForm.value.fullname,
        employeePhone: this.profileForm.value.phone,
        password: this.profileForm.value.password,
        sex: sexEm
      }
      console.log(emp)
      this.employeeService.CreateEmployee(emp).subscribe((res) => {
        if (res !== undefined && res.success === true) {
          this.toatr.show("Success", "Create Employee Succesfully!!!")
          this.profileForm.reset();
        }
      },
        (err) => {
          console.log(err)
        })
    }
  }
  reset() {
    this.profileForm.reset();
  }
  back() {
    this.router.navigate(['employee-manager'])
  }
  ngOnInit(): void { }
}
