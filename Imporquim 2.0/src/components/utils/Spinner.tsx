import React from 'react'

type Props = {
    title?: string
    font_classes?: string
    color?: string
}

export default function Spinner({ title, font_classes, color }: Props) {
    const finalColor = color || "border-ice_verde-950"
    return (
        <div className='flex justify-center  bg-inherit py-4'>
            <div style={{ borderTopColor: "transparent" }} className={`w-8 h-8 border-4  rounded-full animate-spin ${finalColor}`}></div>
            <p className={`ml-2 animate-pulse duration-100 text-xl dark:text-white font-medium text-black ${font_classes}`} >{title || "Cargando..."}</p>
        </div >
    )
}