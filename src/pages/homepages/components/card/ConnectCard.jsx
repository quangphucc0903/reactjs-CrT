import React from "react";
import chevRight from "@/assets/chevron-right.svg";
import { AppButton } from "@/components/buttons/AppButton";
import { useSelector } from "react-redux";

export const ConnectCard = () => {
    const { loadingTaskUser, taskUser } = useSelector((state) => state.modal);

    const connectButtonClasses = `text-white w-full max-w-[235px] h-[40px] !rounded-[100px] mt-4 
    ${taskUser.twitterUsername ? '!bg-neutral-100 !text-neutral-400 !text-[16px] font-medium border-none cursor-not-allowed' : 'bg-primary'}`;

    return (
        <>
            <div className="border bg-white border-secondary rounded-lg p-6 mt-6 w-full max-w-[1008px] h-auto">
                <div>
                    <h2 className="font-semibold text-[24px]">Connect Your X account</h2>
                    <p className="mt-2 text-[14px]">You need to connect your X account to join Social Task</p>
                    <a href="#" className="text-blueCustomColor inline-flex mt-2 text-[14px]">
                        Learn more <img src={chevRight} />
                    </a>
                    <br />

                    <AppButton
                        className={`${connectButtonClasses}`}
                        // onClick={() => loginSocial("twitter")}
                        disabled={taskUser.twitterUsername}
                        loading={loadingTaskUser}
                    >
                        {taskUser?.twitterId?.length > 0
                            ? `@${taskUser.twitterUsername}`
                            : "Connect your X account"}
                    </AppButton>
                </div>
            </div>
        </>
    );
};
