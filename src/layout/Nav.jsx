import 'antd/dist/reset.css';
import { Disclosure } from '@headlessui/react'
import { Menu as AntMenu, Dropdown, Space as AntdSpace, Switch as AntdSwitch } from 'antd';
import "./Nav.less"

const navigation = [
    { name: 'Tapos', href: '#', current: false },
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

function Nav() {
    return (
        <>
            <Disclosure as="nav" className="bg-white">
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="flex items-center justify-start">
                                {/* Logo */}
                                <div className="flex flex-shrink-0 items-center">
                                    <svg
                                        width="53"
                                        height="40"
                                        viewBox="0 0 53 40"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M43.2 0H16C14.2327 0 12.8 1.43269 12.8 3.2C12.8 4.96731 14.2327 6.4 16 6.4H43.2C44.9673 6.4 46.4 7.83269 46.4 9.6C46.4 11.3673 44.9673 12.8 43.2 12.8H35.2C31.6654 12.8 28.8 15.6654 28.8 19.2V36.8C28.8 38.5673 30.2327 40 32 40C33.7673 40 35.2 38.5673 35.2 36.8V22.4C35.2 20.6327 36.6327 19.2 38.4 19.2H43.2C48.5019 19.2 52.8 14.9019 52.8 9.6C52.8 4.29807 48.5019 0 43.2 0Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M16 12.8H3.2C1.43269 12.8 0 14.2327 0 16C0 17.7673 1.43269 19.2 3.2 19.2H12.8C14.5673 19.2 16 20.6327 16 22.4V32C16 33.7673 17.4327 35.2 19.2 35.2C20.9673 35.2 22.4 33.7673 22.4 32V19.2C22.4 15.6654 19.5346 12.8 16 12.8Z"
                                            fill="black"
                                        />
                                    </svg>
                                </div>
                            </div>

                            <div className="flex flex-1 items-center justify-center sm:items-stretch">
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) =>
                                            item.name === 'More' ? (
                                                <Dropdown key={item.name} overlay={moreMenu} trigger={['click']}>
                                                    <a
                                                        href={item.href}
                                                        className="text-gray-300 rounded-md px-3 py-2 text-sm font-medium flex items-center"
                                                        style={{ color: '#CA5C3B' }}
                                                    >
                                                        {item.name}
                                                        {/* icon showmore */}
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="25"
                                                            viewBox="0 0 24 25"
                                                            fill="none"
                                                            className="ml-1"
                                                        >
                                                            <path
                                                                d="M6 9.5L12 15.5L18 9.5"
                                                                stroke="#CA5C3B"
                                                                strokeWidth="2"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    </a>
                                                </Dropdown>
                                            ) : (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className={classNames(
                                                        item.current
                                                            ? 'text-white'
                                                            : 'text-black',
                                                        'rounded-md px-3 py-2 text-sm font-medium'
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
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <AntdSpace direction="vertical" className="py-2">
                                    <AntdSwitch
                                        checkedChildren="Mainnet"
                                        unCheckedChildren="testnet"
                                        defaultChecked
                                        className='custom-switch'
                                        style={{
                                            '--antd-switch-checked-bg': '#CA5C3B',
                                            '--antd-switch-checked-handle-bg': '#CA5C3B',
                                            '--antd-switch-unchecked-bg': '#EEC5C7',
                                            '--antd-switch-unchecked-handle-bg': '#EEC5C7',
                                        }}
                                    />
                                </AntdSpace>
                            </div>
                        </div>
                    </div>
            </Disclosure>
        </>
    );
}

export default Nav
