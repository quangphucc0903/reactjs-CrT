import { useState } from "react"
import { Button } from 'antd';
import clsx from 'clsx'
import './SwitchNavbar.css';

export const SwitchNavbar = () => {
    const [action, setAction] = useState(true);

    return (
        <>
            <div className="flex w-full max-w-4xl mx-auto mt-4 rounded-md border-gray-300 overflow-hidden div-cover">
                <Button
                    onClick={() => setAction(true)}
                    className={clsx("flex-1 text-sm no-hover btn-main", { 'text-white': action, 'text-black': !action })}
                    style={{ borderRadius: '8px 0 0 8px',
                        backgroundColor:'#CA5C3B',                        
                    }}
                >
                    Mainnet
                </Button>
                <Button
                    onClick={() => setAction(false)}
                    className={clsx("flex-1 text-sm no-hover btn-test", { 'text-white': !action, 'text-black': action })}
                    style={{ borderRadius: '0 8px 8px 0', backgroundColor:'#EEC5C7' }}
                >
                    Testnet
                </Button>
            </div>
        </>
    )
}