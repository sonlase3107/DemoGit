import { NgModule } from "@angular/core";
import { AddCarComponent } from "./add-car/add-car.component";
import { ListCarComponent } from "./list-car/list-car.component";
import { CarRoutingModule } from "./car-routing.modules";
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ThemesModule } from "src/app/themes/themes.module";
const LIST_DECLARATION = [AddCarComponent, ListCarComponent]
const LIST_IMPORT = [CarRoutingModule,MatIconModule,FormsModule,ReactiveFormsModule,ThemesModule]
const LIST_EXPORT = [CarRoutingModule]

@NgModule({
    declarations: [...LIST_DECLARATION],
    imports: [...LIST_IMPORT],
    exports: [...LIST_EXPORT]
})
export class CarModule { }