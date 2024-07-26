import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { forwardRef } from "react";
import Slider from "react-slick";
import { FollowCard } from "@/components/card/FollowCard";
import discord from "@/assets/discord.svg";
import twitter from "@/assets/twitter.svg";

export const SlideShow = forwardRef((props, ref) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
    };

    const slides = [
        {
            img: twitter,
            className: "bg-black p-2",
            textHeader: "Follow Tapos X",
            text: "Follow Tapos X to earn Points",
        },
        {
            img: twitter,
            className: "bg-black p-2",
            textHeader: "Retweet post on X",
            text: "Retweet Tapos post on X to earn Points",
        },
        {
            img: discord,
            className: "w-[50px] h-[50px]",
            textHeader: "Join VibrantX Discord",
            text: "Retweet a daily tweet to earn HEART",
        },
    ];

    return (
        <div className="slider-container">
            <Slider ref={ref} {...settings}>
                {slides?.map((slide, index) => (
                    <div key={index} className="!flex !justify-between !items-center">
                        <FollowCard
                            textHeader={slide.textHeader}
                            text={slide.text}
                            img={slide.img}
                            className={slide.className}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
});
