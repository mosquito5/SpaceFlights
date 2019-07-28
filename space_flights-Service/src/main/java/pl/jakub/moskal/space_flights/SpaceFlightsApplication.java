package pl.jakub.moskal.space_flights;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.UserDetailsServiceAutoConfiguration;

@SpringBootApplication(exclude = {UserDetailsServiceAutoConfiguration.class})
public class SpaceFlightsApplication {

    public static void main(String[] args) {
        SpringApplication.run(SpaceFlightsApplication.class, args);
    }

}
