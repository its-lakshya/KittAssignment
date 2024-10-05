import { Button } from "./ui/button";
import { Card } from "./ui/card";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import airports from "@/data/airports";
import swapIcon from "../assets/images/swapIcon.svg";
import searchIcon from "../assets/images/searchIcon.svg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setJournyRedux } from "@/store/slices/journy.slice";
import React, { useEffect, useRef, useState } from "react";

interface SearchModalProps {
  setShowSearchModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchModal: React.FC<SearchModalProps> = ({ setShowSearchModal }) => {

  const [departureDate, setDepartureDate] = React.useState<Date>();
  const [returnDate, setReturnDate] = React.useState<Date>();
  const searchModalRef = useRef<HTMLDivElement | null>(null);

  const dispatch = useDispatch();
  const [journy, setJourny] = useState({
    from: "",
    to: "",
    departure: "",
    return: "",
  });

  const handleFrom = (selectedCity: string) => {
    setJourny((prev) => ({
      ...prev,
      from: selectedCity,
    }));
  };

  const handleTo = (selectedCity: string) => {
    setJourny((prev) => ({
      ...prev,
      to: selectedCity,
    }));
  };

  useEffect(() => {
    setJourny((prev) => ({
      ...prev,
      departure: `${departureDate}`,
      return: `${returnDate}`,
    }));
  }, [departureDate, returnDate])


  const handleSubmit = () => {
    dispatch(setJournyRedux(journy));
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (searchModalRef.current && !searchModalRef.current.contains(event.target as Node)) {
      setShowSearchModal(false);
    }
  };

  useEffect(() => {
    // Add event listener when the modal is open
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={searchModalRef} className="border-b flex justify-center items-center gap-[24px] self-center p-7 w-full h-[235px] max-lg:h-auto max-sm:w-full max-sm:left-2 max-xl:px-[6rem] max-lg:px-[3rem] max-sm:px-[1rem]">
      <Card
        className="border-none shadow-none w-full h-auto py-[28px] px-[24px] flex flex-col justify-between font-light max-w-[1057px] 2xl:w-[1057px] max-2xl:h-auto max-2xl:gap-4"
      >
        <div className="flex gap-[24px] max-lg:flex-col 2xl:gap[24px] max-lg:gap-[12px]">
          <div className="flex gap-[12px] max-sm:flex-col max-sm:w-full max-sm:items-center items-center max-2xl:w-[60%] max-[864px]:w-full">
            <Select onValueChange={handleFrom}>
              <SelectTrigger className="w-[267px] h-[60px] max-sm:w-full max-2xl:w-full">
                <SelectValue placeholder="Where from?" />
              </SelectTrigger>
              <SelectContent>
                {airports.map((data, index) => {
                  return (
                    <SelectGroup key={index}>
                      <SelectLabel>{data.country}</SelectLabel>
                      <SelectItem value={data.city}>{data.city}</SelectItem>
                    </SelectGroup>
                  );
                })}
              </SelectContent>
            </Select>
            <img className="max-sm:size-10" src={swapIcon} alt="logo" />
            <Select onValueChange={handleTo}>
              <SelectTrigger className="w-[267px] h-[60px] max-sm:w-full max-2xl:w-full">
                <SelectValue placeholder="Where to?" />
              </SelectTrigger>
              <SelectContent>
                {airports.map((data, index) => {
                  return (
                    <SelectGroup key={index}>
                      <SelectLabel>{data.country}</SelectLabel>
                      <SelectItem value={data.city}>{data.city}</SelectItem>
                    </SelectGroup>
                  );
                })}
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-[12px] max-sm:flex-col max-2xl:w-[40%] max-[864px]:w-full">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[177px] h-[60px] justify-start text-left font-normal max-sm:w-full max-2xl:w-full",
                    !departureDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {departureDate ? (
                    format(departureDate, "PPP")
                  ) : (
                    <span className="text-[16px] text-[#484A4D] font-light">
                      Departure
                    </span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={departureDate}
                  onSelect={setDepartureDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[177px] h-[60px] justify-start text-left font-normal max-sm:w-full max-2xl:w-full",
                    !returnDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {returnDate ? (
                    format(returnDate, "PPP")
                  ) : (
                    <span className="text-[16px] text-[#484A4D] font-light">
                      Return
                    </span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={returnDate}
                  onSelect={setReturnDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="flex justify-end">
          <Link to="/results">
            <Button
              className="flex gap-3 w-[249px] max-sm:w-[180px] h-[48px] text-[16px] bg-[#003E39] font-light"
              onClick={() => handleSubmit()}
            >
              <img src={searchIcon} alt="logo" />
              Search flights
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default SearchModal;
