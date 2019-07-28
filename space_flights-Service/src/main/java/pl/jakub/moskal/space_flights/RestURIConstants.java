package pl.jakub.moskal.space_flights;

public class RestURIConstants {

    /**
     * Filght URI Constans
     */
    public static final String FLIGHT_API ="/api/flight";
    public static final String ADD_FLIGHT = "/addFlight";
    public static final String DELETE_FLIGHT = "/deleteFlight/{id}";
    public static final String GET_FLIGHTS = "/getFlights";
    public static final String DELETE_TOURIST_FROM_FLIGHT = "/delTouFromFlgt/{tourist_id}/{flight_id}";
    public static final String ADD_TOURIST_TO_FLIGHT = "/addTourToFlgt/{tourist_id}/{flight_id}";
    public static final String GET_TOURISTS_BELONG_TO_FLIGHT = "/getTourists/{flight_id}";

    /**
     * Tourist URI Constans
     */
    public static final String TOURIST_API ="/api/tourist";
    public static final String ADD_TOURIST ="/addTourist";
    public static final String DELETE_TOURIST ="/deleteTourist/{id}";
    public static final String GET_TOURISTS ="/getTourists";
    public static final String GET_FLIGHTS_BELONG_TO_TOURIST = "/getFlights/{                           id}";
    public static final String DELETE_FLIGHT_FROM_TOURIST = "/delFlgtFromTour/{tourist_id}/{flight_id}";
    public static final String ADD_FLIGHT_TO_TOURIST = "/addTourToFlgt/{tourist_id}/{flight_id}";


}
