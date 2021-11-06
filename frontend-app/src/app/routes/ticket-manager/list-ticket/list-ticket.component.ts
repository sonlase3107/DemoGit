import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConfirmDialogComponent } from 'src/app/themes/confirm-dialog/confirm-dialog.component';
import { AppConstant } from 'src/app/_constant/app-constant';
import { EmployeeDTO } from 'src/app/_models/employee-dto';
import { EmployeeService } from 'src/app/_services/employee-service';

@Component({
  selector: 'app-list-ticket',
  templateUrl: './list-ticket.component.html',
  styleUrls: ['./list-ticket.component.css']
})
export class ListTicketComponent implements OnInit {

  option:string = "License"
  HEADER_CONFIRM: string = "Do you want to "
  OPTION_REMOVE: string = "Remove"
  OPTION_EDIT: string = "Edit"
  listEmployee: any | EmployeeDTO[] = [];
  constructor(private empService: EmployeeService,
    private toastService: ToastrService,
    private dialog: MatDialog,
    private router: Router) {
  }

  ngOnInit(): void {
    this.refeshData()
    this.fetchData();
  }
  refeshData() {
    console.log("RefreshData")
    this.listEmployee = []
    console.log(this.listEmployee)
  }

  edit(emID: number) {
    this.openDialog(this.OPTION_EDIT, emID)
  }

  remove(emID: number) {
    this.openDialog(this.OPTION_REMOVE, emID)
  }

  openDialog(option: string, employeeID: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { header: `${this.HEADER_CONFIRM} ${option} Employee ${employeeID} ?` }
    })
    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        if (option === this.OPTION_REMOVE) {
          this.removeEmployee(employeeID);
        }
        if (option === this.OPTION_EDIT) {
          this.editEmployee(employeeID)
        }
      }
    })
  }

  fetchData() {
    console.log("Fetch Data")
    this.empService.getAll().subscribe((res) => {
      if (res.success && res.data !== undefined) {
        this.listEmployee = res.data;
        console.log(this.listEmployee)
      } else {
        this.toastService.error("No Content", "Notification")
      }
    });
  }
  removeEmployee(emID: number) {
    this.empService.removeEmployee(emID).subscribe(response => {
      if (response.success === true) {
        this.fetchData();
        this.toastService.success("Remove Successfully")
      }
    }, (err) => {
      if (err.ok === false) {
        console.log(err)
        this.toastService.error("Remove Faill!!!")
      }
    })
  }
  editEmployee(employeeID: number) {

    this.router.navigate(['employee', 'employee-manager', 'edit'])
    this.setEmIdLocalStore(employeeID)
    // this.router.navigateByUrl('/dashboard/employee-manager/edit', { state: { id: employeeID } })
  }
  setEmIdLocalStore(emId: number) {
    console.log(emId)
    localStorage.setItem(AppConstant.EmployeeIDLocalStore, emId.toString())
  }

  searchUser(value: string) {
    if (value !== '') {
      this.empService.getEmployeeByName(value).subscribe((res) => {
        if (res !== null && res !== undefined) {
          if (res.success === true) {
            this.listEmployee = res.data
          } else {
            this.toastService.error("Error!!!")
          }
        }
        this.toastService.warning("Something Wrong!!!!")
      })
    }
  }
}
