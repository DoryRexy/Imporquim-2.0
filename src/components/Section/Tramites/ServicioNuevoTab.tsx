import TwoColumnsResponsive from '@/components/Container/TwoColumnsResponsive'
import CustomButton from '@/components/CustomButton/CustomButton'
import PlainButton from '@/components/CustomButton/PlainButton'
import PopoverButton from '@/components/DropDown/PopoverButton'
import Link from 'next/link'

type Props = {
    urlAgencia: string
}

export default function ServicioNuevoTab({ urlAgencia }: Props) {
    return (
        <div className=' font-medium mb-12'>

            <p className='font-bold text-center text-base mt-8'>
                Ingrese a nuestra <Link className='text-ice_azul-950 ' href={urlAgencia}>Agencia Virtual</Link> y realice sus trámites de forma rápida y sencilla.

            </p>
            <div className="p-10  font-normal mt-10 bg-gray-200 rounded-xl shadow-xl border-2  text-left" >
                <ul className='list-outside list-disc my-4 marker:text-ice_azul-950'>
                    <li>
                        Solicitud de servicio provisional (se da por 6 meses, puede ampliarse).
                    </li>
                    <li>
                        Solicitud de servicio definitivo (una vez concluida la obra).
                    </li>
                    <li>
                        Presentación del documento que emite el CFIA indicando que la obra está finalizada.
                    </li>
                </ul>
                <p className='text-justify'>
                    Una vez instalado el servicio, en la primera factura se cargará un depósito de garantía, el cual se calcula con base en la carga declarada por el cliente. <br></br>
                    Este depósito se ajustará cuando el servicio se suspenda por falta de pago, tomando como promedio las últimas seis facturaciones. <br></br>
                    Este depósito será devuelto al cliente, en el caso de que renuncie al servicio eléctrico y se encuentre al día en sus obligaciones por el servicio.
                </p>
            </div>
            {/** SERVICIO TEMPORAL */}
            <TwoColumnsResponsive title='Servicio Temporal' img="/img/tramites/temporal.svg">
                <p>
                    Este servicio aplica para instalaciones en ferias, turnos, circos y otros semejantes por un periodo menor a seis meses.
                </p>
                <p className='mt-2'>
                    El abonado deberá cubrir los costos de conexión y desconexión, instalación y reconexión de líneas, transformadores y cualquier otro aparato o equipo, más el costo de los materiales usados.
                </p>

                <div className='grid mt-5 lg:grid-cols-2 gap-6 '>

                    <div className=' '>
                        <PopoverButton title='Requisitos' bgColor='bg-ice_azul-950' img="/img/tramites/personaFisica.svg">
                            <div className="bg-ice_azul-200 text-black p-4 ">

                                <p className=''><strong> Demanda o carga requerida menor a 10 kVA</strong></p>
                                <ul className='list-disc marker:text-ice_azul-950 ml-4'>
                                    <li>Cumplir con los requisitos generales obligatorios.</li>
                                    <li>permiso Municipal para realización de la actividad.</li>
                                    <li>Nota del cliente con declaración de la carga (kW) a instalar, para el cálculo del depósito de garantía.</li>
                                </ul>
                                <p className='mt-2'><strong> Demanda o carga requerida es igual o mayor 10 kVA</strong></p>
                                <ul className='list-disc marker:text-ice_azul-950 ml-4'>
                                    <li>Cumplir con los requisitos generales obligatorios.</li>
                                    <li>Permiso Municipal para realización de la actividad.</li>
                                    <li>Boleta de Sellado de planos eléctricos del CFIA.</li>
                                    <li>Nota con declaración de la carga (kW) a instalar, para el cálculo del depósito de garantía.</li>
                                    <li>Copia de la lámina eléctrica con el diagrama unifilar.</li>
                                </ul>
                                <p className='mt-2'><strong> Notas:</strong></p>
                                <ul className='list-disc marker:text-ice_azul-950 ml-4'>
                                    <li>El diagrama unifilar debe mostrar la cantidad de servicios eléctricos que se necesitan.</li>
                                    <li>Dicha boleta puede consultarse en el sitio Web del CFIA.</li>
                                    <li>La tarifa aplicable a estos servicios será la general incluyendo el cobro de máxima demanda, si fuera el caso.</li>
                                </ul>
                            </div>
                        </PopoverButton>
                    </div>
                    <div className=' '>
                        <PlainButton showImage={false}
                            title='Normativa Técnica' bgColor='bg-ice_azul-950'
                            onClick={() => {
                                window.open("/docs/normativa/ServicioEventosTemporales_2020.pdf", '_blank')
                            }} ></PlainButton>

                        {/*
                            <CustomButton title="Normativa Técnica  >" classes="bg-ice_azul-950" onClick={() => {
                            window.open("/docs/normativa/ServicioEventosTemporales_2020.pdf", '_blank')
                        }} />
                    */}
                    </div>

                </div>
            </TwoColumnsResponsive>

            {/**SERVICIO PROVISIONAL **/}
            <TwoColumnsResponsive img="/img/tramites/provisional.svg" title='Servicio Provisional'>
                <p>
                    Este servicio aplica para construcciones, remodelaciones (de edificios no ocupados) y otros semejantes por un periodo de seis meses prorrogable.
                    Durante el periodo de construcción de la obra el servicios tendrá un cobro en tarifa general.
                </p>
                <p className='mt-2'>
                    Las instalaciones temporales deberán cumplir con las disposiciones del <b>"Reglamento de oficialización del Código Eléctrico de Costa Rica para la seguridad de la vida y de la propiedad"</b>
                    (Decreto Ejecutivo No 36979-MEIC), siendo el profesional responsable del diseño e inspección de las obras, el responsable por el estado de la instalación eléctrica interna.
                </p>
                <div className='grid mt-5 lg:grid-cols-2 gap-6'>
                    <div>
                        <PopoverButton title='Requisitos' bgColor='bg-ice_azul-950' img="/img/tramites/personaFisica.svg">
                            <div className="bg-ice_azul-200 text-black p-4 ">

                                <p className=''><strong> Demanda o carga requerida menor a 10 kVA</strong></p>
                                <ul className='list-disc marker:text-ice_azul-950 ml-4'>
                                    <li>Cumplir con los requisitos generales obligatorios.</li>
                                    <li>Certificación literal emitida por el Registro Nacional, certificación notarial o inscripción ante el Registro Público con no más de 30 días transcurridos desde su fecha de emisión.</li>
                                    <li>En caso de no ser el dueño registral, se requiere autorización del propietario.</li>
                                    <li>En caso de inmuebles no inscribibles, se requiere cualquier documento que demuestre su derecho de posesión, (ART. 32 –i de SUCOM) </li>
                                    <li>Boleta o número de “Solicitud de Sellado de Planos Eléctricos” emitida por el Colegio Federado de Ingenieros y Arquitectos de Costa Rica (CFIA), para la solicitud de conexión de servicio provisional. </li>
                                    <li>Cumplir con lo establecido por ARESEP sobre la Norma Técnica denominada “Instalación y Equipamiento de Acometidas Eléctricas”.</li>
                                </ul>
                            </div>
                        </PopoverButton>
                    </div>
                    <div>
                        <PlainButton showImage={false}
                            title='Normativa Técnica' bgColor='bg-ice_azul-950'
                            onClick={() => {
                                window.open("/docs/normativa/ServicioResidencialComercial_2020.pdf", '_blank')
                            }} ></PlainButton>
                        {/**<CustomButton title="Normativa Técnica  >" classes="bg-ice_azul-950" onClick={() => {
                        window.open("/docs/normativa/ServicioResidencialComercial_2020.pdf", '_blank')
                    }} /> */}
                    </div>


                </div>
            </TwoColumnsResponsive>

            {/** SERVICIO DEFINITIVO */}
            <TwoColumnsResponsive title='Servicio Definitivo' img="/img/tramites/definitivo.svg">
                <p>
                    Este servicio se brinda a:
                </p>
                <div className='mt-2'>
                    <ul className='list-disc marker:text-ice_azul-950 mx-4'>
                        <li>
                            Construcciones nuevas una vez concluidas las obra.
                        </li>
                        <li>
                            Inmuebles existentes que requieren de un servicio eléctrico.
                        </li>
                    </ul>

                </div>
                <p className='mt-2'>

                    <strong>Nota:</strong> En caso que tramite un tercero, deberá presentar autorización del interesado, autenticada por un abogado, sobre el trámite a realizar.
                </p>
                <div className='grid mt-5 lg:grid-cols-2 gap-6'>
                    <div className=''>
                        <PopoverButton title='Requisitos' bgColor='bg-ice_azul-950' img="/img/tramites/personaFisica.svg">
                            <div className="bg-ice_azul-200 text-black p-4 ">

                                <p className=''><strong> Demanda o carga requerida menor a 10 kVA</strong></p>
                                <ul className='list-disc marker:text-ice_azul-950 ml-4'>
                                    <li>Cumplir con los requisitos generales obligatorios.</li>
                                    <li>Certificación literal emitida por el Registro Nacional, certificación notarial o inscripción ante el Registro Público con no más de 30 días transcurridos desde su fecha de emisión. </li>
                                    <li>En caso de no ser el dueño registral, se requiere autorización del propietario. </li>
                                    <li>En caso de inmuebles no inscribibles, se requiere cualquier documento que demuestre su derecho de posesión, <strong>(ART. 32 –i de SUCOM)</strong>  </li>
                                    <li>Boleta <strong>“Constancia de Recibido”</strong> para el cambio de provisional a definitivo, emitida por el Colegio Federado de Ingenieros y Arquitectos de Costa Rica (CFIA). </li>
                                    <li>En caso de inmuebles ya construidos, aportar la boleta o número de <strong>“Solicitud de Sellado de Planos Eléctricos”</strong>, emitida por el CFIA. </li>
                                    <li> Copia de la lámina eléctrica, donde esté el diagrama unifilar, firmado por el ingeniero responsable <strong>(Art. 12 SUINAC)</strong>, debe especificar calibres y material de cableado.</li>
                                    <li> Boleta de Visado eléctrico autorizada por el CFIA</li>
                                    <li>Carga (KW) a instalar, para el cálculo del depósito de garantía. </li>
                                    <li>Cancelar el depósito de garantía </li>
                                    <li>Cumplir con lo establecido por ARESEP sobre la Norma Técnica denominada <strong>“Instalación y Equipamiento de Acometidas Eléctricas”</strong>. </li>
                                    <li><strong>Nota:</strong> De no contar con la capacidad eléctrica que soporte la carga solicitada y se requiera instalar transformadores o extensión de líneas adicionales, el ICE no está en la obligación de brindar el servicio, salvo que el interesado corra con los gastos y solicite el Estudio de Ingeniería correspondiente. </li>
                                    <li> </li>
                                </ul>
                            </div>
                        </PopoverButton>
                    </div>
                    <div>
                        <PlainButton showImage={false}
                            title='Normativa Técnica' bgColor='bg-ice_azul-950'
                            onClick={() => {
                                window.open("/docs/normativa/ServicioResidencialComercial_2020.pdf", '_blank')
                            }} ></PlainButton>
                        {/** <CustomButton title="Normativa Técnica  >" classes="bg-ice_azul-950  " onClick={() => {
                        window.open("/docs/normativa/ServicioResidencialComercial_2020.pdf", '_blank')
                    }} />*/}
                    </div>
                </div>
            </TwoColumnsResponsive>

        </div>
    )
}