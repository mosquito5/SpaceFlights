import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FlightService} from './flight.service';
import {Flight} from './flight.model';

@Component({
  templateUrl: './add-flight.component.html'
})
export class AddFlightComponent {

  flight: Flight = new Flight();

  constructor(private router: Router, private flightService: FlightService) {

  }

  createFlight(): void {
    this.flightService.createFlight(this.flight)
      .subscribe( data => {
        alert('Flight created successfully.');
      });
    this.router.navigate(['']);
  }

}
