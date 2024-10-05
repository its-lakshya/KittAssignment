import { useEffect, useState } from "react";
import FlightCard from "./FlightCard";
import flights from "@/data/flights";
import RouteModal from "./RouteModal";
import "./Styles.css";

const FlightList: React.FC = () => {
  const [showRouteModal, setShowRouteModal] = useState(false);
  const [dissableBackground, setDissableBackground] = useState(false);
  useEffect(() => {
    if(showRouteModal){
      const timer = setTimeout(() => {
        setDissableBackground(true)
      }, 100)
      return () => clearTimeout(timer);
    }
    else setDissableBackground(false);

  }, [showRouteModal])

  return (
    <div className={`relative w-full max-w-[1057px] h-screen mt-10 flex flex-col gap-[20px]`}>
      <div className="text-lg font-light text-[#787B80] tracking-wider">
        Showing 136 of 300 results
      </div>
      {flights.map((flightGroup, index) => {
        return (
          <div key={index}>
            <FlightCard
              key={index}
              flight={flightGroup.flight}
              setShowRouteModal={setShowRouteModal}
            />
          </div>
        );
      })}
      <div className={`modal ${showRouteModal ? "slide-in" : "slide-out"} w-full`}>
        <RouteModal setShowRouteModal={setShowRouteModal} />
      </div>
      {dissableBackground ? 
        <div className='fixed left-0 top-0 bottom-0 h-full w-full bg-gray-600 opacity-10'></div>
        : null
      }
    </div>
  );
};

export default FlightList;
