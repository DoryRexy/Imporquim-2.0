import React from 'react'
import SvgLoader from '../Icons/SvgLoader';
import Link from 'next/link';
import { isExternal } from 'util/types';

type Props = {
    children?: React.ReactNode
    title: string
    bgColor: string;
    href: string;
    external?: boolean;
}

export default function ImageCard({ title, children, bgColor, href, external }: Props) {
    return (
        <div className='w-full grid justify-center my-4'>

            <div className={` group hover:drop-shadow-xl hover:-translate-y-1 duration-150
            min-w-[8rem] max-w-xs
              flex flex-col justify-end  px-6 py-0 rounded-lg ${bgColor}`}>
                <div className='mx-0 group-hover:scale-105 group-hover:-translate-y-1 duration-150'>
                    <div className='grid justify-center'>
                        <Link href={href} target={external ? "_blank" : "_self"}>
                            {children}
                        </Link>
                    </div>

                </div>
            </div>
            <div className=' grid  w-full max-w-xs h-12 md:px-2 text-xl mt-3'>
                <p className='text-ice_azul-950 text-center '>{title}</p>
            </div>
        </div>

    )
}