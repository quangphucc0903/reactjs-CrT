import React from 'react';
import { useDispatch } from 'react-redux';
import chevRight from "@/assets/chevron-right.svg";
import { AppButton } from "@/components/buttons/AppButton";
import { openModal } from "@/redux/slice/modalSlice";
import { InviteModal } from "@/components/modal/InviteModal";

export const ReferralCard = ({ className }) => {
    const dispatch = useDispatch();

    return (
        <>
            <div className={`border bg-white border-secondary rounded-lg p-6 w-full max-w-[1008px] h-auto ${className}`}>
                <div>
                    <h2 className="font-semibold text-[24px]">Enter referral Code</h2>
                    <p className="mt-2 text-[14px]">Please enter referral code to earn extra point</p>
                    <a href="#" className="text-blueCustomColor inline-flex mt-2 text-[14px]">
                        Learn more <img src={chevRight} className="" alt="" />
                    </a>
                    <br />

                    <div className="flex flex-col md:flex-row justify-between items-center mt-5 space-y-4 md:space-y-0 md:space-x-4">
                        <div className="flex items-center border rounded-full overflow-hidden w-full max-w-[400px]">
                            <input
                                type="text"
                                placeholder="Enter referral code"
                                className="flex-grow px-4 py-2 focus:outline-none focus:border-transparent"
                            />
                            <button className="bg-green-500 px-6 py-2 md:px-[30px] md:py-1 rounded-full m-1 text-white">
                                Go
                            </button>
                        </div>

                        <AppButton
                            className="text-white w-full md:w-[200px] h-[40px] !rounded-[100px]"
                            onClick={() => dispatch(openModal())}
                        >
                            Invite Your Friends
                        </AppButton>
                        <InviteModal />
                    </div>
                </div>
            </div>
        </>
    )
}