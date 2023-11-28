import Card from '@/components/Card/Card'

type Props = {
    activeCard: string
}

export default function ServiciosCardList({ activeCard }: Props) {


    return (
        <div className='grid justify-center'>

            <div className=' grid gap-6 lg:gap-16 xl:gap-20 2xl:gap-32 justify-center justify-items-center
                md:grid-cols-3 md:justify-between my-16'>

                <Card url='/Hogar/Servicios/EsElectrico/EstacionesCarga'
                    img="/img/servicios/EstacionRecarga.svg"
                    classes='bg-ice_gris-200 '
                    state={activeCard == "estaciones" ? "active" : "inactive"}
                    title="Estaciones de carga" />
                <Card url='/Hogar/Servicios/EsElectrico/GuiasUso'
                    img="/img/servicios/GuiaUso.svg"
                    classes='bg-ice_gris-200 '
                    state={activeCard == "guias" ? "active" : "inactive"}
                    title='Guías de uso' />
                <Card url='/Hogar/Servicios/EsElectrico/Suscribirse'
                    img="/img/servicios/SolicitarTarjeta.svg"
                    classes='bg-ice_gris-200 '
                    state={activeCard == "tarjeta" ? "active" : "inactive"}
                    title="Suscribirse" />
            </div>
        </div>
    )
}