package pl.jakub.moskal.space_flights.service;

import org.springframework.http.ResponseEntity;
import pl.jakub.moskal.space_flights.model.Flight;

import java.util.List;
import java.util.Set;

public interface FlightService {

    public void create(Flight flight);

    public void delete(long id);

    public List<?> findAll();

    public Set<?> findAllTouristsBelongToFlight(long id);

    public ResponseEntity<?> findById(long id);

    public ResponseEntity<?> update(Flight flight);

    public void deleteTourist(long touristId, long flightId);

    public void addTourist(long touristId, long flightId);


}
