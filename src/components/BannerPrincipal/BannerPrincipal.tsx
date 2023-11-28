import React from 'react'

type Props = {}

export default function BannerPrincipal({ }: Props) {
  //bg-gradient-to-r  bg-gradient-radial bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
  const gradient: string = "bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-ice_verde-300 via-ice_verde-100 to-ice_verde-600"
  return (

    <div className={`${gradient}  p-2 mt-8 md:mt-0 md:px-4 md:py-8 lg:pb-28`}>
      <div className="grid grid-cols-12 gap-0 place-content-center  ">
        {/** ICONOS */}
        <div className='hidden md:grid place-content-between
          md:col-span-1'>
          <img src="/img/bannerPrincipal/iconoFlor.svg"></img>
          <img src="/img/bannerPrincipal/iconoHome.svg"></img>
        </div>
        {/**TITULO Y TEXTO */}
        <div className='grid place-content-center gap-4 md:translate-x-10
        col-span-12 md:col-span-5 '>
          <h1 className='font-extrabold text-ice_azul-950 leading-10 text-center md:text-left
           text-[2.4rem] lg:text-7xl'>Electricidad <br />que impulsa</h1>
          <p className='text-ice_azul-950 max-w-md text-sm mt-0 lg:text-base '>
            Las nuevas tecnologías aplicadas al sector eléctrico
            tienen el potencial de aumentar la productividad, el bienestar social y económico de la población.</p>
        </div>
        {/** IMAGEN */}
        <div className='grid  col-span-9 md:col-span-5 '>
          <img className='pb-10' src='/img/bannerPrincipal/v-electrico.png'></img>
        </div>
        <div className=' grid col-span-3 md:col-span-1 place-content-between'>
          <img className='md:grid' src='/img/bannerPrincipal/iconoAuto.svg'></img>
          <img src='/img/bannerPrincipal/esencialCR.svg'></img>
        </div>
      </div>
    </div>

  )
}