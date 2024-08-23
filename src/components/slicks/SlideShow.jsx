import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { forwardRef } from "react";
import Slider from "react-slick";
import { FollowCard } from "@/components/card/FollowCard";
import discord from "@/assets/discord.svg";
import twitter from "@/assets/twitter.svg";
import telegram from "@/assets/telegram.svg";
import { StatusCard } from "@/services/type"
import { getTaskUser } from "@/redux/slice/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { HomeAPI } from "@/services/ex";

export const SlideShow = forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const { taskUser } = useSelector((state) => state.modal);

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
      img: telegram,
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

  const loginSocial = async (address, typeSocial) => {
    try {
      console.log('Login request:', { address, typeSocial });
      const rq = await HomeAPI.loginUser({ address, typeSocial });
      console.log('Login response:', rq);
      if (rq.success) {
        dispatch(getTaskUser({ address: "phuc" }));
      } else {
        console.error('Login failed:', rq.msg);
      }
    } catch (error) {
      console.error('abc', error);
    }
  };

  const verifySocial = async (address, typeSocial) => {
    try {
      console.log('Verify request:', { address, typeSocial });
      const rq = await HomeAPI.verifySocial({ address, typeSocial });
      console.log('Verify response:', rq);
      if (rq.success) {
        dispatch(getTaskUser({ address: "phuc" }));
      } else {
        console.error('Verification failed:', rq.msg);
      }
    } catch (error) {
      console.error('Error during verification:', error);
    }
    console.log('Verify request:', { address, typeSocial });
  };

  const onTwitter = () => {
    console.log("Clicked onTwitter");
    verifySocial("phuc", "twitter");
  };

  const onTelegram = async () => {
    console.log("Clicked onTelegram");
    if (taskUser?.telegramId?.length === 0) {
      await loginSocial("phuc", "telegram");
    }
    verifySocial("phuc", "telegram");
  };

  const onDiscord = async () => {
    console.log("Clicked onDiscord");
    if (taskUser?.discordId?.length === 0) {
      await loginSocial("phuc", "discord");
    }
    verifySocial("phuc", "discord");
  };

  const data = [
    {
      status:
        taskUser?.joinTwitter
          ? StatusCard.VERIFY
          : StatusCard.FOLLOW,
      onClickButton: onTwitter,
    },
    {
      status:
        taskUser?.joinChannelTelegram
          ? StatusCard.VERIFY
          : StatusCard.FOLLOW,
      onClickButton: onTelegram,
    },
    {
      status:
        taskUser?.joinVibxDiscord
          ? StatusCard.VERIFY
          : StatusCard.FOLLOW,
      onClickButton: onDiscord,
    },
  ];

  const combined = slides?.map((slide, index) => ({
    ...slide,
    ...data[index],
  }));

  return (

    <div className="slider-container">
      <Slider ref={ref} {...settings}>
        {combined?.map((slide, index) => (
          <div key={index} className="!flex !justify-between !items-center">
            <FollowCard
              textHeader={slide.textHeader}
              text={slide.text}
              img={slide.img}
              className={slide.className}
              status={slide.status}
              onClickButton={slide.onClickButton}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
});