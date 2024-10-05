import FlightList from "@/components/FlightList"
import Loader from "@/components/Loader"
import ResultsHeader from "@/components/ResultsHeader"
import { useEffect, useState } from "react";

const SearchResults = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 9200)
    return () => clearTimeout(timer)
  }, [])
  return (
    <div className='w-full h-auto flex flex-col items-center'>
        <ResultsHeader/>
        <div className='w-full h-auto px-[13rem] max-xl:px-[6rem] max-lg:px-[3rem] max-sm:px-[1rem] flex justify-center'>
          {isLoading 
          ? <Loader/>
          : <FlightList/>}
        </div>
    </div>
  )
}

export default SearchResults