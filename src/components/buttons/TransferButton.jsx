export const TransferButton = ({img, onClick}) => {
    return (
        <>
            <button className="border border-secondary bg-white px-4 py-2 rounded-[24.8px]" onClick={onClick}>
                <img src={img} />
            </button>
        </>
    )
}