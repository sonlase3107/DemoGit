import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { EmployeeService } from "src/app/_services/employee-service";


@Component({
  selector: "app-layout-dashboard",
  templateUrl: "./layout-dashboard.component.html",
  styleUrls: ["./layout-dashboard.component.css"],
  providers: [EmployeeService],
})
export class LayoutDashboardComponent implements OnInit {
  constructor(private router: Router) { }

  ACTION_CURRENT = "Action"

  OPTION_ADD_EMPLOYEE: string = "Add Employee"
  OPTION_LIST_EMPLOYEE: string = 'List Employee'
  OPTION_LIST_CAR: string = "List Car"
  OPTION_ADD_CAR: string = "Add Car"
  OPTION_LIST_BOOKINGOFFICE: string = 'List Booking Officer'
  OPTION_ADD_BOOKINGOFFICE: string = "Add Booking Officer"
  OPTION_LIST_PARKING_LOT: string = "List Parking Lot"
  OPTION_ADD_PARKING_LOT: string = "Add Parking Lot"
  OPTION_LIST_TRIP: string = 'List Trip'
  OPTION_ADD_TRIP: string = "Add Trip"
  OPTION_LIST_TICKET: string = 'List Ticket'
  OPTION_ADD_TICKET: string = 'Add Ticket'

  ngOnInit(): void {

  }
  panelOpenState = false;
  showFiller = false;
  navigate(param: string) {
    if (param == this.OPTION_ADD_EMPLOYEE) {
      this.ACTION_CURRENT = this.OPTION_ADD_EMPLOYEE;
      this.router.navigate(['employee', 'employee-manager', 'add'])
    }
    if (param == this.OPTION_LIST_EMPLOYEE) {
      this.ACTION_CURRENT = this.OPTION_LIST_EMPLOYEE
      this.router.navigate(['employee', 'employee-manager', 'list'])
    }
    if(param==this.OPTION_ADD_CAR){
      this.ACTION_CURRENT = this.OPTION_ADD_CAR
      this.router.navigate(['car','add-car'])
    }
    if(param==this.OPTION_LIST_CAR){
      this.ACTION_CURRENT = this.OPTION_LIST_CAR
      this.router.navigate(['car','list-car'])
    }
    if(param==this.OPTION_LIST_BOOKINGOFFICE){
      this.ACTION_CURRENT = this.OPTION_LIST_BOOKINGOFFICE
      this.router.navigate(['book-office','list-book-office'])
    }
    if(param==this.OPTION_ADD_BOOKINGOFFICE){
      this.ACTION_CURRENT = this.OPTION_ADD_BOOKINGOFFICE
      this.router.navigate(['book-office','add-book-office'])
    }
    if(param==this.OPTION_ADD_PARKING_LOT){
      this.ACTION_CURRENT = this.OPTION_ADD_PARKING_LOT
      this.router.navigate(['park-lot','add-park-lot'])
    }
    if(param==this.OPTION_LIST_PARKING_LOT){
      this.ACTION_CURRENT = this.OPTION_LIST_PARKING_LOT
      this.router.navigate(['park-lot','list-park-lot'])
    }
    if(param==this.OPTION_LIST_TRIP){
      this.ACTION_CURRENT = this.OPTION_LIST_TRIP
      this.router.navigate(['trip','list-trip'])
    }
    if(param==this.OPTION_ADD_TRIP){
      this.ACTION_CURRENT = this.OPTION_ADD_TRIP
      this.router.navigate(['trip','add-trip'])
    }
    if(param==this.OPTION_ADD_TICKET){
      this.ACTION_CURRENT = this.OPTION_ADD_TICKET
      this.router.navigate(['ticket','add-ticket'])
    }
    if(param==this.OPTION_LIST_TICKET){
      this.ACTION_CURRENT = this.OPTION_LIST_TICKET
      this.router.navigate(['ticket','list-ticket'])
    }
  }
}
