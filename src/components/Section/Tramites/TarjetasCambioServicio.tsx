import CambioMedidorCard from '@/components/Card/CambioMedidorCard'
import Modal from '@/components/Modal/Modal'
type Props = {
    agenciaUrl: string
}

const data = [
    {
        "id": 1,
        "title": "Solicitud cambio medidor",
        "buttonTitle": "Requisitos",
        "modalTitle": "",
        "img": "/img/tramites/tramites1.svg",
        "description": [
            "Este servicio aplica cuando se requiere mayor capacidad de carga, debido al aumento en su consumo.",
            "También aplica cuando se presente algún daño en el medidor."
        ],
        requirements: [
            ["Cumplir con los requisitos generales obligatorios.",
                "Suministrar el voltaje y la lista de carga a conectar.",
                "En caso de que el servicio esté registrado a nombre de una empresa, debe presentar una nota dirigida al ICE,\
             emitida por el representante legal de la misma, en donde solicita dicho servicio.",
                "Firmar la solicitud correspondiente, y el <strong> “Contrato para el Servicio Eléctrico”</strong>",
                "Cumplir con lo establecido por ARESEP sobre la Norma Técnica denominada <strong>“Instalación y Equipamiento de Acometidas Eléctricas”</strong>. (poner aquí el link para ver este reglamento)",
                "De ser requerido por parte del ICE, deberás presentar planos modificados aprobados por el Colegio Federado de Ingenieros y Arquitectos."]]
    },
    {
        "id": 2,
        "title": "Solicitud traspaso de derechos",
        "buttonTitle": "Requisitos",
        "modalTitle": "",
        "img": "/img/tramites/tramites2.svg",
        "description": [
            "Este servicio aplica cuando requiera traspasar el derecho de uso del servicio",
            "También aplica para casos donde el cliente fallece y se requiere que esté a nombre de otra persona."
        ],
        requirements: [
            "Cumplir con los requisitos generales obligatorios.",
            "<strong>1. Traspaso de servicio:</strong>",
            ["Deben presentarse ambos clientes (actual y nuevo) en Agencia de Servicios de Electricidad del ICE, \
            a firmar la solicitud de desconexión por parte del titular del servicio y la solicitud y contrato por \
            parte del nuevo cliente. En caso de no presentarse el titular del servicio, debe presentar autorización del interesado autenticada por un abogado."],
            "<strong>2. Para el caso de alquiler de propiedad:</strong>",
            ["Presentar copia del contrato de arrendamiento y autorización por escrito por parte del dueño del inmueble.\
             En caso de no existir contrato de arrendamiento, se requiere una declaración jurada, que demuestre ser el usuario del servicio. \
             Para este tipo de caso, se requiere obligatoriamente, la autorización del propietario del inmueble."],
            "<strong>3. Para el caso de compra de propiedad:</strong>",
            ["Certificación literal emitida por el Registro Nacional, certificación notarial o inscripción ante el \
            Registro Público con no más de 30 días transcurridos desde su fecha de emisión.",
                "En caso de no ser el dueño registral, se requiere autorización del propietario."],
            "<strong>4. En caso de personas fallecidas:</strong>",
            ["El interesado debe presentar constancia de defunción del titular del servicio, emitida por el Registro Civil, \
            así como la certificación del Registro Nacional del inmueble.",
                "El heredero o actual poseedor debe presentar declaración jurada emitida por un notario público, declarando que \
                autorizan expresamente al ICE, para efectuar el cambio del titular, liberando de toda responsabilidad al ICE en caso de que se presente otro posible heredero."]
        ]
    },
    {
        "id": 3,
        "title": "Solicitud de traslado interno de medidor",
        "buttonTitle": "Requisitos",
        "modalTitle": "",
        "img": "/img/tramites/tramites3.svg",
        "description": [
            "Este servicio aplica para cambiar la ubicación del medidor dentro de su propiedad,\
            solicítelo mediante la <a class='font-bold text-ice_azul-950' href='https://agenciaelectricidad.cn.ice.go.cr'>Agencia Virtual Electricidad.</a> ",
        ],
        requirements: [
            ["Cumplir con los requisitos generales obligatorios.",
                "Última factura eléctrica / No tener pendientes con el ICE cancelada.",
                "Cancelar ¢1000, los cuales serán incluidos en la próxima factura.",
                "Indicar si requiere un servicio de 120 o 240 voltios."]
        ]
    },
    {
        "id": 4,
        "title": "Solicitud de traslado externo de medidor",
        "buttonTitle": "Requisitos",
        "modalTitle": "",
        "img": "/img/tramites/tramites4.svg",
        "description": [
            "Este servicio aplica para traslados del medidor a otro sitio.",

        ],
        requirements: [
            [
                "Cumplir con los requisitos generales obligatorios.",
                "Certificación literal emitida por el Registro Nacional, certificación notarial o inscripción ante el Registro Público con no más de 30 días transcurridos desde su fecha de emisión.",
                "En caso de no ser el dueño registral, se requiere autorización del propietario y copia de la cédula",
                "En caso de inmuebles no inscribibles, se requiere cualquier documento que demuestre su derecho de posesión, (ART. 32 –i de SUCOM) (poner aquí el link para ver este reglamento).",
                "Boleta “Constancia de Recibido” para el cambio de provisional a definitivo, emitida por el Colegio Federado de Ingenieros y Arquitectos de Costa Rica (CFIA).",
                "En caso de inmuebles ya construidos, aportar la boleta o número de “Solicitud de Sellado de Planos Eléctricos”, emitida por el CFIA.",
                "Copia de la lámina eléctrica, donde esté el diagrama unifilar, firmado por el ingeniero responsable",
                "(Art. 12 SUINAC), debe especificar calibres y material de cableado.",
                "Carga (KW) a instalar, para el cálculo del depósito de garantía.",
                "Cumplir con lo establecido por ARESEP sobre la Norma Técnica denominada “Instalación y Equipamiento de Acometidas Eléctricas”. (poner aquí el link para ver este reglamento)",
                "Nota: De no contar con la capacidad eléctrica que soporte la carga solicitada y se requiera instalar transformadores o extensión de líneas adicionales, el ICE no está en la \
                 obligación de brindar el servicio, salvo que el interesado corra con los gastos y solicite el Estudio de Ingeniería correspondiente.",
            ]
        ]
    },
    {
        "id": 5,
        "title": "Solicitud de cambio sistema de voltaje",
        "buttonTitle": "Requisitos",
        "modalTitle": "",
        "img": "/img/tramites/tramites5.svg",
        "description": [
            "Este servicio aplica para cambios en el voltaje de su servicio eléctrico de 120 voltios a 120/240 voltios,\
            por el aumento de la carga conectada o por cambios en las características de los artefactos eléctricos o equipos.",

        ],
        requirements: [
            "Cumplir con los requisitos generales obligatorios.",
            "Última factura eléctrica cancelada.",
            "Suministrar el voltaje y la lista de carga a conectar.",
            "Aportar la boleta o número de <strong>“Solicitud de Sellado de Planos Eléctricos”</strong> \
            emitida por el Colegio Federado de Ingenieros y Arquitectos de Costa Rica (CFIA), para la solicitud de conexión de servicio provisional."
        ]
    },
    {
        "id": 6,
        "title": "Solicitud cambio de tarifa",
        "buttonTitle": "Requisitos",
        "modalTitle": "",
        "img": "/img/tramites/tramites6.svg",
        "description": [
            "Este servicio aplica:",
            [
                "Modificar el uso del servicio eléctrico",
                "Estudio del servicio.",
                "Análisis de la tarifa."
            ]


        ],
        requirements: [
            "Cumplir con los requisitos generales obligatorios.",
            "Última factura eléctrica cancelada.",
            "Presentar por escrito el requerimiento."
        ]
    }
]

