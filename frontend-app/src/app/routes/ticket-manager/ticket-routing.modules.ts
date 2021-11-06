import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutDashboardComponent } from "src/app/themes/layout-dashboard/layout-dashboard.component";
import { AddTicketComponent } from "./add-ticket/add-ticket.component";
import { ListTicketComponent } from "./list-ticket/list-ticket.component";



const ticketRoutes: Routes = [
    {
        path: 'ticket',
        component: LayoutDashboardComponent,
        children: [
            {
                path: 'add-ticket',
                component: AddTicketComponent
            },
            {
                path: 'list-ticket',
                component: ListTicketComponent
            },
        ]
    },

];
const LIST_IMPORT = [RouterModule.forChild(ticketRoutes)]
const LIST_EXPORT = [RouterModule]
@NgModule({
    imports: [...LIST_IMPORT],
    exports: [...LIST_EXPORT]
})
export class TicketRoutingModule { }