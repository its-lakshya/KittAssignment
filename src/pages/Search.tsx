import SearchCard from "@/components/SearchCard";
import Welcome from "@/components/Welcome";

const Search = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full px-[13rem] max-xl:px-[6rem] max-lg:px-[3rem] max-sm:px-[1rem]">
      <Welcome/>
      <SearchCard/>
    </div>
  );
};

export default Search;
