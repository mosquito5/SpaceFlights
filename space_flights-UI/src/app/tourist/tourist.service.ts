import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Flight} from '../flight/flight.model';
import {Tourist} from './tourist.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TouristService {

  constructor(private http: HttpClient) {
  }

  private TOURIST_API = 'http://localhost:8080/api/tourist';
  private ADD_TOURIST = this.TOURIST_API + '/addTourist';
  private GET_TOURISTS  = this.TOURIST_API + '/getTourists';
  private DELETE_TOURIST = this.TOURIST_API + '/deleteTourist';
  private DELETE_FLIGHT_FROM_TOURIST = this.TOURIST_API + '/delFlgtFromTour';
  private ADD_FLIGHT_TO_TOURIST = this.TOURIST_API + '/addTourToFlgt';
  private GET_FLIGHTS_BELONG_TO_TOURIST = this.TOURIST_API + '/getFlights';

  public getTourists() {
    return this.http.get<Tourist[]>(this.GET_TOURISTS);
  }

  public getFlightsBelongToTourists(touristId) {
    return this.http.get<Flight[]>(this.GET_FLIGHTS_BELONG_TO_TOURIST + '/' + touristId);
  }

  public deleteFlightFromTourist(tourist, flight) {
    return this.http.get(this.DELETE_FLIGHT_FROM_TOURIST + '/' + tourist.id + '/' + flight.id);
  }

  public addFlightToTourist(touristId, flightId) {
    return this.http.get(this.ADD_FLIGHT_TO_TOURIST + '/' + touristId + '/' + flightId);
  }

  public deleteTourist(tourist) {
    return this.http.get(this.DELETE_TOURIST + '/' + tourist.id);
  }

  public createTourist(tourist) {
    return this.http.post<Flight>(this.ADD_TOURIST, tourist);
  }


}
