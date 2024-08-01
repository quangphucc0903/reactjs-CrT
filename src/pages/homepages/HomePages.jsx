import footdog from "@/assets/footdog.svg";
import { ConnectCard } from "./components/card/ConnectCard";
import { SlideShow } from "@/components/slicks/SlideShow";
import { useRef } from "react";
import { NextButton, PrevButton } from "@/components/buttons/SliderButton";
import { ReferralCard } from "./components/card/ReferralCard";

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
            <div className="flex flex-col items-center p-4 md:p-6 w-full font-roboto mt-[60px]">
                <div className="mx-auto max-w-[1008px] sm:px-6 lg:px-8">
                    <img src={footdog} className="absolute right-[200px] top-[100px] w-[40px] h-[35px] hidden md:block" />
                    <img src={footdog} className="absolute right-[160px] top-[140px] -rotate-[40deg] w-[30px] h-[30px] hidden md:block" />
                    <img src={footdog} className="absolute right-[150px] top-[190px] w-[40px] h-[30px] hidden md:block" />
                    <img src={footdog} className="absolute right-[100px] top-[210px] w-[37px] h-[37px] -rotate-[17deg] hidden md:block" />
                </div>

                <h1 className="text-[30px] md:text-[40px] font-bold text-center">Social Tasks</h1>
                <p className="text-center mt-2">Complete the Social Tasks to earn extra $Heart token</p>

                {/* card */}
                <div className="w-full max-w-[1008px]">
                    <ConnectCard />
                </div>

                {/* button prev and next */}
                <div className="flex justify-end mt-4 gap-1 w-full max-w-[1008px]">
                    <PrevButton onClick={handlePrevClick} />
                    <NextButton onClick={handleNextClick} />
                </div>

                {/* Slick */}
                <div className="mt-4 w-full max-w-[1008px] h-[196px] mx-auto">
                    <SlideShow ref={sliderRef} />
                </div>

                {/* Referral campaign */}
                <div className="mt-[150px] w-full max-w-[1008px]">
                    <div className="">
                        <h1 className="text-[30px] md:text-[40px] font-semibold text-center">Referral Campaign</h1>
                        <p className="text-center mt-2 text-[14px] text-grayLight">Share your referral link to earn extra point</p>
                    </div>
                    <ReferralCard className="mt-[60px]" />
                </div>
            </div>
        </>
    )
}