import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutDashboardComponent } from './layout-dashboard/layout-dashboard.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { RoutesRoutingModule } from '../routes/routes-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog'; import { SearchBarComponent } from './search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { DateRangeComponent } from './date-range/date-range.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
@NgModule({
  declarations: [LayoutDashboardComponent, ConfirmDialogComponent, SearchBarComponent, DateRangeComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatToolbarModule,
    MatSidenavModule,
    MatExpansionModule,
    RoutesRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    MatDatepickerModule
  ],
  exports: [ConfirmDialogComponent, SearchBarComponent, DateRangeComponent]
})
export class ThemesModule { }
