import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { ThemesModule } from "src/app/themes/themes.module";
import { AddTicketComponent } from "./add-ticket/add-ticket.component";
import { ListTicketComponent } from "./list-ticket/list-ticket.component";
import { TicketRoutingModule } from "./ticket-routing.modules";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { CommonModule } from "@angular/common";

const LIST_DECLARATION = [AddTicketComponent, ListTicketComponent]
const LIST_EXPORT = []
const LIST_IMPORT = [CommonModule, TicketRoutingModule, ThemesModule, MatIconModule, ReactiveFormsModule, MatDatepickerModule]


@NgModule({
    imports: [...LIST_IMPORT],
    declarations: [...LIST_DECLARATION],
    exports: []
})
export class TicketModule { }