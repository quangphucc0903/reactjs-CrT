import heart from "@/assets/heart.svg"
import cat from "@/assets/cat.svg"
import ball from "@/assets/ball.svg"
import fish from "@/assets/fish.svg"
import { AppButton } from "@/components/buttons/AppButton"
import { ModalTest } from "@/components/modal/Modal"
import { openModal } from "@/redux/slice/modalSlice"
import { useDispatch, useSelector } from "react-redux"

export const FollowCard = ({ textHeader, text, img, className, isDisabled, onButtonClick, button2Change  }) => {
    const dispatch = useDispatch();
    const modalVisible = useSelector((state) => state.button.modalVisible);

    const handleButtonClick = () => {
        if (!isDisabled.button2) {
            dispatch(openModal());
        }
    };

    return (
        <>
            <div className="overflow-hidden relative bg-white p-1 rounded-[30px] w-[320px] h-[276px] border-[2px] border-secondary">
                {/* logo twitter */}
                <div className="flex items-center mb-4">
                    <img
                        src={img}
                        alt="X logo"
                        className={`w-[52px] h-[50px] rounded-full mt-[30px] ml-[30px] ${className}`}
                    />
                    <img src={cat} className="absolute -right-3 -top-1 w-[82px] h-[64px]" />
                    <img src={ball} className="absolute w-[64px] h-[65px] right-[59px] top-[13px]" />
                    <img src={fish} className="absolute w-[46px] h-[37px] right-2 top-[68px]" />
                </div>
                <div className="ml-[30px] mt-12">
                    <h2 className="text-[24px] font-semibold">{textHeader}</h2>
                    <p className="font-semibold text-[14px]">{text}</p>
                </div>

                <div className="flex items-center justify-between mt-6 ml-[30px] !mb-[50px]">
                    <button className="w-[100px] rounded-[25px] bg-whiteCustomColor inline-flex px-6 py-[10px] text-[12px]  ">
                        +20 <img src={heart} className="w-[15px] h-[20px]" />
                    </button>

                    <AppButton
                        disabled={isDisabled.button2}
                        onClick={handleButtonClick}
                        className={`${button2Change} !rounded-[100px] py-2 px-8 w-[170px] !ml-[16px] !mr-[31px]`} >Follow </AppButton>
                    {modalVisible && <ModalTest />}
                </div>
            </div>
        </>
    )
}