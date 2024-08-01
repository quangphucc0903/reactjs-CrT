import { useState } from "react"
import clsx from 'clsx'
import { Button } from "antd";

export const SwitchNavbar = ({className}) => {
    const [action, setAction] = useState(true);

    return (
        <>
            <div className={`flex w-full max-w-4xl mx-auto mt-4 overflow-hidden bg-secondary rounded-[100px] ${className}`} >
                <Button
                    onClick={() => setAction(true)}
                    className={clsx("flex-1 w-[76px] h-[30px] border-none ml-[1px] rounded-[100px] flex items-center justify-center",
                        action ? 'text-white bg-primary hover:!bg-primary hover:!text-white' : 'text-dark bg-transparent hover:!bg-primary hover:!text-white')}
                >
                    Mainnet
                </Button>
                <Button
                    onClick={() => setAction(false)}
                    className={clsx("flex-1 w-[76px] h-[30px] ml-[4px] border-none rounded-[100px] flex items-center justify-center",
                        action ? 'text-dark bg-transparent hover:!bg-primary hover:!text-white' : '!text-white !bg-primary')}
                >
                    Testnet
                </Button>
            </div>
        </>
    )
}