import React from 'react'
import SvgLoader from '../Icons/SvgLoader'

type Props = {
    afectedTowns?: string
    state: string
    title: string,
    start: string,
    end: string,
    children: React.ReactNode
}

export default function InterrupcionChild({ state, title, start, end, afectedTowns, children }: Props) {
    return (
        <div className=''>
            <div className='mx-4 '>
                <h2 className="text-ice_verde-950 text-3xl leading-tight text-center">
                    <strong>{`${state} - `}</strong>
                    {title}</h2>
                <p className='mt-3 text-sm text-gray-700 flex gap-4 grid-flow-col'>
                    <strong>Localidades afectadas:</strong>{`${afectedTowns}`}
                </p>
                <div className="mt-4 text-gray-700">{children}</div>
            </div>
            <div className=" grid  md:flex justify-center md:items-center my-4 ">

                <SvgLoader src='/img/suspensiones/timer.svg' alt='Imagen Reloj' key="timer-image"></SvgLoader>
                <div className='text-md font-bold ml-4'>
                    <p>Inicio:</p>
                </div>
                <p className="text-md font-medium ml-4">
                    {start}
                </p>
                <div className='text-md font-bold ml-4'>
                    <p>Fin:</p>
                </div>
                <p className="text-md font-medium ml-4">
                    {end}
                </p>
            </div>
        </div>
    )
}