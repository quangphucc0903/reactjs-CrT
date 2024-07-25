import footdog from "@/assets/footdog.svg"
import chevRightV2 from "@/assets/chevron-rightv2.svg"
import chevLeft from "@/assets/chevron-left.svg"
import { FollowCard } from "@/components/card/FollowCard"
import { ConnectCard } from "./components/card/ConnectCard"
import discord from "@/assets/discord.svg"
import twitter from "@/assets/twitter.svg"
import { useDispatch, useSelector } from "react-redux";
import { clickButton1 } from "@/redux/slice/modalSlice";
import { TransferButton } from "@/components/buttons/TransferButton";

export const HomePages = () => {

    const dispatch = useDispatch();
    const buttonState = useSelector((state) => { return state.button || {} });

    const {
        button1,
        button2,
        button1Text,
        button1Change,
        button2Change,
    } = buttonState;

    const handleClickButton1 = () => {
        dispatch(clickButton1());
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
                <ConnectCard
                    button1Text={button1Text}
                    button1Change={button1Change}
                    isDisabled={{ button1, button2 }}
                    onClickButton1={handleClickButton1}
                />

                {/* button prev and next */}
                <div className="flex justify-end mt-4 space-x-2 w-[70%]">
                    <TransferButton img={chevLeft} />
                    <TransferButton img={chevRightV2} />
                </div>

                {/* follow card*/}
                <div className="mt-4 w-[1008px] h-[196px] flex justify-between">
                    <FollowCard isDisabled={{ button2 }} button2Change={button2Change} textHeader={'Follow Tapos X'} img={twitter} className={"bg-black p-2"} text={'Follow Tapos X to earn Points'} />

                    <FollowCard isDisabled={{ button2 }} button2Change={button2Change} textHeader={'Retweet post on X'} img={twitter} className={"bg-black p-2"} text={'Retweet Tapos post on X to earn Points'} />

                    <FollowCard isDisabled={{ button2 }} button2Change={button2Change} textHeader={'Join VibrantX Discord'} img={discord} className={'w-[50px] h-[50px]'} text={'Retweet a daily tweet to earn HEART'} />

                </div>

                
            </div>
        </>
    )
}