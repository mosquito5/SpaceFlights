package pl.jakub.moskal.space_flights.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import pl.jakub.moskal.space_flights.RestURIConstants;
import pl.jakub.moskal.space_flights.model.Tourist;
import pl.jakub.moskal.space_flights.service.TouristService;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping(value = RestURIConstants.TOURIST_API)
@CrossOrigin(origins = "http://localhost:4200")
public class TouristRestController {

    @Autowired
    TouristService touristService;

    @PostMapping(value = RestURIConstants.ADD_TOURIST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public void addTourist(@RequestBody Tourist tourist) {
         touristService.create(tourist);
    }

    @GetMapping(value = RestURIConstants.DELETE_TOURIST)
    public void deleteTouristById(@PathVariable(value = "id") long id) {
         touristService.delete(id);
    }

    @GetMapping(value = RestURIConstants.GET_TOURISTS, produces = MediaType.APPLICATION_JSON_VALUE)
    public List<?> getTourists() {
        return touristService.findAll();
    }

    @GetMapping(value = RestURIConstants.GET_FLIGHTS_BELONG_TO_TOURIST)
    public Set<?> getFlights(@PathVariable(value = "id") long id) {
        return touristService.findAllFlightsBelongToTourists(id);
    }

    @GetMapping(value = RestURIConstants.DELETE_FLIGHT_FROM_TOURIST)
    public void deleteFlightFromTourist(@PathVariable(value = "tourist_id") long touristId,
                                                     @PathVariable(value = "flight_id") long flightId) {
         touristService.deleteFlight(touristId, flightId);

    }

    @GetMapping(value = RestURIConstants.ADD_FLIGHT_TO_TOURIST)
    public void addFlightToTourist(@PathVariable(value = "tourist_id") long touristId,
                                                @PathVariable(value = "flight_id") long flightId) {
         touristService.addFlight(touristId, flightId);
    }
}
