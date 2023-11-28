import BgCard from '@/components/Card/BgCard'
import TextCard from '@/components/Card/TextCard'

type Props = {}

export default function DetalleGuiasUso({ }: Props) {
    return (
        <div className='py-12 '>
            <section className='grid justify-center'>
                <div className='grid justify-center max-w-5xl  mx-4 px-2'>

                    <div className='text-center'>
                        <h2 className='font-bold text-3xl text-ice_azul-950'>Guías de uso</h2>
                    </div>
                    <div className='grid  my-8  justify-center  '>
                        <div className='text-justify lg:text-lg '>

                            <p className=''>La red de carga <strong>¡Es Eléctrico!</strong> pone a su disposición dos tipos de cargadores, los rápidos y los semi rápidos.
                                Conozca las guías de uso de los cargadores, así como las indicaciones de uso según el tipo de conector disponible.</p>
                            <br></br>
                            <p >Las guías de uso pueden cambiar según el modelo del cargador, se le recomienda identificar la guía correspondiente con el cargador según la ubicación en el mapa.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="cargadores" className=' grid  gap-10 justify-center    '>

                <div className='max-w-5xl  bg-ice_gris-200 mx-4 px-2 '>
                    <div id="cargador-rapido" className=' grid md:grid-cols-2 lg:grid-cols-12  border border-opacity-10 rounded-lg border-ice_gris-300  '>
                        <div className=' grid content-center justify-center py-4 lg:col-span-4 '>
                            <BgCard title="Cargador Rápido" bgColor='bg-ice_azul-950' img="/img/servicios/fastCharger.svg" />

                        </div>
                        <div className='grid lg:col-span-8  bg-ice_gris-200 p-4  gap-2'>
                            <TextCard title='Cargador rápido con conectores CCS1, CHAdeMO y GB/T'
                                url='/docs/guias/GuiadeUso_Rapido3.png'
                                external
                                content="Estos cargadores se encuentran en la mayoría de estaciones de carga del país."
                                txtRef='Ver más (archivo adjunto)' />

                            <TextCard title='Cargador rápido con conectores CCS1 y CHAdeMO'
                                content="Estos cargadores se encuentran ubicados en Agencia Liberia, Estación Servicio Barranca, Dominical, Cóbano, Upala, Jacó, Horquetas de Sarapiquí y Cruce Limonal."
                                external
                                url='/docs/guias/GuiadeUso_Rapido2.png'
                                txtRef='Ver más (archivo adjunto)' />

                            <TextCard title='Cargador rápido con conectores CCS1 y CHAdeMO'
                                url='/docs/guias/GuiadeUso_Rapido1.png' external
                                content="Estos cargadores se encuentran ubicados en Alajuela y Puriscal."
                                txtRef='Ver más (archivo adjunto)' />
                        </div>
                    </div>
                    <div id="cargador-semirapido" className=' grid md:grid-cols-2 lg:grid-cols-12 border border-opacity-10 rounded-lg border-ice_gris-300 mt-8 '>
                        <div className=' grid content-center justify-center py-4 lg:col-span-4'>
                            <BgCard title="Cargador Semi-Rápido" bgColor='bg-ice_azul-950' img="/img/servicios/simpleCharger.svg" />

                        </div>
                        <div className='grid gap-6 bg-ice_gris-200 p-4 lg:col-span-8'>
                            <TextCard title='Cargador semi-rápido con conector tipo SAJ 1772'
                                content="Cargador ubicado en Sabana Norte."
                                url='/docs/guias/GuiadeUso_SemiRapido2.png' external
                                txtRef='Ver más (archivo adjunto)' />
                            <TextCard content="Si se requiere, puede consultar en el mapa de estaciones de carga la ubicación de este tipo de cargador."
                                url='/docs/guias/GuiadeUso_SemiRapido1.png' external
                                title='Cargador semi-rápido con conectores tipo SAJ 1772'
                                txtRef='Ver más (archivo adjunto)' />

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}