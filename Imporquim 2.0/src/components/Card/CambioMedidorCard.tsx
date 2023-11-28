import { classNames } from '@/utils/stringUtils'
import React from 'react'
import CustomButton from '../CustomButton/CustomButton'
import PopoverButton from '../DropDown/PopoverButton'

type Props = {
    title: string
    img: string
    children: React.ReactNode
}

export default function CambioMedidorCard({ title, img, children }: Props) {
    return (
        <div className={classNames(
            "shadow-xl py-4 border border-gray-300 flex flex-col items-center justify-center",
            " min-h-96  ")}>
            <div className='grid  w-full justify-center '>

                <img src={img} alt="Imagen" className="mt-4 mb-4 max-h-72 " />
            </div>
            <div className='grid justify-center'>
                <h3 className='max-w-[16rem] text-xl text-center font-extrabold text-ice_azul-950 h-16 '>{title}</h3>
            </div>
            <div className='text-justify leading-6 w-full px-0 md:px-4 lg:px-10 h-full grid last:content-end '>
                {children}
            </div>


        </div>
    )
}