import IconCard from '@/components/Card/IconCard'
import tarjeta1 from "public/img/ayuda/tarjeta1.svg"
import tarjeta2 from "public/img/ayuda/tarjeta2.svg"
import tarjeta3 from "public/img/ayuda/tarjeta3.svg"
import tarjeta4 from "public/img/ayuda/tarjeta4.svg"
import tarjeta5 from "public/img/ayuda/tarjeta5.svg"
import tarjeta6 from "public/img/ayuda/tarjeta6.svg"
import tarjeta7 from "public/img/ayuda/tarjeta7.svg"
import tarjeta8 from "public/img/ayuda/tarjeta8.svg"


type Props = {}

export default function CanalesAtencion({ }: Props) {
    const colorTarjeta = "bg-ice_verde-950"
    return (
        <div className='grid justify-center mb-16 '>

            <div className=' border-2  grid max-w-5xl bg-ice_gris-200 rounded-md shadow-lg '>
                <div className='grid mx-4 text-center  text-2xl mt-14 '>
                    <p className='font-semibold'>Ponemos a su disposición los siguientes canales de atención:</p>
                </div>
                {/**GESTIÓN */}
                <div className=' my-10 '>
                    <span className='font-bold text-xl text-center text-ice_azul-950'>
                        <h3>Gestión</h3>
                    </span>
                    <div className='grid justify-center gap-4 lg:gap-20 md:grid-flow-col '>


                        <div className="justify-center content-center ">
                            <IconCard img={tarjeta1} bgColor={colorTarjeta} />
                            <p className='text-center text-ice_azul-950'>Agencia Virtual <br />Electricidad</p>

                        </div>
                        <div className="justify-center content-center">
                            <IconCard img={tarjeta2} bgColor={colorTarjeta} />
                            <p className='text-center text-ice_azul-950'>App móvil <br />   ICE Electricidad  </p>
                        </div>
                        <div className="justify-center content-center">
                            <IconCard img={tarjeta3} bgColor={colorTarjeta} />
                            <p className='text-center text-ice_azul-950'>Correo electrónico <br />icelec@ice.go.cr</p>
                        </div>
                    </div>
                </div>
                {/**REPORTES */}
                <div className=' my-10 '>
                    <span className='font-bold text-xl text-center text-ice_azul-950'>
                        <h3>Reportes</h3>
                    </span>

                    <div className='grid justify-center gap-4 lg:gap-20 md:grid-flow-col '>


                        <div className="justify-center content-center">
                            <IconCard img={tarjeta4} bgColor={colorTarjeta} />
                            <p className='text-center text-ice_azul-950'>Averías eléctricas <br />1026</p>

                        </div>
                        <div className="justify-center content-center">
                            <IconCard img={tarjeta8} bgColor={colorTarjeta} />
                            <p className='text-center text-ice_azul-950'>Averías cargadores <br /> 8000ICELEC <br />
                                (8000-423532)  </p>
                        </div>
                        <div className="justify-center content-center">
                            <IconCard img={tarjeta2} bgColor={colorTarjeta} />
                            <p className='text-center text-ice_azul-950'>App móvil <br />   ICE Electricidad  </p>
                        </div>
                    </div>
                </div>
                {/**CONSULTAS */}
                <div className=' my-10 '>
                    <span className='font-bold text-xl text-center text-ice_azul-950'>
                        <h3>Consultas</h3>
                    </span>

                    <div className='grid justify-center gap-4 lg:gap-20 md:grid-flow-col '>


                        <div className="justify-center content-center">
                            <IconCard img={tarjeta5} bgColor={colorTarjeta} />
                            <p className='text-center text-ice_azul-950'>Chat Electricidad</p>

                        </div>
                        <div className="justify-center content-center">
                            <IconCard img={tarjeta6} bgColor={colorTarjeta} />
                            <p className='text-center text-ice_azul-950'>8000ICELEC <br /> (8000-423532) </p>
                        </div>
                        <div className="justify-center content-center">
                            <IconCard img={tarjeta7} bgColor={colorTarjeta} />
                            <p className='text-center text-ice_azul-950'>SMS 4233</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}