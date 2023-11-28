import React from 'react'

type Props = {
    dia: string
    nombreDia: string
    mes: string
}

export default function Calendario({ dia, nombreDia, mes }: Props) {
    return (
        <div className="border border-opacity-30 border-ice_gris-300 grid rounded-lg shadow-md justify-center ">
            <p className='grid text-ice_gris-950 font-bold text-xl justify-center mt-2 pb-2  border-b-[0.3rem] 
                border-ice_azul-950 '>
                {nombreDia}</p>
            <p className='text-ice_verde-950 font-extrabold text-3xl mt-6 text-center '>{dia}</p>
            <p className='text-ice_verde-950 font-extrabold text-3xl mx-4'>{mes}</p>
        </div>
    )
}