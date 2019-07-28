import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Flight} from './flight.model';
import {FlightService} from './flight.service';
import {Tourist} from '../tourist/tourist.model';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

  flights: Flight[];

  constructor(private router: Router, private flightService: FlightService) { }

  ngOnInit() {
    this.flightService.getFlights().subscribe(data => {
      this.flights = data;
    });
  }

  deleteFlight(flight: Flight): void {
    this.flightService.deleteFlight(flight).subscribe(data => {
      this.flights = this.flights.filter(u => u !== flight);
    });
  }

  routeToAddTouristToFlight(flight: Flight) {
    this.router.navigate(['/AddTouristToFlight'], {state: flight});
  }

  routeToDeleteTouristFromFlight(flight: Flight) {
    this.router.navigate(['/DeleteTouristFromFlight'], {state: flight});
  }



  deleteTouristFormFlight(flight: Flight, tourist: Tourist): void {
      this.flightService.deleteTouristFromFlight(flight, tourist).subscribe(data => {
        this.flights = this.flights.filter(u => u !== flight);
      });
    }
}

