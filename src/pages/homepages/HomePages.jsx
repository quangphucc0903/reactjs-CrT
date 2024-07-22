import { ButtonFl } from "@/components/buttons/ButtonFl"
import footdog from "@/assets/footdog.svg"
import chevRightV2 from "@/assets/chevron-rightv2.svg"
import chevLeft from "@/assets/chevron-left.svg"
import heart from "@/assets/heart.svg"
import twitter from "@/assets/twitter.svg"
import discord from "@/assets/discord.svg"
import cat from "@/assets/cat.svg"
import ball from "@/assets/ball.svg"
import fish from "@/assets/fish.svg"
import { useEffect, useState } from "react";
import { ConnectCard } from "./components/card/ConnectCard"


export const HomePages = () => {



    useEffect(() => {
        document.body.style.position = 'relative';

        // xóa bỏ sự kiện position
        return () => {
            document.body.style.position = '';
        };
    }, []);

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


            </div>
        </>
    )
}