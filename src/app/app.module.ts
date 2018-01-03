import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { TimelineComponent } from './timeline/timeline.component';
import { AppRoutingModule } from './/app-routing.module';
import { SearchComponent } from './search/search.component';
import {SelectModule} from 'ng-select';
import { ControlComponent } from './control/control.component';
import { TooltipComponent } from './tooltip/tooltip.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    TimelineComponent,
    ControlComponent,
    TooltipComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    SelectModule
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
