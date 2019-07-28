package pl.jakub.moskal.space_flights.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Set;

@Entity
@Table(name = "flight")
@Getter
@Setter
public class Flight {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(unique = true)
    private long id;

    @Column(name = "departure_time", nullable = false)
    private String departureTime;

    @Column(name = "arrival_time", nullable = false)
    private String arrivalTime;

    @Column(nullable = false)
    int seats;

    @Column(nullable = false)
    int maxSeats;

    @ManyToMany(mappedBy = "flights")
    @JsonIgnore
    private Set<Tourist> tourists;

    @Column(nullable = false)
    private BigDecimal ticketPrice;

    @Override
    public String toString() {
        return "Flight{" +
                "id=" + id +
                ", departureTime='" + departureTime + '\'' +
                ", arrivalTime='" + arrivalTime + '\'' +
                ", seats=" + seats +
                ", tourists=" + tourists +
                ", ticketPrice=" + ticketPrice +
                '}';
    }
}
