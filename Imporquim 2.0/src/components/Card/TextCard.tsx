import Link from 'next/link'
import React from 'react'

type Props = {
    title: string
    content: string
    url?: string
    txtRef?: string
    external?: boolean

}

export default function TextCard({ title, content, url, txtRef, external }: Props) {
    return (
        <div className="grid text-black dark:text-white bg-white dark:bg-neutral-800
            content-center shadow-lg w-full rounded-2xl py-6 px-5 
            border  border-ice_gris-100 dark:border-neutral-700
            hover:-translate-y-0.5 hover:drop-shadow-md duration-200 
            ">
            <div className="text-md font-bold leading-snug">{title}</div>
            <div className="mt-1 text-sm font-normal leading-snug text-justify">
                <p dangerouslySetInnerHTML={{ __html: content }}></p></div>
            {url ? (
                <div className='mt-1 text-sm font-bold leading-snug text-ice_azul-950 py-1'>
                    <Link href={url ? url : "/"} target={external ? "_blank" : "_self"}>{txtRef}</Link>
                </div>
            ) : null
            }

        </div>
    )
}