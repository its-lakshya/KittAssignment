import { Card } from "./ui/card";
import planeAnimation from "../assets/images/planeAnimation.gif";
import spinnerAnimation from "../assets/images/spinnerAnimation.gif";
import { useEffect, useState } from "react";
import tickIcona from "../assets/images/tickIcon.svg"

const LoaderModal = () => {
  const [spin1, setSpin1] = useState(spinnerAnimation);
  const [spin2, setSpin2] = useState(spinnerAnimation);
  const [spin3, setSpin3] = useState(spinnerAnimation);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setSpin1(tickIcona);
    }, 2000);

    const timer2 = setTimeout(() => {
      setSpin2(tickIcona);
    }, 4000);

    const timer3 = setTimeout(() => {
      setSpin3(tickIcona);
    }, 6000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="w-full h-full absolute flex justify-center items-start mt-6">
      <Card className="w-[323px] h-[300px] flex flex-col overflow-hidden" style={{boxShadow: "-1px 0px 27.5px 8px rgba(75, 75, 75, 0.05)"}}>
        <div className="h-full flex justify-center items-center bg-[#FCFDFF]">
          <img src={planeAnimation} alt="logo" />
        </div>
        <div className="flex flex-col h-full py-4 justify-between text-lg text-[#C9CACC] px-7">
          <div className="flex items-center gap-4 text-[#787B80] font-light">
            <img className="size-[18px]" src={spin1} alt="spinner" />
            Searching 400+ flights
          </div>
          <div className="flex items-center gap-4 text-[#787B80] font-light">
            <img className="size-[18px]" src={spin2} alt="spinner" />
            Attaching company rules
          </div>
          <div className="flex items-center gap-4 text-[#787B80] font-light">
            <img className="size-[18px]" src={spin3} alt="spinner" />
            Serving best results
          </div>
        </div>
      </Card>
    </div>
  );
};

export default LoaderModal;