import footdog from "@/assets/footdog.svg"
import { ConnectCard } from "./components/card/ConnectCard"
import { SlideShow } from "@/components/slicks/SlideShow"
import { useRef } from "react"
import { NextButton, PrevButton } from "@/components/buttons/SliderButton";

export const HomePages = () => {
    const sliderRef = useRef(null);

    const handlePrevClick = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    const handleNextClick = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    return (
        <>
            <div className="flex flex-col items-center p-6 w-full font-roboto mt-[60px]">
                <img src={footdog} className="absolute right-[10px] top-[320px] w-[37px] h-[39px] rotate-[17deg]" />
                <img src={footdog} className="absolute right-[84px] top-[280px] w-[43px] h-[36px]" />
                <img src={footdog} className="absolute right-[103px] top-[204px] -rotate-[40deg] w-[38px] h-[38px]" />
                <img src={footdog} className="absolute right-[184px] top-[162px] w-[43px] h-[36px]" />

                <h1 className="text-3xl font-bold text-center">Social Tasks</h1>
                <p className="text-center mt-2">Complete the Social Tasks to earn extra $Heart token</p>

                {/* card */}
                <ConnectCard />

                {/* button prev and next */}
                <div className="flex justify-end mt-4 space-x-2 w-[70%]">
                    <PrevButton onClick={handlePrevClick} />
                    <NextButton onClick={handleNextClick} />
                </div>

                {/* Slick */}
                <div className="mt-4 w-[1008px] h-[196px]">
                    <SlideShow ref={sliderRef}/>
                </div>

            </div>
        </>
    )
}