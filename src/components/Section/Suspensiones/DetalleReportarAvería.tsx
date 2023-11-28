import SvgLoader from '@/components/Icons/SvgLoader'
import Link from 'next/link'

type Props = {
    agencia_url: string;
}


export default function DetalleReportarAvería({ agencia_url }: Props) {
    const TEXT_EFFECT = "easy-in opacity-80 hover:opacity-100 duration-200";
    const HOVER_EFFECT = "hover:bg-transparent  hover:-translate-y-0.5 hover:scale-105 duration-200"
    const agencia_url_final = agencia_url ? agencia_url : ""
    return (
        <div className='grid pt-16 '>

            <h2 className='flex justify-center text-3xl font-bold leading-3 text-ice_azul-950 '>
                Reportar mi avería
            </h2>
            <div className='grid justify-center mb-6'>
                <div className='mx-3 md:mx-20 max-w-5xl lg:mt-0'>

                    <p className='flex justify-center text-lg mt-10 text-justify'>
                        ¡Reporte su avería de manera rápida y sencilla mediante nuestra Agencia Virtual de Electricidad!
                    </p>
                </div>
            </div>

            <div className=' grid justify-center bg-ice_gris-200'>

                <div className='grid grid-cols-12 max-w-6xl '>

                    <div className='col-span-12  lg:col-span-6 lg:ml-12'>
                        <div className={`mt-6 grid justify-center ${HOVER_EFFECT}`}>
                            <img alt='imagen estamos conectados' width={600} src='/img/suspensiones/estamos_conectados.svg'></img>
                        </div>
                        <div className='grid justify-center mx-4 '>
                            <p className='text-lg'>
                                Para hacer sus consultas y trámites de electricidad
                                desde cualquier lugar, rápido y fácil.
                            </p>
                        </div>


                        <div className={`grid justify-center  ${HOVER_EFFECT}  `}>
                            <Link href={agencia_url_final} target='_blank' >
                                <SvgLoader classes='text-ice_azul-950' alt="computadora agencia" src='/img/suspensiones/compu_agencia.svg'></SvgLoader>
                                <p className='text-ice_azul-950 font-semibold'>Agencia virtual de Electricidad</p>
                            </Link>

                        </div>

                    </div>


                    <div className='grid mt-10 lg:mt-2 col-span-12 lg:col-span-6  lg:justify-center ' >
                        <div className='grid -translate-x-10 lg:w-[36rem] text-lg lg:-translate-x-28 '>
                            <img src="/img/suspensiones/muchachoEstamosConectados.svg" alt="joven agencia"></img>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}