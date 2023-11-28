import FlipCard from '@/components/Card/FlipCard'
import React from 'react'

type Props = {}

export default function CardsTramites({ }: Props) {
    const textSize: string = "text-sm"
    const textJust: string = "text-left"
    const cardContent: string = `${textJust} ${textSize} grid place-content-center gap-2`
    return (
        <div className={`  grid justify-center  grid-flow-row md:grid-flow-col my-10 p-2 gap-4
        md:grid md:grid-cols-2 md:grid-rows-2 md:mx-20 xl:grid-cols-4 xl:grid-rows-1 xl:mx-16 `}>
            <FlipCard title='Suspensión por falta de pago' img="/img/tramites/cards/suspensionPago.svg" >
                <div className={`${cardContent}`}>
                    <p>El servicio eléctrico será suspendido cuando
                        no se cancele el monto de la factura después de su fecha de vencimiento.</p>
                    <p>Exceptuando los días viernes, sábados, domingos y vísperas de feriado.</p>
                </div>
            </FlipCard>
            <FlipCard title='Consulta historial de consumo' img="/img/tramites/cards/historial.svg" >
                <div className={`${cardContent}`}>
                    <p>
                        Podrá solicitar el detalle de los registros de consumo de su servicio ingresando a nuestra agencia virtual de electricidad.
                    </p>

                </div>

            </FlipCard>
            <FlipCard title='Reconexión del servicio' img="/img/tramites/cards/reconexion.svg">

                <div className={`${cardContent}`}>

                    <p>La reconexión del servicio se realizará de forma automática,
                        en un plazo máximo de 24 horas hábiles, una vez cancelada la factura pendiente.</p>
                </div>
            </FlipCard>
            <FlipCard title='Estudio por consumo' img="/img/tramites/cards/estudio.svg">
                <div className={`${cardContent}`}>

                    <p>
                        Si observa variaciones significativas en su consumo de electricidad o en el monto facturado,
                        tiene la opción de solicitar un estudio por consumo antes de la fecha de vencimiento de la factura.
                    </p>

                </div>
            </FlipCard>
        </div>
    )
}