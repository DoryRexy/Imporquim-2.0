import Router from 'next/router'
import InfoCard from '../../Card/InfoCard'
import CustomButton from '../../CustomButton/CustomButton'


type Props = {}

export default function EstamosConectados({ }: Props) {
  return (

    <div className="grid grid-cols-12 bg-ice_gris-200 ">
      <div className="hidden lg:grid col-span-12 lg:col-span-5 justify-center lg:translate-x-16 2xl:translate-x-36 ">
        <img src="/img/conectados/joven.svg" width={600} alt='Imagen Joven' className=' grid self-end' />
      </div>

      <div className="col-span-12 lg:col-span-7">
        <div className=' max-w-[50rem]'>
          <div className="flex m-6 md:m-4 items-center justify-center  hover:scale-105 duration-200 ">
            <img src='/img/conectados/mediosDigitales.svg' className='' />
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
              <InfoCard clases="m-4 p-3"
                texto='Agencia Virtual de Electricidad'
                url='https://agenciaelectricidad.cn.ice.go.cr/'
                imagen='/img/conectados/icono-laptop.svg' />

              <InfoCard clases="m-4 p-3"
                texto='icelec@ice.go.cr'
                url='mailto:icelec@ice.go.cr'
                imagen='/img/conectados/icono-email.svg' />

              <InfoCard clases="m-4 p-3 "
                texto='App <strong>ICE Electricidad</strong> SMS <strong>4233</strong> '
                url='https://play.google.com/store/search?q=app+ice+electricidad&c=apps&hl=es&gl=US'
                imagen='/img/conectados/icono-movil.svg' />

              <InfoCard clases="m-4 p-3"
                texto='<b>8000-ICELEC</b> (8000-423-532)'
                url="tel:8000-423-532"
                imagen='/img/conectados/icono-fijo.svg' />
            </div>

          </div>

          <div className=" flex justify-center items-center my-8">
            <CustomButton title="HORARIOS" classes="bg-ice_azul-950 "
              onClick={() => {
                Router.push('/Ayuda/Agencias')
              }} />
          </div>
        </div>
      </div>
    </div>


  )
}