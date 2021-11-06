import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutDashboardComponent } from "src/app/themes/layout-dashboard/layout-dashboard.component";
import { AddTripComponent } from "./add-trip/add-trip.component";
import { ListTripComponent } from "./list-trip/list-trip.component";




const tripRoutes: Routes = [
    {
        path: 'trip',
        component: LayoutDashboardComponent,
        children: [
            {
                path: 'add-trip',
                component: AddTripComponent
            },
            {
                path: 'list-trip',
                component: ListTripComponent
            },
        ]
    },

];
const LIST_IMPORT = [RouterModule.forChild(tripRoutes)]
const LIST_EXPORT = [RouterModule]
@NgModule({
    imports: [...LIST_IMPORT],
    exports: [...LIST_EXPORT]
})
export class TripRoutingModule { }