export class Employee {
  account: string;
  department: string;
  employeeAddress: string;
  employeeBirthDate: string;
  employeeEmail: string;
  employeeName: string;
  employeePhone: string;
  password: string;
  sex: string;
  constructor(acc: string, dep: string, addr: string, embirth: string, email: string, name: string, phone: string, pass: string, sx: string) {
    this.account = acc;
    this.department = dep;
    this.employeeAddress = addr;
    this.employeeBirthDate = embirth;
    this.employeeEmail = email;
    this.employeePhone = phone;
    this.employeeName = name;
    this.password = pass;
    this.sex = sx;
  }
}