/**DEFINIR LAS */
export default function TarjetasCambioServicio({ agenciaUrl }: Props) {
    const finalUrl = agenciaUrl ? agenciaUrl : "https://agenciaelectricidad.cn.ice.go.cr"
    return (
        <div className=' overflow-hidden my-14'>
            <div className="grid gap-8 lg:grid-cols-2 ">

                {data.map((tarjeta, index) => {
                    return (

                        <CambioMedidorCard title={tarjeta.title} img={tarjeta.img} >
                            {
                                tarjeta.description.map((desc, index) => {

                                    if (typeof desc === 'string') return (
                                        <p className="mb-2 mx-10 " key={index} dangerouslySetInnerHTML={{ __html: desc }}></p>
                                    )
                                    else {
                                        // Renderizar lista
                                        return (
                                            <ul className="list-disc list-outside ml-14 my-1 mt-3 marker:text-ice_azul-950 " key={index}>
                                                {desc.map((descItem, descItemIndex) => (
                                                    <li className='mt-2 text-justify' key={descItemIndex} dangerouslySetInnerHTML={{ __html: descItem }}></li>
                                                ))}
                                            </ul>
                                        );
                                    }

                                })
                            }
                            <div className="grid md:grid-flow-col justify-center gap-6 mt-4 md:mt-0  " >
                                <Modal buttonTitle={tarjeta.buttonTitle}
                                    modalTitle={tarjeta.title} modalBackground='bg-white'
                                    classes='bg-ice_verde-900 text-white' >
                                    <div className=' text-justify text-sm mt-3'>
                                        <ul className='list-disc'>
                                            {tarjeta.requirements.map((item, index) => {
                                                if (typeof item === 'string') {
                                                    // Renderizar párrafo
                                                    return <p className='mt-1 text-justify font-normal' key={index} dangerouslySetInnerHTML={{ __html: item }}></p>;
                                                } else {
                                                    // Renderizar lista
                                                    return (
                                                        <ul className="list-disc list-outside ml-5 mt-2" key={index}>
                                                            {item.map((listItem, listItemIndex) => (
                                                                <li className='mt-[0.3rem] text-justify' key={listItemIndex} dangerouslySetInnerHTML={{ __html: listItem }}></li>
                                                            ))}
                                                        </ul>
                                                    );
                                                }
                                            })}

                                        </ul>
                                    </div>
                                </Modal>
                            </div>
                        </CambioMedidorCard>
                    )
                })}

            </div >

        </div >
    )
}