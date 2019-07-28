import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { FlightService} from './flight.service';
import {Flight} from './flight.model';
import {Tourist} from '../tourist/tourist.model';
import {Input} from '@angular/core';
import {TouristService} from '../tourist/tourist.service';

@Component({
  templateUrl: './add-tourist-to-flight.html'
})
export class AddTouristToFlightComponent implements OnInit {

  flightId: string;
  tourists: Tourist[];

  constructor(private router: Router, private touristService: TouristService,
              private flightService: FlightService) {
    this.flightId = router.getCurrentNavigation().extras.state.id;

  }

  ngOnInit() {
    this.touristService.getTourists().subscribe(data => {
      this.tourists = data;
      // this.flightId = this.router.getCurrentNavigation().extras.state.id;
    });
  }

  addTouristToFlight(tourist: Tourist): void {
    this.flightService.addTouristToFlight(this.flightId, tourist.id).subscribe(data => {
      alert('Tourist added successfully.');
      // this.router.navigate(['/home]']);
    });
  }
}
