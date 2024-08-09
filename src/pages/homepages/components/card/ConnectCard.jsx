import React from "react";
import chevRight from "@/assets/chevron-right.svg";
import { AppButton } from "@/components/buttons/AppButton";
import { HomeAPI } from "@/services/ex";
import { useDispatch, useSelector } from "react-redux";
import { enableFollowButton, setUserName, setButtonColor } from '@/redux/slice/modalSlice';

export const ConnectCard = () => {
    const dispatch = useDispatch();
    const { userName, buttonColor } = useSelector((state) => state.modal);

    const handleLogin = async () => {
        const address = "phuc"
        const typeSocials = ["telegram", "discord", "twitter"]
        const requests = typeSocials?.map(typeSocial => HomeAPI.loginUser(address, typeSocial))

        try {
            const responses = await Promise.all(requests)
            const allSuccess = responses.every(response => response.success)

            if (allSuccess) {
                const userResponse = await HomeAPI.getUser({ address });
                if (userResponse.success) {
                    dispatch(setUserName(userResponse.msg.twitterUsername))
                    dispatch(setButtonColor('!bg-neutral-100 !text-neutral-400 !text-[16px] font-medium border-none cursor-not-allowed'));
                }
                dispatch(enableFollowButton());
                alert("login successful");
            } else {
                alert("Login failed");
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <div className="border bg-white border-secondary rounded-lg p-6 mt-6 w-full max-w-[1008px] h-auto">
                <div>
                    <h2 className="font-semibold text-[24px]">Connect Your X account</h2>
                    <p className="mt-2 text-[14px]">You need to connect your X account to join Social Task</p>
                    <a href="#" className="text-blueCustomColor inline-flex mt-2 text-[14px]">
                        Learn more <img src={chevRight} className="" alt="" />
                    </a>
                    <br />

                    <AppButton
                        className={`text-white w-full max-w-[235px] h-[40px] !rounded-[100px] mt-4 ${buttonColor}`}
                        onClick={handleLogin}
                        disabled={userName}
                    >
                        {userName ? `@${userName}` : 'Connect your X account'}
                    </AppButton>
                </div>
            </div>
        </>
    )
}