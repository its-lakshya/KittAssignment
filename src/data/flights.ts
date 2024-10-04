interface FlightDetails {
  time: string;
  airportCode: string;
}

interface Flight {
  airline: string;
  imageSrc: string;
  departure: FlightDetails;
  arrival: FlightDetails;
  timeTaken: string;
  delay: string | null;
  price: string;
  stops: string;
}

interface FlightsArray {
  flight: Flight[];
}

import lufthansaLogo from "../assets/images/lufthanslogo.svg"
import EmiratesLogo from "../assets/images/emiratslogo.svg"

const flights: FlightsArray[] = [
  {
      flight: [
          {
              airline: "Emirates",
              imageSrc: lufthansaLogo,
              departure: {
                  time: "9:45 AM",
                  airportCode: "DXB",
              },
              arrival: {
                  time: "11:45 AM",
                  airportCode: "LHR",
              },
              timeTaken: "2h 10min",
              delay: null,
              price: "1,116.45",
              stops: "Non stop",
          },
          {
              airline: "Qatar Airways",
              imageSrc: EmiratesLogo,
              departure: {
                  time: "10:15 PM",
                  airportCode: "DOH",
              },
              arrival: {
                  time: "12:30 AM",
                  airportCode: "JFK",
              },
              timeTaken: "14h 15min",
              delay: "30 mins",
              price: "4,456.90",
              stops: "1 stop",
          },
      ],
  },
  {
      flight: [
          {
              airline: "British Airways",
              imageSrc: EmiratesLogo,
              departure: {
                  time: "7:00 AM",
                  airportCode: "LHR",
              },
              arrival: {
                  time: "10:00 AM",
                  airportCode: "YYZ",
              },
              timeTaken: "8h 0min",
              delay: null,
              price: "1,400.10",
              stops: "Non stop",
          },
          {
              airline: "Air France",
              imageSrc: lufthansaLogo,
              departure: {
                  time: "2:00 PM",
                  airportCode: "CDG",
              },
              arrival: {
                  time: "4:30 PM",
                  airportCode: "JFK",
              },
              timeTaken: "8h 30min",
              delay: "1 day",
              price: "3,206.30",
              stops: "1 stop",
          },
      ],
  },
  {
      flight: [
          {
              airline: "Turkish Airlines",
              imageSrc: EmiratesLogo,
              departure: {
                  time: "11:00 AM",
                  airportCode: "IST",
              },
              arrival: {
                  time: "6:00 PM",
                  airportCode: "ORD",
              },
              timeTaken: "13h 00min",
              delay: null,
              price: "3,346.10",
              stops: "1 stop",
          },
          {
              airline: "Delta Airlines",
              imageSrc: lufthansaLogo,
              departure: {
                  time: "3:30 PM",
                  airportCode: "ATL",
              },
              arrival: {
                  time: "6:00 PM",
                  airportCode: "LAX",
              },
              timeTaken: "5h 30min",
              delay: "2 hours",
              price: "2,456.90",
              stops: "Non stop",
          },
      ],
  },
  {
      flight: [
          {
              airline: "Singapore Airlines",
              imageSrc: lufthansaLogo,
              departure: {
                  time: "8:30 PM",
                  airportCode: "SIN",
              },
              arrival: {
                  time: "10:00 AM",
                  airportCode: "JFK",
              },
              timeTaken: "18h 30min",
              delay: "1 day",
              price: "2,342.70",
              stops: "1 stop",
          },
          {
              airline: "United Airlines",
              imageSrc: EmiratesLogo,
              departure: {
                  time: "12:15 PM",
                  airportCode: "ORD",
              },
              arrival: {
                  time: "2:30 PM",
                  airportCode: "SFO",
              },
              timeTaken: "4h 15min",
              delay: null,
              price: "1,234.60",
              stops: "Non stop",
          },
      ],
  },
  {
      flight: [
          {
              airline: "KLM",
              imageSrc: EmiratesLogo,
              departure: {
                  time: "10:45 AM",
                  airportCode: "AMS",
              },
              arrival: {
                  time: "1:30 PM",
                  airportCode: "JFK",
              },
              timeTaken: "8h 45min",
              delay: "15 mins",
              price: "1,456.90",
              stops: "1 stop",
          },
          {
              airline: "Swiss Air",
              imageSrc: lufthansaLogo,
              departure: {
                  time: "6:00 AM",
                  airportCode: "ZRH",
              },
              arrival: {
                  time: "9:00 AM",
                  airportCode: "YYZ",
              },
              timeTaken: "8h 0min",
              delay: null,
              price: "1,856.90",
              stops: "Non stop",
          },
      ],
  },
];

export default flights;
