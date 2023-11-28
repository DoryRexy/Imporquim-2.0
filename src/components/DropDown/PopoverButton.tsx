import { classNames } from '@/utils/stringUtils'
import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import SvgLoader from '../Icons/SvgLoader'
type Props = {
    title: string
    children: React.ReactNode
    img?: string
    bgColor: string
    showImage?: boolean
}

export default function PopoverButton({ title, children, img, bgColor, showImage }: Props) {
    return (

        <div className="grid  ">
            <Popover className="relative ">
                {({ open }) => (
                    <>
                        <Popover.Button
                            className={` w-full justify-center
                ${open ? '' : ''}
                ${classNames(`group inline-flex items-center ${bgColor}  px-3 py-2 text-base `,
                                "font-semibold text-white hover:text-opacity-100 focus:outline-none",
                                "focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75")} `}
                        >
                            <div className='grid  grid-flow-col gap-12 h-12 place-content-center duration-150'>
                                {showImage ?
                                    <img className='group-hover:scale-110 duration-150 ' src={img}></img> :
                                    ""

                                }
                                <span className='grid place-content-center text-lg group-hover:scale-105 duration-150'>

                                    {title}
                                </span>
                                <span className=''>
                                    <SvgLoader classes={` duration-150 ${open ? 'rotate-0' : '-rotate-90 '}`} src='/img/icons/arrow-down.svg' alt='icono'></SvgLoader>
                                    {/*<ChevronRightIcon
                                        className={`w-14 h-14 ${open ? 'rotate-90' : 'text-opacity-70'}
                  ml-2 h-5 w-5 text-white transition duration-150 ease-in-out group-hover:text-opacity-80`}
                                        aria-hidden="true"
                />*/}
                                </span>
                            </div>

                        </Popover.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-xl">
                                <div className="overflow-hidden shadow-sm ring-1 ring-black ring-opacity-5">
                                    {children}
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>
        </div>
    )
}






