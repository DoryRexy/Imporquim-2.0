import CustomButton from "@/components/CustomButton/CustomButton"


type Props = {
}

export default function ConsultaFacturaBak({ }: Props) {

  return (
    <div className='grid justify-center mb-20 drop-shadow-2xl' >
      <div className=' sm:columns-1 md:lg:xl:columns-2 max-w-md lg:max-w-6xl gap-0'>
        <div className='flex sm:justify-center md:lg:xl:justify-end'>
          <img src='/img/servicioalcliente.svg'></img>
        </div>
        <form className='text-center bg-azul-gradiente rounded-b-3xl md:lg:xl:rounded-bl-none md:lg:xl:rounded-br-3xl md:lg:xl:rounded-tr-3xl h-[448px] '>
          <div className="mb-1 ">
            <h1 className='align-middle pt-20 pb-5 text-white text-3xl font-bold'>Consulte su factura</h1>
          </div>
          <div> <hr className='hr-blanco' /></div>
          <div className="mb-16 mt-16">
            <input type="text" className='object-center rounded-md p-3' placeholder='Nise'></input>
          </div>
          <div className='mt-10'>
            <CustomButton title="Consultar" classes="bg-ice_verde-950" onClick={() => alert("Debe 12000 colones")} />
          </div>

        </form>

      </div>

    </div>
  )
}