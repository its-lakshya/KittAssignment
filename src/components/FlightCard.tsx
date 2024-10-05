import { Button } from "./ui/button";
import { Card } from "./ui/card";

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

interface FlightCardProps {
  flight: Flight[];
  setShowRouteModal: React.Dispatch<React.SetStateAction<boolean>>
}

const FlightCard: React.FC<FlightCardProps> = ({ flight, setShowRouteModal }) => {

  const handleSelect = () => {
    setShowRouteModal(true);
  }

  return (
    <Card onClick={() => handleSelect()} className="w-full h-[184px] max-lg:h-auto flex box-border cursor-pointer hover:bg-[#F5F7FA] shadow-none max-sm:flex-col">
      <div className="flex flex-col p-8 w-full gap-8 justify-center">
        {flight.map((data, index) => {
          return (
              <div key={index} className="flex items-center justify-between max-lg:flex-col max-lg:w-64 max-lg:gap-4">
                <div className="flex items-center gap-5 w-64">
                  <img src={data.imageSrc} alt="logo" />
                  <div className="flex flex-col font-light">
                    <div className="text-[#787B80] text-[13px]">
                      {data.airline}
                    </div>
                    <div className="text-lg">
                      <span>{data.arrival.time}</span>-
                      <span>{data.departure.time}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-12 w-64">
                  <div className="flex flex-col font-light items-start w-1/2">
                    <div className="text-[#787B80] text-[13px]">
                      {data.departure.airportCode} - {" "}
                      {data.arrival.airportCode}
                    </div>
                    <div className="text-lg">
                      <span>{data.timeTaken}</span>
                    </div>
                  </div>
                  <div className="flex flex-col font-light w-1/2">
                    <div className="text-[#787B80] text-[13px]">
                      &nbsp;
                    </div>
                    <div className="text-lg">
                      <span>{data.stops}</span>
                    </div>
                  </div>
                </div>
              </div>
          );
        })}
      </div>
      <div className='w-[25%] max-lg:w-64 flex flex-col justify-end p-4 box-border font-light border-l max-sm:border-t max-sm:w-full'>
        <div className='flex flex-col gap-3'>
          <div className='flex flex-col text-sm text-[#787B80]'>
            from
            <div className='text-xl'>AED {flight[0].price}</div>
          </div>
          <Button className='text-[16px] font-light bg-[#003E39] cursor-pointer'>Select</Button>
        </div>
      </div>
    </Card>
  );
};

export default FlightCard;
