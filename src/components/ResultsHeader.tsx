import searchIconGray from "../assets/images/searchIconGrey.svg";
import crossIcon from "../assets/images/crossIcon.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store"; // Adjust the path to your store
import { journyState } from "../store/slices/journy.slice"; // Adjust the path to your types
import "./Styles.css";
import { useEffect, useState } from "react";
// import { format } from "path";

const ResultsHeader = () => {
  const journy: journyState = useSelector((state: RootState) => state.journy);

  const departureDate = journy.departure ? new Date(journy.departure) : null;
  const formattedDeparture = departureDate
    ? departureDate.toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
      })
    : null;

  const returningDate = journy.return ? new Date(journy.return) : null;
  const formattedReturning = returningDate
    ? returningDate.toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
      })
    : null;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 9000);

    return () => clearTimeout(timer);
  });

  
  return (
    <div className="relative h-[106px] max-sm:h-[6px] w-full px-[13rem] max-xl:px-[6rem] max-lg:px-[3rem] max-sm:px-[1rem] flex justify-center items-center border-b border-[#E6E8EB]">
      <div className="w-full max-w-[1057px] flex justify-between items-center">
        <div className="w-auto max-md:w-full max-sm:hidden h-[50px] border border-[#E6E8EB] rounded-full flex items-center justify-center gap-4 px-2 pl-8">
          <div className="text-[#787B80] font-light flex gap-2 border-r border-[#E6E8EB] pr-4 ">
            <span className="text-[16px] font-medium">ADE</span> {journy.from || "Mumbai"}
          </div>
          <div className="text-[#787B80] font-light flex gap-2 border-r border-[#E6E8EB] pr-4 max-w-[200px]">
            <span className="text-[16px] font-medium">DLI</span> {journy.to || "Delhi"}
          </div>
          <div className="text-[#787B80] font-light flex gap-2 border-r border-[#E6E8EB] pr-4 max-w-[200px]">
            <span className="text-[16px] font-medium">
              {formattedDeparture === "Invalid Date" ? "2 Oct" : formattedDeparture} - {formattedReturning === 'Invalid Date' ? "5 Oct" : formattedReturning}
            </span>
          </div>
          <img className="cursor-pointer" src={searchIconGray} alt="logo" />
        </div>
        <Link to="/" className="max-md:hidden">
          <img className="cursor-pointer" src={crossIcon} alt="logo" />
        </Link>
        {loading ? (
          <div className="bg-[#E5EBEB] h-1 absolute bottom-0 left-0 w-full">
            <div className="loading-bar"></div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ResultsHeader;
