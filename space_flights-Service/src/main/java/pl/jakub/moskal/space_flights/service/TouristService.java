package pl.jakub.moskal.space_flights.service;

import org.springframework.http.ResponseEntity;
import pl.jakub.moskal.space_flights.model.Tourist;

import java.util.List;
import java.util.Set;

public interface TouristService {
    public void create(Tourist tourist);

    public void delete(long id);

    public List<?> findAll();

    public ResponseEntity<?> findById(long id);

    public ResponseEntity<?> update(Tourist tourist);

    public void deleteFlight(long touristId, long flightId);

    public void addFlight(long touristId, long flightId);

    public Set<?> findAllFlightsBelongToTourists(long touristId);

    }

