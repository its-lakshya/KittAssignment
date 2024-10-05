import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  // CardContent,
  // CardDescription,
  // CardFooter,
  // CardHeader,
  // CardTitle,
} from "@/components/ui/card";

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


const SearchCard = () => {
  const [departureDate, setDepartureDate] = React.useState<Date>();
  const [returnDate, setReturnDate] = React.useState<Date>();
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

  return (
    <Card className="w-full h-[252px] py-[28px] px-[24px] flex flex-col justify-between font-light 2xl:w-[1057px] max-2xl:h-auto max-2xl:gap-4"
    style={{boxShadow: "0px -6px 22.6px #FFFFFF, 0px 19px 19.4px rgba(0, 0, 0, 0.02), 0px 1px 11px 3px rgba(0, 0, 0, 0.06)"}}>
      <Button variant="secondary" className="w-[127px] text-[16px]">
        Flights
      </Button>
      <div className="flex gap-[24px] max-[864px]:flex-col">
        <div className="flex gap-[12px] max-sm:flex-col max-sm:w-full max-sm:items-center items-center max-2xl:w-[60%] max-[864px]:w-full">
          <Select  onValueChange={handleFrom} >
            <SelectTrigger className="w-[267px] h-[60px] max-sm:w-full max-2xl:w-full">
              <SelectValue placeholder="Where from?" />
            </SelectTrigger>
            <SelectContent>
              {airports.map((data, index) => {
                return (

                  <SelectGroup key={index}>
                    <SelectLabel>{data.country}</SelectLabel>
                    <SelectItem value={data.city}>
                      {data.city}
                    </SelectItem>
                  </SelectGroup>
                );
              })}
            </SelectContent>
          </Select>
          <img className='max-sm:size-10' src={swapIcon} alt="logo" />
          <Select onValueChange={handleTo}>
            <SelectTrigger className="w-[267px] h-[60px] max-sm:w-full max-2xl:w-full">
              <SelectValue placeholder="Where to?"/>
            </SelectTrigger>
            <SelectContent>
              {airports.map((data, index) => {
                return (
                  <SelectGroup key={index}>
                    <SelectLabel>{data.country}</SelectLabel>
                    <SelectItem value={data.city}>
                      {data.city}
                    </SelectItem>
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
                  <span className='text-[16px] text-[#484A4D] font-light'>Departure</span>
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
                {returnDate ? format(returnDate, "PPP") : <span className='text-[16px] text-[#484A4D] font-light'>Return</span>}
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
          <Button className="flex gap-3 w-[249px] max-sm:w-[180px] h-[48px] text-[16px] bg-[#003E39] font-light" onClick={() => handleSubmit()}>
            <img src={searchIcon} alt="logo" />
            Search flights
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default SearchCard;
