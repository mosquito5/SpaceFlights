import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';


import {Tourist} from '../tourist/tourist.model';
import {Input} from '@angular/core';
import {TouristService} from '../tourist/tourist.service';
import {Flight} from '../flight/flight.model';
import {FlightService} from '../flight/flight.service';

@Component({
  templateUrl: './delete-flight-from-tourist.html'
})
export class DeleteFlightFromTouristComponent implements OnInit {

  touristId: string;
  flights: Flight[];

  constructor(private router: Router, private touristService: TouristService,
              private flightService: FlightService) {
    this.touristId = router.getCurrentNavigation().extras.state.id;

  }

  ngOnInit() {
    this.touristService.getFlightsBelongToTourists(this.touristId).subscribe(data => {
      this.flights = data;
      // this.flightId = this.router.getCurrentNavigation().extras.state.id;
    });
  }

  deleteFlightFormTourist(flight: Flight): void {
    this.touristService.deleteFlightFromTourist(this.touristId, flight.id).subscribe(data => {
      alert('Flight deleted successfully.');
    });
    this.router.navigate(['/home]']);
  }
}
