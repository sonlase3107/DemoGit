import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RoutesModule } from './routes/routes.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemesModule } from './themes/themes.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RoutesModule,
    BrowserAnimationsModule,
    ThemesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
