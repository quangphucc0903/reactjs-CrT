import 'antd/dist/reset.css';
import arrLeft from "@/assets/arrow-left.svg";
import showmore from "@/assets/showmore.svg";
import { Disclosure } from '@headlessui/react'
import { Menu as AntMenu, Dropdown} from 'antd';
import {SwitchNavbar} from '../../components/switch'

const navigation = [
    { name: 'Tapos', href: '#', current: true },
    { name: 'Wallet', href: '#', current: false },
    { name: 'Leaderboard', href: '#', current: false },
    { name: 'Shop', href: '#', current: false },
    { name: 'More', href: '#', current: false },
];

const moreMenu = (
    <AntMenu>
        <AntMenu.Item key="1">
            <a href="#subitem1">Subitem 1</a>
        </AntMenu.Item>
        <AntMenu.Item key="2">
            <a href="#subitem2">Subitem 2</a>
        </AntMenu.Item>
        <AntMenu.Item key="3">
            <a href="#subitem3">Subitem 3</a>
        </AntMenu.Item>
    </AntMenu>
);
function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export const Navbar = () => {
    return (
        <>
            <Disclosure as="nav" className="bg-white px-[110px] py-[29px] font-roboto">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="flex items-center justify-start">
                            {/* Logo */}
                            <div className="flex flex-shrink-0 items-center">
                                <img src={arrLeft} alt="logo" />
                            </div>
                        </div>

                        <div className="flex flex-1 items-center justify-center sm:items-stretch ml-28">
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-5">
                                    {navigation?.map((item) =>
                                        item.name === 'More' ? (
                                            <Dropdown key={item.name} overlay={moreMenu} trigger={['click']}>
                                                <a
                                                    href={item.href}
                                                    className="!font-semibold rounded-md px-3 text-sm flex items-center text-primary"                                                    
                                                >
                                                    {item.name}
                                                    {/* icon showmore */}
                                                    <img src={showmore} alt="showmore" />
                                                </a>
                                            </Dropdown>
                                        ) : (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current
                                                        ? 'text-[#6B6B6B]'
                                                        : 'text-[#8C8C8C]',
                                                    'rounded-md px-3 py-2 text-sm font-semibold'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">                           
                           <SwitchNavbar className="!mb-5" />
                        </div>
                    </div>
                </div>
            </Disclosure>
        </>
    );
}
