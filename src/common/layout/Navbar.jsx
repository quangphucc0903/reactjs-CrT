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

const moreMenu = [
    {
      key: '1',
      label: <a href="/link1">Link 1</a>,
    },
    {
      key: '2',
      label: <a href="/link2">Link 2</a>,
    },
    {
      key: '3',
      label: <a href="/link3">Link 3</a>,
    },
  ];
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

                        <div className="flex flex-1 items-center justify-center sm:items-stretch !max-w-[1200px]">
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-5 transform translate-x-10">
                                    {navigation?.map((item) =>
                                        item.name === 'More' ? (
                                            <Dropdown key={item.name} menu={{items:moreMenu}} trigger={['click']}>
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
