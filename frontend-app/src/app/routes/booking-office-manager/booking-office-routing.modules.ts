import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutDashboardComponent } from "src/app/themes/layout-dashboard/layout-dashboard.component";
import { AddBookOfficeComponent } from "./add-book-office/add-book-office.component";
import { ListBookOfficeComponent } from "./list-book-office/list-book-office.component";


const bookOfficeRoutes: Routes = [
    {
        path: 'book-office',
        component: LayoutDashboardComponent,
        children: [
            {
                path: 'add-book-office',
                component: AddBookOfficeComponent
            },
            {
                path: 'list-book-office',
                component: ListBookOfficeComponent
            },
        ]
    },
];
const LIST_IMPORT = [RouterModule.forChild(bookOfficeRoutes)]
const LIST_EXPORT = [RouterModule]
@NgModule({
    imports: [...LIST_IMPORT],
    exports: [...LIST_EXPORT]
})
export class BookingRoutingModule { }