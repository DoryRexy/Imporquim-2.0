import { classNames } from '@/utils/stringUtils'
import React from 'react'
import Image from 'next/image'
import SvgLoader from '../Icons/SvgLoader'
const marginClasses = "mx-2 md:mx-12 lg:mx-48 xl:mx-[27rem]"
const borderClasses = ""
const contentMargin = "mx-2 md:mx-10 lg:mx-14"

type Props = {
    title: string
    date: string
    resume: string
    img: string
    children: React.ReactNode
}

export default function Noticia({ title, date, resume, img, children }: Props) {
    return (
        <div className=' bg-ice_gris-200 pb-10 '>

            <section id="banner" className={`${marginClasses} ${borderClasses} `}>
                <div className='grid justify-center '>
                    {/*<SvgLoader alt="banner" src={img} classes='object-cover' ></SvgLoader>*/}
                    <img src={img} alt="banner" className='object-cover' />
                </div>
                <div className={`pl-12  bg-ice_gris-200 text-ice_azul-950 text-sm -translate-y-4 content-center pt-2 `}>
                    <p>{date}</p>
                </div>

            </section>
            <section id="contenido" className={`${marginClasses} ${borderClasses} bg-white pb-6 `}>
                <div className={classNames(`${contentMargin}`)}>
                    <h1 className='text-ice_azul-950 font-bold text-5xl py-8'>{title}</h1>
                    <p className='text-ice_azul-950 font-medium text-xl my-4'>
                        {resume}
                    </p>
                    <div className='grid font-sm text-justify gap-8 my-6'>

                        {children}
                    </div>
                </div>

            </section>
        </div>
    )
}