import React from 'react'

type Props = {}

export default function DetalleEstaciones({ }: Props) {
    return (
        <>
            <div className='text-center my-12 '>
                <h2 className='font-bold text-3xl text-ice_azul-950'>Estaciones de Carga</h2>
            </div>
            <div className='  flex  w-full justify-center'>

                <div className='w-full mx-1 sm:mx-8 mb-10 md:w-10/12 border-ice_gris-800 shadow-lg  border-2 '>
                    <span className='sr-only'>Mapa de Estaciones de Carga</span>
                    <iframe className='w-full h-full aspect-square '
                        src="https://www.google.com/maps/d/embed?mid=1OzdSlnuDclyB-H5B3-UsMIZnVVnKxJRN&ehbc=2E312F" />
                </div>
            </div>
        </>
    )
}