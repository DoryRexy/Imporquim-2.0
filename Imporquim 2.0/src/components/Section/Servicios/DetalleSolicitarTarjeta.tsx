import IconCard from '@/components/Card/IconCard'
import TextCard from '@/components/Card/TextCard'
import suscripcionIcon from "public/img/servicios/es_electrico_suscripcion.svg"
import beneficiosIcon from "public/img/servicios/es_electrico_beneficios.svg"
import tarifasIcon from "public/img/servicios/es_electrico_tarifas.svg"
import recordatorioIcon from "public/img/servicios/es_electrico_recordario.svg"
import consultasIcon from "public/img/servicios/es_electrico_consultas.svg"
import { classNames } from '@/utils/stringUtils'
import { TARIFA_ES_ELECTRICO } from '@/constants'



type Props = {}

export default function DetalleSolicitarTarjeta({ }: Props) {
    const gridIconClass = "grid  col-span-12 sm:col-span-4 bg-ice_gris-200 "
    const gridContentClass = "grid col-span-12 sm:col-span-8 bg-ice_gris-200 p-3"
    return (
        <div className='py-12 '>
            <section className='grid justify-center' >
                <div className='max-w-5xl  mx-4 px-2 '>
                    <div className='text-center mb-12 '>
                        <h2 className='font-bold text-3xl text-ice_azul-950'>Suscribirse</h2>
                    </div>
                    <div className='mx-8 my-8 md:my-20 md:mx-20 text-lg  text-justify'>
                        <p className=''>Mediante la aplicación <strong>“Es Eléctrico”</strong>, disponible próximamente, los conductores de automóviles eléctricos podrán autogestionar la recarga de su vehículo, en la red de 38 cargadores rápidos que están disponibles en el Área de concesión de la red eléctrica del ICE.</p>
                    </div>
                </div>
            </section>
            <section id="detalle" className=' grid  justify-center  '>
                <div className='max-w-5xl  bg-ice_gris-200 mx-4 px-2 rounded-md'>

                    <div className={classNames("grid grid-cols-12 dark:bg-neutral-700 bg-white  lg:mx-4  my-10 ")} >

                        <div className={`${gridIconClass} justify-center content-center`}>
                            <IconCard img={suscripcionIcon} bgColor='bg-ice_verde-950' />
                        </div>
                        <div className={`${gridContentClass} justify-center `}>
                            <TextCard
                                title='Suscríbase, es muy fácil: '
                                content="Complete el formulario de suscripción gratuita y acepte las condiciones. 
                            La información que se le solicita será de uso confidencial. 
                            Con la suscripción usted recibirá un dispositivo que lo identifica, 
                            podrá autogestionar y hacer uso de la red de cargadores rápidos ¡Es Eléctrico! en la aplicación,
                            próximamente disponible."
                            />
                        </div>
                        <div className={`${gridIconClass} justify-center content-center`}>
                            <IconCard img={beneficiosIcon} bgColor='bg-ice_verde-950' />
                        </div>
                        <div className={`${gridContentClass} justify-center`}>
                            <TextCard
                                title='El APP ¡Es Eléctrico! le ofrece beneficios:'
                                content="<ul class='list-disc ml-2 marker:text-ice_azul-950'><li>Active el GPS de su celular 
                                y podrá ubicar en el mapa la distancia a la que se encuentra de los cargadores. </li>
                                <li>Le permitirá ver el historial de recargas realizadas en la red de cargadores rápidos <strong>“Es Eléctrico”</strong>.
                                 <li>Podrá ver el detalle de cada recarga: monto, tiempo de carga, fecha, hora. </li>
                                 <li>Identificará de previo la disponibilidad del cargador de su conveniencia. </li>
                                 <li>Podrá bloquear su tarjeta en caso de extravío y solicitar una nueva o adicionales.</li>
                                 <li> Identificará los conectores disponibles en la estación de carga de su elección, que pueden ser: CHAdeMO, GB/T, CCSI.</li>"
                            />
                        </div>
                        <div className={`${gridIconClass} justify-center content-center`}>
                            <IconCard img={tarifasIcon} bgColor='bg-ice_verde-950' />
                        </div>
                        <div className={`${gridContentClass} justify-center`}>
                            <TextCard
                                title='Tarifa y medios de pago:'
                                content={`<ul class="list-disc ml-2 marker:text-ice_azul-950"><li>El precio del servicio es de ${TARIFA_ES_ELECTRICO} colones por minuto de conexión al cargador, más 13% del IVA.</li>
                            <li>Los medios de pago aceptados son tarjetas de débito o crédito, VISA o MasterCard.</li>
                            <li>El cobro del servicio inició el 26 de noviembre de 2022</li>`}
                            /></div>
                        <div className={`${gridIconClass} justify-center content-center`}>
                            <IconCard img={recordatorioIcon} bgColor='bg-ice_verde-950' />
                        </div>
                        <div className={`${gridContentClass} justify-center`}>
                            <TextCard
                                title='Recuerde: '
                                content="Las tarjetas que se dispusieron en las estaciones de carga rápida para el servicio gratuito 
                            quedaron inhabilitadas desde el 26 de noviembre de 2022, sólo se puede hacer uso de la red de carga rápida
                            ¡Es Eléctrico! solo bajo suscripción previa y con el dispositivo que se le entregará a cada usuario."
                            /></div>
                        <div className={`${gridIconClass} justify-center content-center`}>
                            <IconCard img={consultasIcon} bgColor='bg-ice_verde-950' />
                        </div>
                        <div className={`${gridContentClass} lg:justify-left`}>
                            <TextCard
                                title='Consultas y reportes: '
                                content="Para consultas y reporte de averías comuníquese al <strong> 
                          <a href='tel:(8000-423532'(8000-423532)'>8000ICELEC (8000-423532) </a></strong>."
                            /></div>
                    </div>
                </div>
            </section>
        </div>
    )
}