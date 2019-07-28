import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Flight} from './flight.model';
import {Tourist} from '../tourist/tourist.model';




const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private http: HttpClient) {}

  private FLIGHT_API = 'http://localhost:8080/api/flight';
  private ADD_FLIGHT = this.FLIGHT_API + '/addFlight';
  private GET_FLIGHTS = this.FLIGHT_API + '/getFlights';
  private DELETE_FLIGHT = this.FLIGHT_API + '/deleteFlight';
  private DELETE_TOURIST_FROM_FLIGHT = this.FLIGHT_API  + '/delTouFromFlgt';
  private ADD_TOURIST_TO_FLIGHT = this.FLIGHT_API + '/addTourToFlgt';
  private GET_FLIGHTS_BELONG_TO_TOURIST = this.FLIGHT_API + '/getTourists';

  public getFlights() {
    return this.http.get<Flight[]>(this.GET_FLIGHTS);
  }

  public getTouristsBelongToFlights(flightId) {
    return this.http.get<Tourist[]>(this.GET_FLIGHTS_BELONG_TO_TOURIST + '/' + flightId);
  }

  public deleteFlight(flight) {
    return this.http.get(this.DELETE_FLIGHT + '/' + flight.id);
  }

  public deleteTouristFromFlight(flightId, touristId) {
    return this.http.get(this.DELETE_TOURIST_FROM_FLIGHT + '/' + touristId + '/' + flightId);
  }

  public addTouristToFlight(flightId, touristId) {
    console.log(flightId, touristId)
    return this.http.get(this.ADD_TOURIST_TO_FLIGHT + '/' + touristId + '/' + flightId);
  }

  public createFlight(flight) {
    return this.http.post<Flight>(this.ADD_FLIGHT, flight);
  }

}
