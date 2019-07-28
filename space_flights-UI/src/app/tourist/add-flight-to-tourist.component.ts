import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';


import {TouristService} from '../tourist/tourist.service';
import {Flight} from '../flight/flight.model';
import {FlightService} from '../flight/flight.service';

@Component({
  templateUrl: './add-flight-to-tourist.html'
})
export class AddFlightToTouristComponent implements OnInit {

  touristId: string;
  flights: Flight[];

  constructor(private router: Router, private touristService: TouristService,
              private flightService: FlightService) {
    this.touristId = router.getCurrentNavigation().extras.state.id;

  }

  ngOnInit() {
    this.flightService.getFlights().subscribe(data => {
      this.flights = data;
    });
  }

  addFlightToTourist(flight: Flight): void {
    this.touristService.addFlightToTourist(this.touristId, flight.id).subscribe(data => {
      alert('Tourist added successfully.');
    });
    this.router.navigate(['']);
  }
}
