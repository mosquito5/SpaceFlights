import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { FlightComponent } from './flight/flight.component';
import {AddFlightComponent} from './flight/add-flight.component';
import {AppRoutingModule} from './app.routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { TouristComponent } from './tourist/tourist.component';
import {AddTouristComponent} from './tourist/add-tourist.component';
import {AddTouristToFlightComponent} from './flight/add-tourist-to-flight.component';
import {AddFlightToTouristComponent} from './tourist/add-flight-to-tourist.component';
import {DeleteFlightFromTouristComponent} from './tourist/delete-flight-from-tourist.component';
import {DeleteTouristFromFlightComponent} from './flight/delete-tourist-from-flight.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightComponent,
    AddFlightComponent,
    TouristComponent,
    AddTouristComponent,
    AddTouristToFlightComponent,
    DeleteTouristFromFlightComponent,
    AddFlightToTouristComponent,
    DeleteFlightFromTouristComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
