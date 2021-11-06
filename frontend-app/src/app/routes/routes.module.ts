import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutesRoutingModule } from './routes-routing.module';
import { LoginComponent } from './login/login.component';
import { EmployeeManagerComponent } from './employee-manager/employee-manager.component';
import { LayoutDashboardComponent } from '../themes/layout-dashboard/layout-dashboard.component';
import { AddEmployeeComponent } from './employee-manager/add-employee/add-employee.component';
import { ListEmployeeComponent } from './employee-manager/list-employee/list-employee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditEmployeeComponent } from './employee-manager/edit-employee/edit-employee.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { CarModule } from './car-manager/car.modules';
import { CarRoutingModule } from './car-manager/car-routing.modules';
import { BookingOfficeModule } from './booking-office-manager/booking-office.modules';
import { AddBookOfficeComponent } from './booking-office-manager/add-book-office/add-book-office.component';
import { ListBookOfficeComponent } from './booking-office-manager/list-book-office/list-book-office.component';
import { ParkingLotModule } from './parking-lot-manager/parking-lot.modules';
import { TicketModule } from './ticket-manager/ticket.modules';
import { TripModule } from './trip-manager/trip.modules';
import { MatNativeDateModule } from '@angular/material/core';
import { ThemesModule } from '../themes/themes.module';
const LIST_DECLARATION = [
  LoginComponent,
  EmployeeManagerComponent,
  AddEmployeeComponent,
  ListEmployeeComponent,
  EditEmployeeComponent,
]

const LIST_IMPORT = [
  CommonModule,
  RoutesRoutingModule,
  CarModule,
  BookingOfficeModule,
  ParkingLotModule,
  TicketModule,
  TripModule,
  ReactiveFormsModule,
  BrowserAnimationsModule,
  MatDialogModule,
  MatIconModule,
  ThemesModule,
  MatDatepickerModule,
  MatNativeDateModule,
  
  ToastrModule.forRoot()
]

const LIST_EXPORT = [RoutesRoutingModule, CarModule, CarRoutingModule]
@NgModule({
  declarations: [...LIST_DECLARATION, AddBookOfficeComponent, ListBookOfficeComponent],
  imports: [...LIST_IMPORT],
  providers: [MatDatepickerModule],
  exports: [...LIST_EXPORT]
})
export class RoutesModule { }
