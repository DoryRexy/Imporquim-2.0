import React from 'react'
import Image from 'next/image'
import helpIcon from "../../../public/img/bannerAyuda/helpIconBig.png"
import helpBannerMen from "../../../public/img/bannerAyuda/HelpBannerMen.png"
type Props = {}

export default function BannerAyuda({ }: Props) {

  const mensaje = "Seleccione alguno de los medios por los cuales desea obtener ayuda."

  return (
    <div className="helpBanner w-full h-1/3 md:h-96 ">
      <div className='grid grid-cols-2 h-full'>
        <div className='grid content-end mb-10'>
          <div className=' grid grid-flow-row sm:grid-flow-col gap-5 content-center '>
            <span className='grid justify-end sm:justify-end'>
              <Image alt='icono ayuda' width={150} src={helpIcon}></Image>
            </span>
            <span className='grid justify-end sm:justify-start text-center '>
              <h1 className="text-6xl font-bold text-ice_azul-950">Ayuda</h1>
            </span>
          </div>

          <div className='grid text-justify mt-6'>
            <p className=' justify-self-end font-normal text-ice_azul-950 w-5/6 '>
              {mensaje}</p>
          </div>
        </div>

        <div className='grid content-end'>
          <Image alt="Ayuda Persona Imagen" src={helpBannerMen} width={470}></Image>
        </div>
      </div>

    </div>
  )
}