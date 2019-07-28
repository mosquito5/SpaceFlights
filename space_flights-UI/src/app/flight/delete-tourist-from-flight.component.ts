import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { FlightService} from './flight.service';
import {Flight} from './flight.model';
import {Tourist} from '../tourist/tourist.model';
import {Input} from '@angular/core';
import {TouristService} from '../tourist/tourist.service';

@Component({
  templateUrl: './delete-tourist-from-flight.html'
})
export class DeleteTouristFromFlightComponent implements OnInit {

  flightId: string;
  tourists: Tourist[];

  constructor(private router: Router, private touristService: TouristService,
              private flightService: FlightService) {
    this.flightId = router.getCurrentNavigation().extras.state.id;

  }

  ngOnInit() {
    this.flightService.getTouristsBelongToFlights(this.flightId).subscribe(data => {
      this.tourists = data;
      // this.flightId = this.router.getCurrentNavigation().extras.state.id;
    });
  }

  deleteTouristFormFlight(tourist: Tourist): void {
    this.flightService.deleteTouristFromFlight(this.flightId, tourist.id).subscribe(data => {
      alert('Tourist deleted successfully.');
    });
    this.router.navigate(['']);
  }
}
