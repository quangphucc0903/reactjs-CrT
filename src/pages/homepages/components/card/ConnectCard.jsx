import chevRight from "@/assets/chevron-right.svg"
import { AppButton } from "@/components/buttons/AppButton"

export const ConnectCard = ({button1Text, button1Change, isDisabled, onClickButton1}) => {

    return (
        <>
            <div className="border bg-white border-secondary rounded-lg p-6 mt-6 w-[1008px] h-[196px]">
                <div className="">
                    <h2 className="font-semibold text-[24px]">Connect Your X account</h2>
                    <p className="mt-2 text-[14px]">You need to connect your X account to join Social Task</p>
                    <a href="#" className="text-blueCustomColor inline-flex mt-2 text-[14px]">
                        Learn more <img src={chevRight} className="" alt="" />
                    </a>
                    <br />

                    <AppButton
                        className={`${button1Change} text-white w-[235px] h-[40px] !rounded-[100px] mt-4`}
                        onClick={onClickButton1}
                        disabled={isDisabled.button1}
                    >
                        {button1Text}
                    </AppButton>
                </div>
            </div>
        </>
    )
}