import React from 'react'
import SvgLoader from '../Icons/SvgLoader';

type Props = {
    children?: React.ReactNode
    title: string
    bgColor: string;
    img: string;
}

export default function BgCard({ title, children, bgColor, img }: Props) {
    return (


        <div className={` group hover:drop-shadow-xl hover:-translate-y-1 duration-300
            min-w-[6rem] max-w-xs 
            shadow-[inset_2px_2px_3px_0px_#a6abbd]
              flex flex-col justify-end w-full px-6 py-20 rounded-lg ${bgColor}`}>
            <div className='mx-8 group-hover:scale-105 group-hover:-translate-y-1 duration-300'>
                <div className=' grid justify-cente'>
                    <SvgLoader alt="icono" src={img}></SvgLoader>
                </div>
                {children}
                <div className=" text-center text-3xl font-bold leading-9 text-ice_verde-950">
                    {title}
                </div>
            </div>

            {/*<Image src={cargador} className='hover:scale-105 duration-300' alt='cargador'></Image>*/}
        </div>
    )
}