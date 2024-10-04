import FlightList from "@/components/FlightList"
import Loader from "@/components/Loader"
import ResultsHeader from "@/components/ResultsHeader"
import { useEffect, useState } from "react";

const SearchResults = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6200)
    return () => clearTimeout(timer)
  }, [])
  return (
    <div className='w-full'>
        <ResultsHeader/>
        <div className='w-full h-screen px-[13rem]'>
          {isLoading 
          ? <Loader/>
          : <FlightList/>}
        </div>
    </div>
  )
}

export default SearchResults