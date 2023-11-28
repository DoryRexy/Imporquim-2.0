import { classNames } from '@/utils/stringUtils'
import { Dialog, Transition } from '@headlessui/react'
import { IconArrowsMaximize, IconArrowsMinimize } from '@tabler/icons-react'
import { Fragment, useState } from 'react'

type Props = {
    classes?: string,
    buttonTitle: string,
    modalTitle: string,
    children: React.ReactNode
    modalBackground: string

}

export default function Modal({ buttonTitle, modalTitle, classes, children, modalBackground }: Props) {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }


    return (
        <>
            <div className={`grid w-[15rem] h-fit mx-2 my-2`}>
                <button
                    type="button"
                    onClick={openModal}
                    className={`${classes} rounded gap-4 grid grid-flow-col px-4 py-2 text-base font-bold text-ice_azul-950 
                     focus:outline-none focus-visible:ring-2 focus-visible:ring-white place-content-center
                     focus-visible:ring-opacity-75 hover:-translate-y-1 duration-200 hover:scale-105 hover:opacity-90`} >
                    {buttonTitle}

                    {isOpen ? (<IconArrowsMaximize className='w-5 h-5 ' />) :
                        (<IconArrowsMinimize className='w-5 h-5' />)}
                    {/*<ArrowsPointingOutIcon
                        className={`duration-200 h-5 w-5 ${isOpen ? 'rotate-180 transform' : ''
                            }  `} />*/}
                </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className={`relative z-10`} onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel
                                    className={
                                        classNames(`w-full max-w-md transform overflow-hidden rounded  p-6 text-left align-middle shadow-xl transition-all`,
                                            modalBackground)}>
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-semibold leading-6 text-gray-900 text-center"
                                    >
                                        {modalTitle}
                                    </Dialog.Title>

                                    {children}

                                    <div className="mt-4 ">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded border border-transparent 
                                            text-white 
                                            px-4 py-2 text-sm font-medium bg-ice_azul-950 hover:bg-ice_azul-700 duration-100
                                            focus:outline-none focus-visible:ring-2 focus-visible:ring-ice_azul-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Cerrar
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
