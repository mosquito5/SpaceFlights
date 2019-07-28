package pl.jakub.moskal.space_flights.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;
import pl.jakub.moskal.space_flights.enums.Gender;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "tourist")
@Getter
@Setter
public class Tourist {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(unique = true)
    private long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String surname;

    private Gender gender;

    private String country;

    private String notes;

    @Column(nullable = false)
    private String dateOfBirth;

    @JsonIgnore
    @ManyToMany(cascade = {CascadeType.ALL})
    @JoinTable(
            name = "tourist_to_flight",
            joinColumns = {@JoinColumn(name = "tourist_id")},
            inverseJoinColumns = {@JoinColumn(name = "flight_id")}

    )
    private Set<Flight> flights;


    @Override
    public String toString() {
        return "Tourist{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", surname='" + surname + '\'' +
                ", gender=" + gender +
                ", country='" + country + '\'' +
                ", notes='" + notes + '\'' +
                ", dateOfBirth='" + dateOfBirth + '\'' +
                ", flights=" + flights +
                '}';
    }
}
