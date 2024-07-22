
export const ButtonOrange = ({ className, text, textChange,onClick, action }) => {

    const handleClick = () => {
        if(onClick) onClick();
    };
    
    const yourChange = action ? 'bg-neutral100 text-neutral400' : 'bg-customColor text-white';

    return (
        <>
            <button className={`mt-4 w-[222px] h-[41px] px-8 py-2 rounded-3xl ${className} ${yourChange}`} onClick={handleClick}>
            {action ? textChange : text}
            </button>
        </>
    )
}