import React from 'react'
import { classNames } from '@/utils/stringUtils'
type Props = {}

export default function DesconexionTab({ }: Props) {
    return (
        <div className=''>
            <div className={classNames(
                'grid bg-ice_gris-200 shadow-lg rounded-md md:grid-flow-col ',
            )}>
                <div className='grid place-content-center'>
                    <p className='text-ice_azul-950 text-2xl lg:text-3xl font-bold text-center '>
                        Puede renunciar al servicio
                        en el momento que lo requiera.
                    </p>
                </div>
                <div className='grid  justify-end '>
                    <img className='m-0' src='/img/tramites/desconexion.png' />
                </div>
            </div>
            <div className='my-8'>
                <h3 className='text-2xl font-bold text-ice_azul-950'>Requisitos específicos</h3>
                <div className="text-justify text-lg w-full my-4 px-6">
                    <ul className='list-disc marker:text-ice_azul-950'>
                        <li>
                            Cumplir con los requisitos generales obligatorios.
                        </li>
                        <li>
                            Cancelar en el momento de la desconexión, los montos facturados y no cancelados
                            de dicho servicio, así como, el saldo de la energía no facturada, comprendido entre
                            la última fecha de lectura y la fecha de desconexión del servicio, este saldo se
                            cobrará posteriormente a través de la emisión de una factura por servicio eléctrico,
                            o se descontará del depósito de garantía a devolver.
                        </li>
                        <li>
                            El ICE reintegrará al cliente el monto del depósito de garantía,
                            siempre y cuando éste se encuentre al día en los pagos por concepto de
                            servicio eléctrico.
                        </li>
                    </ul>
                    <p className='text-justify mt-8'>
                        Una vez solicitado el retiro del servicio y presentados todos los requisitos, el ICE dispone de 24 horas hábiles para efectuar la desconexión.
                    </p>
                    <p className='text-justify mt-8'>En caso de que el titular del servicio solicite su desconexión y se constata que el servicio está siendo utilizado por un tercero, el técnico del ICE deberá tomar la lectura del medidor con el fin de cobrar al cliente la energía consumida hasta ese momento, y notificar formalmente al tercero que debe presentarse en la agencia más cercana con el fin de solicitar su propio servicio en un término de 24 horas hábiles, para lo cual debe cumplir con la normativa vigente de servicios nuevos, caso contrario se procederá a la desconexión del servicio.</p>
                </div>
            </div>
        </div>
    )
}