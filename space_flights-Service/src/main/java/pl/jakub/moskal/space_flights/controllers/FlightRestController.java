package pl.jakub.moskal.space_flights.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import pl.jakub.moskal.space_flights.RestURIConstants;
import pl.jakub.moskal.space_flights.model.Flight;
import pl.jakub.moskal.space_flights.service.FlightService;

import java.util.Collection;

@RestController
@RequestMapping(value = RestURIConstants.FLIGHT_API)
@CrossOrigin(origins = "http://localhost:4200")
public class FlightRestController {

    @Autowired
    FlightService flightService;

    @PostMapping(value = RestURIConstants.ADD_FLIGHT)
    public void addFlight(@RequestBody Flight flight) {

         flightService.create(flight);
    }

    @GetMapping(value = RestURIConstants.DELETE_FLIGHT)
    public void deleteFlightById(@PathVariable(value = "id") int id) {

         flightService.delete(id);
    }

    @GetMapping(value = RestURIConstants.GET_FLIGHTS, produces = MediaType.APPLICATION_JSON_VALUE)
    public Collection<?> getFlights() {
        return flightService.findAll();
    }


    @GetMapping(value = RestURIConstants.DELETE_TOURIST_FROM_FLIGHT)
    public void deleteTouristFromFlight(@PathVariable(value = "tourist_id") long touristId,
                                                     @PathVariable(value = "flight_id") long flightId) {

         flightService.deleteTourist(touristId, flightId);
    }

    @GetMapping(value = RestURIConstants.ADD_TOURIST_TO_FLIGHT)
    public void addTouristToFlight(@PathVariable(value = "tourist_id") long touristId,
                                                @PathVariable(value = "flight_id") long flightId ) {
         flightService.addTourist(touristId, flightId);
    }

    @GetMapping(value = RestURIConstants.GET_TOURISTS_BELONG_TO_FLIGHT)
    public void getTouristsBelongToFlight(@PathVariable(value = "flight_id") long flightId ) {
         flightService.findAllTouristsBelongToFlight(flightId);
    }

}
