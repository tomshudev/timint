import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { TimelineComponent } from './timeline/timeline.component';
import { AppRoutingModule } from './/app-routing.module';
import { SearchComponent } from './search/search.component';
import {SelectModule} from 'ng-select-bypass';
import { ControlComponent } from './control/control.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TracksComponent } from './tracks/tracks.component';

import { TracksService } from './_services/tracks.service';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    TimelineComponent,
    ControlComponent,
    TooltipComponent,
    SearchComponent,
    TracksComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    SelectModule
  ],
  providers: [
    CookieService,
    TracksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
