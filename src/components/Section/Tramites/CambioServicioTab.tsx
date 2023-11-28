import Link from 'next/link'
import React from 'react'
import TarjetasCambioServicio from './TarjetasCambioServicio'

type Props = {
    agenciaUrl: string
}

export default function CambioServicioTab({ agenciaUrl }: Props) {
    const finalUrl = agenciaUrl ? agenciaUrl : "https://agenciaelectricidad.cn.ice.go.cr"
    return (
        <div>
            <div className='grid justify-center'>

                <p className='mt-8 font-bold text-center max-w-2xl'>
                    Solicite cualquier cambio en su servicio eléctrico mediante nuestra agencia virtual
                    y realice sus trámites de forma rápida y sencilla.
                </p>
            </div>
            {/* ACTUALICE SUS DATOS */}

            <div className="grid bg-gray-200  rounded-sm shadow-xl my-6 md:grid-cols-12">
                <div className="grid place-content-center md:col-span-8   ">
                    <div className='grid text-center my-4 max-w-md px-2  '>
                        <h3 className='text-3xl font-bold text-ice_azul-950 '>
                            Actualice sus datos
                        </h3>
                        <p className='mt-4 text-lg'>Mantenga sus datos actualizados para la gestión de sus trámites.
                            <br></br>Ingresando a la <Link className='font-bold text-ice_azul-950' href={finalUrl}>
                                Agencia Virtual Electricidad
                            </Link>
                        </p>
                    </div>
                </div >
                <div className="grid place-content-center lg:place-content-start md:col-span-4  " >
                    <img src='/img/tramites/actualiceDatos.svg' alt="Servicio actualice datos" />
                </div>
            </div >
            {/* TARJETAS */}
            <TarjetasCambioServicio agenciaUrl={agenciaUrl} />
        </div >
    )
}