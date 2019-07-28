package pl.jakub.moskal.space_flights.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import pl.jakub.moskal.space_flights.model.Flight;
import pl.jakub.moskal.space_flights.model.FlightRepository;
import pl.jakub.moskal.space_flights.model.TouristRepository;

import java.util.List;
import java.util.Set;


@Service
public class FlightServiceImpl implements FlightService {

    @Autowired
    FlightRepository flightRepository;

    @Autowired
    TouristRepository touristRepository;

    @Override
    public void create(Flight flight) {
        flightRepository.save(flight);
    }

    @Override
    public void delete(long id) {
        if (flightRepository.findById(id).isPresent()) {
            flightRepository.deleteById(id);
        }
    }

    @Override
    public List<?> findAll() {
        return flightRepository.findAll();
    }

    @Override
    public Set<?> findAllTouristsBelongToFlight(long id) {
        return flightRepository.findById(id).get().getTourists();
    }

    @Override
    public ResponseEntity<?> findById(long id) {
        return null;
    }

    @Override
    public ResponseEntity<?> update(Flight flight) {
        return null;
    }

    @Override
    public void deleteTourist(long touristId, long flightId) {
        serviceHelper.addToRepo(touristId, flightId, touristRepository, flightRepository, true);
    }

    @Override
    public void addTourist(long touristId, long flightId) {
        serviceHelper.addToRepo(touristId, flightId, touristRepository, flightRepository, false);
    }
}

