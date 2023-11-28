import React from 'react'
import SvgLoader from '../Icons/SvgLoader'
import { classNames } from '@/utils/stringUtils'

type Props = {
    title: string
    bgColor: string
    showImage?: boolean
    img?: string
    onClick?: () => void;
}

export default function PlainButton({ title, bgColor, showImage, img, onClick }: Props) {
    return (
        <div className={` ${classNames(`group w-full inline-flex justify-center ${bgColor}  px-3 py-2 text-base rounded-sm `,
            "font-semibold text-white  duration-150",
            "",
            "hover:cursor-pointer  hover:text-opacity-100 hover:shadow-md hover:-translate-y-0.5 hover:scale-105 focus:outline-none",
            "focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75")} `
        } onClick={onClick}>
            <div className='grid  grid-flow-col gap-2 mx-4 h-10 place-content-center  '>
                {
                    showImage ? <img className=' ' src={img}></img> :
                        ""
                }
                <span className='grid place-content-center text-lg  '>
                    {title}
                </span>
                <span className='grid '>
                    <SvgLoader classes={` `} src='/img/icons/download.svg' alt='icono'></SvgLoader>
                    {/*<ChevronRightIcon
                className={`w-14 h-14 ${open ? 'rotate-90' : 'text-opacity-70'}
                ml-2 h-5 w-5 text-white transition duration-150 ease-in-out group-hover:text-opacity-80`}
                aria-hidden="true"
            />*/}
                </span>
            </div>
        </div >
    )
}