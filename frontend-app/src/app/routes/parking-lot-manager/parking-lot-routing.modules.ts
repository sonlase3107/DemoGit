import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutDashboardComponent } from "src/app/themes/layout-dashboard/layout-dashboard.component";
import { AddParkingLotComponent } from "./add-parking-lot/add-parking-lot.component";
import { ListParkingLotComponent } from "./list-parking-lot/list-parking-lot.component";



const parkingLotRoutes: Routes = [
    {
        path: 'park-lot',
        component: LayoutDashboardComponent,
        children: [
            {
                path: 'add-park-lot',
                component: AddParkingLotComponent
            },
            {
                path: 'list-park-lot',
                component: ListParkingLotComponent
            },
        ]
    },

];
const LIST_IMPORT = [RouterModule.forChild(parkingLotRoutes)]
const LIST_EXPORT = [RouterModule]
@NgModule({
    imports: [...LIST_IMPORT],
    exports: [...LIST_EXPORT]
})
export class ParkLotRoutingModule { }