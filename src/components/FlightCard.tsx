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
    <Card className="w-full h-[184px] flex box-border cursor-pointer hover:bg-[#F5F7FA] shadow-none">
      <div className="flex flex-col p-8 w-full gap-8 justify-center">
        {flight.map((data, index) => {
          return (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-5 w-1/3">
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
                <div className="flex items-center gap-12 w-1/3">
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
      <div className='w-[25%] flex flex-col justify-end p-4 box-border font-light  border-l'>
        <div className='flex flex-col gap-3'>
          <div className='flex flex-col text-sm text-[#787B80]'>
            from
            <div className='text-xl'>AED {flight[0].price}</div>
          </div>
          <Button className='text-[16px] font-light bg-[#003E39] cursor-pointer' onClick={() => handleSelect()}>Select</Button>
        </div>
      </div>
    </Card>
  );
};

export default FlightCard;
