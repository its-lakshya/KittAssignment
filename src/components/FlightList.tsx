import { useState } from "react";
import FlightCard from "./FlightCard";
import flights from "@/data/flights";
import RouteModal from "./RouteModal";

const FlightList: React.FC = () => {
  const [showRouteModal, setShowRouteModal] = useState(false);

  return (
    <div className="relative w-full max-w-[1057px] h-screen mt-10 flex flex-col gap-[20px]">
      <div className='text-lg font-light text-[#787B80] tracking-wider'>Showing 136 of 300 results</div>
      {flights.map((flightGroup, index) => {
        return (
          <div key={index}>
            <FlightCard key={index} flight={flightGroup.flight} setShowRouteModal={setShowRouteModal}/>
          </div>
        );
      })}
      {showRouteModal ? <RouteModal setShowRouteModal={setShowRouteModal}/> : null }
    </div>
  );
};

export default FlightList;
