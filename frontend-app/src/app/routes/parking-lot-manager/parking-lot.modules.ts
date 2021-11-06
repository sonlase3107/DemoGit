import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatNativeDateModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ThemesModule } from "src/app/themes/themes.module";
import { AddParkingLotComponent } from "./add-parking-lot/add-parking-lot.component";
import { ListParkingLotComponent } from "./list-parking-lot/list-parking-lot.component";
import { ParkLotRoutingModule } from "./parking-lot-routing.modules";



const LIST_DECLARATION = [ListParkingLotComponent, AddParkingLotComponent]
const LIST_EXPORT = []
const LIST_IMPORT = [ParkLotRoutingModule, ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule,
    ThemesModule,
    MatDatepickerModule,
    MatNativeDateModule,]


@NgModule({
    imports: [...LIST_IMPORT],
    declarations: [...LIST_DECLARATION],
    exports: []
})
export class ParkingLotModule { }