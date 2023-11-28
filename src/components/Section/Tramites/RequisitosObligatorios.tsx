import PopoverButton from '@/components/DropDown/PopoverButton'
import React from 'react'

type Props = {}

export default function RequisitosObligatorios({ }: Props) {
    const borders = ' '
    return (
        <div className='bg-ice_gris-200 max-w-7xl mx-6 px-2 shadow-lg pt-3 mb-12 '>
            <div className='flex justify-center'>
                <h3 className='text-ice_azul-950 font-bold text-3xl'>Requisitos generales obligatorios</h3>
            </div>
            <div className={`${borders}  grid lg:grid-cols-12 my-4 gap-6 text-justify `}>
                <div className={`${borders}  lg:col-span-9 grid pl-5 `}>
                    <ul className='list-decimal marker:text-ice_azul-950 marker:font-bold grid gap-2'>
                        <li>Cédula de identidad (en caso que tramite un tercero,
                            debe presentar autorización del interesado autenticada por un abogado sobre el trámite a realizar).
                            <div className='grid gap-6 lg:gap-2 lg:grid-cols-2 justify-center my-6'>
                                <span>
                                    <PopoverButton showImage title='Personas Físicas' bgColor='bg-ice_verde-950'
                                        img="/img/tramites/personaFisica.svg">
                                        <div className="bg-ice_verde-600 text-black p-4 ">


                                            <span className="block text-sm mx-2 text-justify ">
                                                <ul className='list-disc '>
                                                    <li>
                                                        Nacionales: Presentar cédula de identidad original.
                                                    </li>
                                                    <li>
                                                        Extranjeros: Presentar documentos que acrediten la permanencia en el país como cédula de residencia,
                                                        permiso temporal, carnet de refugiado, carnet de residente pensionado o de residente rentista, carnet de asilado territorial.
                                                    </li>
                                                </ul>
                                            </span>

                                        </div>
                                    </PopoverButton>
                                </span>
                                <span>
                                    <PopoverButton showImage title='Personas Jurídicas' bgColor='bg-ice_verde-950'
                                        img="/img/tramites/personaJuridica.svg">
                                        <div className="bg-ice_verde-600 text-black p-4 ">

                                            {/*<span className="flex items-center">
                                                <span className="text-sm font-medium text-gray-900">
                                                    Requisitos 2
                                                </span>
                        </span>*/}
                                            <span className="block text-sm mx-2 text-justify ">
                                                <ul className='list-disc '>
                                                    <li>
                                                        Presentar original y copia de cédula de identidad y cédula de residencia del representante legal.
                                                    </li>
                                                    <li>
                                                        Presentar original y copia de la personería jurídica, emitida en los últimos 30 días.
                                                    </li>
                                                    <li>
                                                        La certificación de la personería jurídica se puede obtener a través del Sistema de Certificaciones y Consultas del Registro Nacional.
                                                    </li>
                                                    <li>
                                                        La certificación debe tener una vigencia no mayor a 15 días naturales.
                                                    </li>
                                                    <li>En caso de que la certificación tenga una vigencia mayor a 15 días naturales, se deberá presentar una nueva certificación.</li>
                                                </ul>





                                            </span>

                                        </div>
                                    </PopoverButton>
                                </span>
                            </div>
                        </li>
                        <li>No tener deudas pendientes con el ICE.</li>
                        <li>Presentar documentación que demuestre ser el dueño registral del inmueble (certificación literal del registro),
                            autorización escrita y fotocopia de cédula de identidad del propietario, o demostrar gestión posesional.</li>
                        <li>Presentar la Boleta de Revisión de planos eléctricos emitida por el CFIA.</li>
                        <li>Proporcionar la lista de la carga a conectar, incluyendo la cantidad de bombillos, equipos, artefactos eléctricos, motores, etc.</li>
                        <li>Proporcionar la dirección exacta donde se desea instalar el servicio, así como un número de teléfono de referencia y un número de NISE,
                            localización o medidor cercano (en la medida de lo posible).</li>
                        <li>Si se trata de un inquilino solicitando el servicio, debe presentar el contrato de arrendamiento y
                            una autorización del dueño registral para realizar el trámite.</li>
                        <li>Para servicios existentes debe facilitar el número de NISE para cualquier trámite.</li>
                    </ul>
                </div>
                <div className={`${borders}  lg:col-span-3 grid place-content-center `}>
                    <img src='/img/tramites/requisitosObligatorios.svg' />
                </div>
            </div>
        </div>
    )
}