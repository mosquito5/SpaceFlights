import {Component} from '@angular/core';
import {Tourist} from './tourist.model';
import {Router} from '@angular/router';
import {TouristService} from './tourist.service';


@Component({
  templateUrl: './add-tourist.component.html'
})
export class AddTouristComponent {

  tourist: Tourist = new Tourist();

  constructor(private router: Router, private touristService: TouristService) {

  }

  createTourist(): void {
    this.touristService.createTourist(this.tourist)
      .subscribe( data => {
        alert('Tourist created successfully.');
      });
    this.router.navigate(['']);
  }

}
