import { Card } from "./ui/card";
import leftArrowIcon from "../assets/images/leftArrowIcon.svg";
import clockIcon from "../assets/images/clockIcon.svg";
import lufthansaLogo from "../assets/images/lufthanslogo.svg";

interface RouteModalProps {
  setShowRouteModal: React.Dispatch<React.SetStateAction<boolean>>
}

const RouteModal: React.FC<RouteModalProps> = ({setShowRouteModal}) => {
  return (
    <Card className="fixed top-0 bottom-0 right-6 flex flex-col gap-[24px] self-center w-[46%] h-[95vh] p-7 max-w-[800px] max-xl:w-[500px] max-sm:w-full max-sm:left-2">
      <img className="size-7 rotate-180 cursor-pointer" src={leftArrowIcon} alt="logo" onClick={() => setShowRouteModal(false)}/>
      <div className="text-[20px] font-medium">Flight details</div>
      <hr />
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-1 w-[45%] max-sm:w-full">
            <div className="flex items-center text-xs gap-3">
              <div className="size-3 border-[1.2px] border-[#000C0B] rounded-full"></div>
              <div className="text-[#787B80]">Sat 28 Sept • 2:15</div>
            </div>
            <div className="h-[55px] text-[14px] font-medium pl-[17px] border-l border-[#001F1D] ml-[5.5px]">
              DXB • Dubai International Airport
            </div>
            <div className="flex items-center text-xs gap-3">
              <div className="size-3 border-[1.2px] border-[#000C0B] rounded-full"></div>
              <div className="text-[#787B80]">Sat 28 Sept • 2:15</div>
            </div>
            <div className="relativeh h-[140px] text-[14px] font-medium pl-[17px] border-l border-dashed border-[#001F1D] ml-[5.5px]">
              RUH • King Khalid International Airport
              <div className='relative top-12 left-9 flex gap-[9px] items-center text-[#787B80] text-[14px] font-light'>
                <img src={clockIcon} alt='icon'/>
                Layover 2h 25m
              </div>
            </div>
            <div className="flex items-center text-xs gap-3">
              <div className="size-3 border-[1.2px] border-[#000C0B] rounded-full"></div>
              <div className="text-[#787B80]">Sat 28 Sept • 2:15</div>
            </div>
            <div className="h-[55px] text-[14px] font-medium pl-[17px] border-l border-[#001F1D] ml-[5.5px]">
              RUH • King Khalid International Airport
            </div>
            <div className="flex items-center text-xs gap-3">
              <div className="size-3 border-[1.2px] border-[#000C0B] rounded-full"></div>
              <div className="text-[#787B80]">Sat 28 Sept • 2:15</div>
            </div>
            <div className="h-[55px] text-[14px] font-medium pl-[17px] ml-[5.5px]">
              CDG • Paris - Charles de Gualle Airport
            </div>
        </div>
        <div className='w-[35%] flex flex-col gap-52 max-sm:hidden'>
          <div className='flex items-start gap-4'>
            <img className='size-7 border p-[2px] rounded-sm' src={lufthansaLogo} alt='logo'/>
            <div className="flex flex-col text-[12px] text-[#484A4D] font-light tracking-tighter">
              <span className='text-[12px] text-[#484A4D] font-light tracking-tighter'>Saudi Arabian Airlines • SV553</span>
              <span className='text-[12px] text-[#484A4D] font-light tracking-tighter'>Economy • A330</span>
              <span className='text-[12px] text-[#484A4D] font-light tracking-tighter'>Flight time 3h 45m</span>
            </div>
          </div>
          <div className='flex items-start gap-4 '>
            <img className='size-7 border p-[2px] rounded-sm' src={lufthansaLogo} alt='logo'/>
            <div className="flex flex-col text-[12px] text-[#484A4D] font-light">
              <span className='text-[12px] text-[#484A4D] font-light tracking-tighter'>Saudi Arabian Airlines • SV553</span>
              <span className='text-[12px] text-[#484A4D] font-light tracking-tighter'>Economy • A330</span>
              <span className='text-[12px] text-[#484A4D] font-light tracking-tighter'>Flight time 3h 45m</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default RouteModal;
