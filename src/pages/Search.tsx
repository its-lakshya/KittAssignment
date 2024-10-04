import SearchCard from "@/components/SearchCard";
import Welcome from "@/components/Welcome";

const Search = () => {
  return (
    <div className="flex flex-col justify-center w-full px-[13rem]">
      <Welcome/>
      <SearchCard/>
    </div>
  );
};

export default Search;
