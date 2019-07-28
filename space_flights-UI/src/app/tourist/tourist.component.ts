import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TouristService} from './tourist.service';
import {Tourist} from './tourist.model';
import {Flight} from '../flight/flight.model';

@Component({
  selector: 'app-tourist',
  templateUrl: './tourist.component.html',
  styleUrls: ['./tourist.component.css']
})
export class TouristComponent implements OnInit {

  tourists: Tourist[];

  constructor(private router: Router, private touristService: TouristService) { }

  ngOnInit() {
    this.touristService.getTourists().subscribe(data => {
      this.tourists = data;
    });
  }

  deleteTourist(tourist: Tourist): void {
    this.touristService.deleteTourist(tourist).subscribe(data => {
      this.tourists = this.tourists.filter(u => u !== tourist);
    });
    this.router.navigate(['']);
  }

  routeToAddFlightToTourist(tourist: Tourist) {
    this.router.navigate(['/AddFlightToTourist'], {state: tourist});
  }

  routeToDeleteFlightFromTourist(tourist: Tourist) {
    this.router.navigate(['/DeleteFlightFromTourist'], {state: tourist});
  }
}
