import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { AddCarComponent } from "./add-car/add-car.component";
import { ListCarComponent } from "./list-car/list-car.component";
import { RouterModule } from "@angular/router";
import { LayoutDashboardComponent } from "src/app/themes/layout-dashboard/layout-dashboard.component";

const carRoutes: Routes = [
    {
        path: 'car',
        component: LayoutDashboardComponent,
        children: [
            {
                path: 'add-car',
                component: AddCarComponent
            },
            {
                path: 'list-car',
                component: ListCarComponent
            },
        ]
    },

];
const LIST_IMPORT = [RouterModule.forChild(carRoutes)]
const LIST_EXPORT = [RouterModule]
@NgModule({
    imports: [...LIST_IMPORT],
    exports: [...LIST_EXPORT]
})
export class CarRoutingModule { }
