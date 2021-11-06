import { NgModule } from "@angular/core";
import { TripRoutingModule } from "./trip-routing.modules";
import { MatIconModule } from "@angular/material/icon";
import { AddTripComponent } from "./add-trip/add-trip.component";
import { ListTripComponent } from "./list-trip/list-trip.component";
import { ThemesModule } from "src/app/themes/themes.module";
import { ReactiveFormsModule } from "@angular/forms";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CommonModule } from "@angular/common";
import { MatInputModule } from '@angular/material/input';

import { FormsModule } from '@angular/forms';
const LIST_DECLARATION = [AddTripComponent, ListTripComponent]
const LIST_EXPORT = []
const LIST_IMPORT = [TripRoutingModule,
    MatIconModule,
    ThemesModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    CommonModule, 
    MatInputModule, 
    FormsModule]


@NgModule({
    imports: [...LIST_IMPORT],
    declarations: [...LIST_DECLARATION],
    exports: []
})
export class TripModule { }