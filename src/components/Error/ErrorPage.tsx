import React from 'react'
import CustomButton from '../CustomButton/CustomButton'
import Router from 'next/router'

type Props = {}

export default function ErrorPage({ }: Props) {
    return (
        <div
            className="bg-ice_gris-200 w-full px-4 md:px-16 lg:px-20 xl:px-32 
            h-screen flex items-center justify-center">
            <div className="bg-white border border-ice_gris-200 flex flex-col items-center
                 justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl">
                <p className="text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-ice_gris-300">500</p>
                <p className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-ice_gris-700 mt-4">Tenemos un problema</p>
                <p className="text-ice_azul-950 mt-8 py-2 border-y-2 text-center">Parece que tenemos problemas para acceder a la información, si la situación persiste contáctenenos a través de nuestros canales de atención.</p>
                <CustomButton title='Ir al inicio' classes='bg-ice_azul-950 mt-4' onClick={() => { Router.push("/") }}></CustomButton>
            </div>
        </div>
    )
}