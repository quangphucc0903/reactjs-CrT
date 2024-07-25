import { Modal as ModalAntd } from "antd"
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "@/redux/slice/modalSlice";
import React from "react";

export const ModalTest = () => {
    const dispatch = useDispatch();
    const openModal = useSelector((state) => state.button.modalVisible);

    return (
        <>
            <ModalAntd
                title="Notifications"
                open={openModal}
                onOk={() => {dispatch(closeModal());}}
                onCancel={() => {dispatch(closeModal());}}
            >
                <p>Chúc mừng bạn đã follow thành công!</p>
            </ModalAntd>
        </>
    )
}