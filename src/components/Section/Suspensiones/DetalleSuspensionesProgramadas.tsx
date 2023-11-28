import InterrupcionesCard from '@/components/Card/InterrupcionesCard'
import { ParoProgramadoType } from '@/types/ParoProgramadoResponseType'
import { obtenerDetallesFecha, parseFecha } from '@/utils/stringUtils'

type Props = {
    data: ParoProgramadoType[]
}

export default function DetalleSuspensionesProgramadas({ data }: Props) {

    return (
        <div className='py-12 '>
            <section>
                <div className='text-center mb-12 '>
                    <h2 className='font-bold text-3xl text-ice_azul-950'>Suspensiones programadas</h2>
                </div>
                <div className='mx-8 my-8 md:my-20 md:mx-20 text-xl  text-justify'>
                    <p className='text-center'>Encuentre las actividades de mantenimiento programadas por nuestras
                        cuadrillas durante esta semana y así brindarle el servicio que usted se merece.</p>
                </div>
            </section>
            {/*<div>
                <pre>

                    {JSON.stringify(data, null, 4)}
                </pre>
    </div>*/}
            <section id="detalle" className=' grid gap-4 rounded-md  bg-ice_gris-200 mx-2 px-2 sm:px-6 md:px-10 lg:mx-28 lg:px-24 '>

                {
                    data.map((item) => {
                        const detalleFecha = parseFecha(item.fechaInicioString)
                        return (
                            <InterrupcionesCard dia={`${detalleFecha.numeroDia}`}
                                mes={detalleFecha.nombreMes}
                                nombreDia={detalleFecha.nombreDia}
                                state={item.nombreProvincia.toUpperCase()}
                                title={`${item.nombreCanton.toUpperCase()} - ${item.nombreDistrito.toUpperCase()}`}
                                start={item.fechaInicioString} end={item.fechaFinString}
                                localidades={item.localidadesAfectadas} >
                                <p>{item.detalleTrabajo}</p>
                            </InterrupcionesCard>
                        )
                    })
                }





            </section>
        </div>
    )
}