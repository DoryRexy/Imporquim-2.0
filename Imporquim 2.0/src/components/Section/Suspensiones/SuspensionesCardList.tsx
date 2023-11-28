import Card from '@/components/Card/Card';
import ResponsiveTest from '@/components/utils/ResponsiveTest';

type Props = {
    activeCard: string
}



export default function SuspensionesCardList({ activeCard }: Props) {


    return (
        <div className='grid justify-center'>
            <div className='grid gap-10 justify-center justify-items-center
                
                md:grid-cols-3 md:justify-between my-10'>

                <Card url='/Hogar/Suspensiones/SuspensionesProgramadas'
                    img="/img/suspensiones/suspension_programada.svg"
                    classes='bg-ice_gris-200 '
                    state={activeCard == "suspension" ? "active" : "inactive"}
                    title="Suspensiones programadas" />
                <Card url='/Hogar/Suspensiones/Averias'
                    img="/img/suspensiones/averia_reportada.svg"
                    classes='bg-ice_gris-200 '
                    state={activeCard == "averia" ? "active" : "inactive"}
                    title='Averías reportadas' />
                <Card url='/Hogar/Suspensiones/ReportarAveria'
                    img="/img/suspensiones/reportar_averia.svg"
                    classes='bg-ice_gris-200 '
                    state={activeCard == "reportar" ? "active" : "inactive"}
                    title="Reportar mi avería" />
            </div>
        </div>

    );
}
