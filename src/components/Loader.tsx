import LoaderModal from "./LoaderModal";
import { Card } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

const Loader = () => {
  return (
    <div className="relative w-full h-screen flex flex-col items-center mt-20 gap-[20px] max-w-[1057px]">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => {
        return (
          <Card key={index} className="w-full h-[184px] max-w-[1057px] flex box-border cursor-pointer hover:bg-[#F5F7FA] shadow-none">
            <div className="flex flex-col p-8 w-full gap-8 justify-center">
              {[0, 1].map((index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3  w-64">
                      <Skeleton className="h-11 w-11" />
                      <div className="flex flex-col font-light gap-3">
                        <Skeleton className="text-[#787B80] text-[13px] h-3 w-20">
                          {" "}
                        </Skeleton>
                        <Skeleton className="text-lg h-4 w-40">{" "} </Skeleton>
                      </div>
                    </div>
                    <div className="flex items-center gap-5  w-64">
                      <div className="flex flex-col font-light items-start w-1/2 gap-3">
                        <Skeleton className="text-[#787B80] text-[13px] h-3 w-20">
                          {" "}
                        </Skeleton>
                        <Skeleton className="text-lg h-4 w-20">{" "}</Skeleton>
                      </div>
                      <div className="flex flex-col font-light w-1/2 gap-3">
                        <div className='h-3'>{" "}</div>
                        <Skeleton className="text-lg h-4 w-20"> </Skeleton>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="w-[25%] flex flex-col justify-end p-4"></div>
          </Card>
        );
      })}

      <LoaderModal />
    </div>
  );
};

export default Loader;
