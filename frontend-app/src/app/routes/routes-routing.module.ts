import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutDashboardComponent } from "../themes/layout-dashboard/layout-dashboard.component";
import { LoginComponent } from "./login/login.component";
import { EmployeeManagerComponent } from "./employee-manager/employee-manager.component";
import { AddEmployeeComponent } from "./employee-manager/add-employee/add-employee.component";
import { ListEmployeeComponent } from "./employee-manager/list-employee/list-employee.component";
import { EditEmployeeComponent } from "./employee-manager/edit-employee/edit-employee.component";
const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "employee",
    component: LayoutDashboardComponent,
    children: [
      {
        path: "employee-manager",
        component: EmployeeManagerComponent,
        children: [
          { path: "add", component: AddEmployeeComponent },
          { path: "list", component: ListEmployeeComponent },
          { path: 'edit', component: EditEmployeeComponent }
        ],
      },
    ],
  },
  // { path: "**", redirectTo: "/book-office/add-book-office" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutesRoutingModule { }



/*
BookingOffice:
  ADD: book-office/add-book-office
  List: book-office/list-book-office
*/
/*
ParkLot:
  Add: /park-lot/add-park-lot
  List: /park-lot/list-park-lot
*/
/*
Ticket:
  Add: /ticket/add-ticket
  List: /ticket/list-ticket
*/

/*
Trip:
  Add: /trip/add-trip
  List: /trip/list-trip
*/