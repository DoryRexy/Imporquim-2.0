import React from 'react'
import Image from 'next/image'
import CustomButton from '../CustomButton/CustomButton'
import Router from 'next/router'
type Props = {}

export default function ComingSoon({ }: Props) {

    return (
        <div className="min-h-[44rem] flex flex-col justify-center items-center bg-ice_gris-200">
            <Image onLoad={(e) => console.log(e.target)} width={200} height={200} fetchPriority='high' priority sizes='sizes="(max-width: 768px) 100vw, 33vw"' src="/img/utils/comingSoon.png" alt="Logo" className="object-cover w-40 h-40 mb-8 rounded-full" />
            <h1 className="text-4xl font-bold mb-4">Próximamente</h1>
            <p className="text-lg text-center max-w-lg mb-8 px-4 md:px-0">Estamos comprometidos con el mantenimiento continuo de este sito. Pronto tendrémos más actualizaciones!</p>
            <div className="flex justify-center items-center space-x-4">
                <CustomButton title='Volver al inicio' classes='bg-ice_azul-950' onClick={() => Router.push("/")} ></CustomButton>
                {/*<a href="/" className="bg-ice_azul-950 hover:bg-ice_azul-950 text-white px-4 py-2 rounded-sm">Volver al inicio</a>*/}

            </div>
        </div>
    )
}