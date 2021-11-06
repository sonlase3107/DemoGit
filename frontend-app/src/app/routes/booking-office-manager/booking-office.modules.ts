import { NgModule } from "@angular/core";
import { BookingRoutingModule } from "./booking-office-routing.modules";


const LIST_DECLARATION = []
const LIST_EXPORT = []
const LIST_IMPORT = [BookingRoutingModule]


@NgModule({
    imports: [...LIST_IMPORT],
    declarations: [],
    exports: []
})
export class BookingOfficeModule { }