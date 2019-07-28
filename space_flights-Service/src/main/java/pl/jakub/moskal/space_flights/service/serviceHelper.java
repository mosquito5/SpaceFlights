package pl.jakub.moskal.space_flights.service;

import pl.jakub.moskal.space_flights.model.Flight;
import pl.jakub.moskal.space_flights.model.FlightRepository;
import pl.jakub.moskal.space_flights.model.Tourist;
import pl.jakub.moskal.space_flights.model.TouristRepository;

import java.util.Optional;

public class serviceHelper {
    public static void addToRepo(long touristId, long flightId, TouristRepository touristRepository, FlightRepository flightRepository,
                           boolean isDelete) {

        Optional<Tourist> touristOptional = touristRepository.findById(touristId);
        Optional<Flight> flightOptional = flightRepository.findById(flightId);

        if(touristOptional.isPresent() && flightOptional.isPresent() &&
                flightOptional.get().getMaxSeats() > flightOptional.get().getSeats()) {

            Flight flight = flightRepository.findById(flightId).get();
            Tourist tourist = touristRepository.findById(touristId).get();

            if (isDelete) {
                flight.getTourists().remove(tourist);
                tourist.getFlights().remove(flight);

                flight.setSeats(flight.getSeats() - 1);
            }
            else {
                flight.getTourists().add(tourist);
                flight.setSeats(flight.getSeats() + 1);

                tourist.getFlights().add(flight);
            }

            flightRepository.save(flight);
            touristRepository.save(tourist);
        }
    }
}
