
export const ButtonFl = ({ className, action, text }) => {

    const yourChange = action ? 'border border-customColor text-customColor' 
    : 'bg-white text-customGrayColor w-[222px] h-[41px] cursor-not-allowed border border-customGrayColor';

    return (
        <>
            <button className={`w-[200px] h-[41px] mt-4 px-8 py-2 rounded-[100px] ${className} ${yourChange}`} disabled={!action}>
                {text}
            </button>
        </>
    )
}