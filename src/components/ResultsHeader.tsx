import searchIconGray from "../assets/images/searchIconGrey.svg";
import crossIcon from "../assets/images/crossIcon.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store"; // Adjust the path to your store
import { journyState } from "../store/slices/journy.slice"; // Adjust the path to your types
import "./Styles.css";
import { useEffect, useState } from "react";

const ResultsHeader = () => {
  const journy: journyState = useSelector((state: RootState) => state.journy);
  const departure = new Date(journy.departure);
  const formattedDeparture = departure.toLocaleDateString("en-US", { month: "short", day: "2-digit" });
  const returning = new Date(journy.return);
  const formattedReturning = returning.toLocaleDateString("en-US", { month: "short", day: "2-digit" });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 6000)

    return () => clearTimeout(timer);
  })
  return (
    <div className="relative h-[106px] w-full px-[13rem] flex justify-between items-center border-b border-[#E6E8EB]">
      <div className="w-auto h-[50px] border border-[#E6E8EB] rounded-full flex items-center gap-4 px-2 pl-8">
        <div className="text-[#787B80] font-light flex gap-2 border-r border-[#E6E8EB] pr-4 ">
          <span className="text-[16px] font-medium">ADE</span>{" "}
          {journy.from}
        </div>
        <div className="text-[#787B80] font-light flex gap-2 border-r border-[#E6E8EB] pr-4 max-w-[200px]">
          <span className="text-[16px] font-medium">DLI</span>{" "}
          {journy.to}
        </div>
        <div className="text-[#787B80] font-light flex gap-2 border-r border-[#E6E8EB] pr-4 max-w-[200px]">
          <span className="text-[16px] font-medium">
            {formattedDeparture} - {formattedReturning}
          </span>
        </div>
        <img className="cursor-pointer" src={searchIconGray} alt="logo" />
      </div>
      <Link to="/">
        <img className="cursor-pointer" src={crossIcon} alt="logo" />
      </Link>
      {loading ?
      <div className='bg-[#E5EBEB] h-1 absolute bottom-0 left-0 w-full'>
        <div className="loading-bar"></div>
      </div>
      : null
      }
    </div>
  );
};

export default ResultsHeader;
