import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FlightComponent} from './flight/flight.component';
import {AddFlightComponent} from './flight/add-flight.component';
import {TouristComponent} from './tourist/tourist.component';
import {AddTouristComponent} from './tourist/add-tourist.component';
import {AddTouristToFlightComponent} from './flight/add-tourist-to-flight.component';
import {AppComponent} from './app.component';
import {AddFlightToTouristComponent} from './tourist/add-flight-to-tourist.component';
import {DeleteTouristFromFlightComponent} from './flight/delete-tourist-from-flight.component';
import {DeleteFlightFromTouristComponent} from './tourist/delete-flight-from-tourist.component';



const routes: Routes = [
  { path: 'flights', component: FlightComponent },
  { path: 'addFlight', component: AddFlightComponent },
  { path: 'tourists', component: TouristComponent },
  { path: 'addTourist', component: AddTouristComponent },
  { path: 'AddTouristToFlight', component: AddTouristToFlightComponent },
  { path: 'AddFlightToTourist', component: AddFlightToTouristComponent },
  { path: 'DeleteTouristFromFlight', component: DeleteTouristFromFlightComponent},
  { path: 'DeleteFlightFromTourist', component: DeleteFlightFromTouristComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
