import CustomButton from '@/components/CustomButton/CustomButton'
import SvgLoader from '@/components/Icons/SvgLoader'
import { classNames } from '@/utils/stringUtils'
import React from 'react'

type Props = {
    children: React.ReactNode
    title: string,
    img: string,
    imgAlt?: string
}

export default function TwoColumnsResponsive({ title, children, img, imgAlt }: Props) {
    //console.log(`img: ${img} type: ${typeof (img)}`)

    return (
        <div className="mt-8 grid md:grid-cols-8 ">
            <div className='grid md:col-span-8 text-2xl'>
                <p className="text-center md:text-left font-bold text-ice_azul-950 my-2">{title}</p>
            </div>
            <div className='md:col-span-3 lg:col-span-2'>
                <div className={classNames('flex place-content-center md:place-content-start')}>

                    <img className='self-center' src={img} alt="Imagen Servicio Temporal" />

                </div>
            </div>
            <div className="grid mt-4 md:col-span-5 md:mt-0 lg:col-span-6">
                <div className="md:col-span-2 mx-2 text-base leading-6">
                    {children}
                </div>
            </div>
        </div>
    )
}