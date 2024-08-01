import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '@/redux/slice/modalSlice';
import { Modal } from 'antd';
import copy from '@/assets/copy.svg'
import { AppButton } from "@/components/buttons/AppButton";

export const InviteModal = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector((state) => state.modal.isOpen);

    const handleCancel = () => {
        dispatch(closeModal());
    };

    const handleDone = () => {
        dispatch(closeModal());
    };

    return (
        <Modal
            open={isOpen}
            onCancel={handleCancel}
            footer={null}
        >
            <div>
                <div className='mb-6'>
                    <h2 className='text-center text-[20px] font-bold'>Invite Your Friends</h2>
                    <p className='text-center text-[14px] text-gray-600'>Let's share the code with your friend and both of you will earn extra points and have fun together.</p>
                </div>
                <hr />
                <div className='mt-6'>
                    <h2 className='text-[14px] text-gray-700 font-semibold'>Your code</h2>
                    <div className="flex items-center bg-light">
                        <input
                            type="text"
                            value="ABC567"
                            readOnly
                            className="border font-semibold border-neutral-gray-200 text-neutral-gray-500-base text-[14px] rounded-lg p-2 w-full"
                        />

                        <button className="ml-2 p-2" >
                            <img src={copy} />
                        </button>
                    </div>
                </div>
                <div className='flex justify-between mt-6'>
                    <AppButton
                        className='!rounded-full px-[30px] py-[5px] w-full bg-white border border-primary text-primary text-[16px]'
                        onClick={handleCancel}
                    >
                        Cancel
                    </AppButton>

                    <AppButton
                        className='!rounded-full px-[30px] py-[5px] w-full text-white text-[16px] ml-2'
                        onClick={handleDone}
                    >
                        Done
                    </AppButton>
                </div>
            </div>

        </Modal>
    );
};
