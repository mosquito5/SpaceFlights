package pl.jakub.moskal.space_flights.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import pl.jakub.moskal.space_flights.model.FlightRepository;
import pl.jakub.moskal.space_flights.model.Tourist;
import pl.jakub.moskal.space_flights.model.TouristRepository;

import java.util.List;
import java.util.Set;

@Service
public class TouristServiceImpl implements TouristService {
    @Autowired
    TouristRepository touristRepository;

    @Autowired
    FlightRepository flightRepository;

    @Override
    public void create(Tourist tourist) {
        touristRepository.save(tourist);
    }

    @Override
    public void delete(long id) {
        if(touristRepository.findById(id).isPresent()) {
            touristRepository.deleteById(id);
        }
    }

    @Override
    public List<?> findAll() {
        return touristRepository.findAll();
    }

    @Override
    public Set<?> findAllFlightsBelongToTourists(long id) {
        return touristRepository.findById(id).get().getFlights();
    }

    @Override
    public ResponseEntity<?> findById(long id) {
        return null;
    }

    @Override
    public ResponseEntity<?> update(Tourist tourist) {
        return null;
    }

    @Override
    public void deleteFlight(long touristId, long flightId) {
        serviceHelper.addToRepo(touristId, flightId, touristRepository, flightRepository, true);
        }


    @Override
    public void addFlight(long touristId, long flightId) {
        serviceHelper.addToRepo(touristId, flightId, touristRepository, flightRepository, false);
    }
}

