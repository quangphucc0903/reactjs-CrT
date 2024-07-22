import chevRight from "@/assets/chevron-right.svg"
import { ButtonOrange } from "@/components/buttons/ButtonOrange"

export const ConnectCard = () => {
    return (
        <>
            <div className="border bg-white border-secondaryColor rounded-lg p-6 mt-6 w-[1008px] h-[196px]">
                <div className="">
                    <h2 className="font-semibold text-[24px]">Connect Your X account</h2>
                    <p className="mt-2 text-[14px]">You need to connect your X account to join Social Task</p>
                    <a href="#" className="text-blueCustomColor inline-flex mt-2 text-[14px]">
                        Learn more <img src={chevRight} className="" alt="" />
                    </a>
                    <br />
                    <ButtonOrange
                        className="!text-[16px] mt-[16px] !text-[roboto]"
                        text="Connect your X account"
                        textChange="@ABC123456" />
                </div>
            </div>
        </>
    )
}