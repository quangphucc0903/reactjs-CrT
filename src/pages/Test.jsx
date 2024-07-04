import 'antd/dist/reset.css';
import '../index.css'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Space, Switch } from 'antd';
import '../index.css'

const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {   
    return classes.filter(Boolean).join(' ')
}
function Test() {
    return (
        <>
            <Disclosure as="nav" className="bg-white">
                {({ open }) => (
                    <>
                        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                            <div className="relative flex h-16 items-center justify-between">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="absolute -inset-0.5" />
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </DisclosureButton>
                                </div>
                                <div className="flex flex-1 items-center justify-center sm:items-stretch">
                                    <div className="flex flex-shrink-0 items-center">
                                        <svg width="53" height="40" viewBox="0 0 53 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M43.2 0H16C14.2327 0 12.8 1.43269 12.8 3.2C12.8 4.96731 14.2327 6.4 16 6.4H43.2C44.9673 6.4 46.4 7.83269 46.4 9.6C46.4 11.3673 44.9673 12.8 43.2 12.8H35.2C31.6654 12.8 28.8 15.6654 28.8 19.2V36.8C28.8 38.5673 30.2327 40 32 40C33.7673 40 35.2 38.5673 35.2 36.8V22.4C35.2 20.6327 36.6327 19.2 38.4 19.2H43.2C48.5019 19.2 52.8 14.9019 52.8 9.6C52.8 4.29807 48.5019 0 43.2 0Z" fill="black" />
                                            <path d="M16 12.8H3.2C1.43269 12.8 0 14.2327 0 16C0 17.7673 1.43269 19.2 3.2 19.2H12.8C14.5673 19.2 16 20.6327 16 22.4V32C16 33.7673 17.4327 35.2 19.2 35.2C20.9673 35.2 22.4 33.7673 22.4 32V19.2C22.4 15.6654 19.5346 12.8 16 12.8Z" fill="black" />
                                        </svg>

                                    </div>
                                    <div className="hidden sm:ml-6 sm:block">
                                        <div className="flex space-x-4">
                                            {navigation.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className={classNames(
                                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                        'rounded-md px-3 py-2 text-sm font-medium',
                                                    )}
                                                    aria-current={item.current ? 'page' : undefined}
                                                >
                                                    {item.name}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                    <Space direction="vertical" className='py-2 '>
                                        <Switch checkedChildren="Mainnet" unCheckedChildren="testnet" defaultChecked />                                        
                                    </Space>
                                </div>
                            </div>
                        </div>

                        <DisclosurePanel className="sm:hidden justify-center">
                            <div className="space-y-1 px-2 pb-3 pt-2">
                                {navigation.map((item) => (
                                    <DisclosureButton
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className={classNames(
                                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'block rounded-md px-3 py-2 text-base font-medium',
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </DisclosureButton>
                                ))}
                            </div>
                        </DisclosurePanel>
                    </>
                )}
            </Disclosure>

        </>
    )
}

export default Test