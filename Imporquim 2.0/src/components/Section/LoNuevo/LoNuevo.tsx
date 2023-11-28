import CardNewsVertical from "@/components/CardNews/CardNewVertical";
import CardNews2Segmentos from "@/components/CardNews/CardNews2Segmentos";
import CardNews4lados from "@/components/CardNews/CardNews4lados";


type Props = {
  title?: string;
};

export default function LoNuevo({ }: Props) {
  return (


    <div className="bg-white dark:bg-slate-500 my-10">
      <div className="grid h-12 justify-center pt-2 ">
        <p className="text-ice_azul-950 text-3xl font-bold">LO NUEVO</p>
      </div>

      <div className="justify-center"><hr className='hr-verde mx-0 md:mx-[250px] lg:mx-[350px] mb-10' /></div>

      <div className="sm:w-5/6 lg:xl:w-4/5 mx-auto ">
        <div className="flex  lg:xl:flex-row flex-col gap-3">
          <div className="md:lg:xl:w-5/6 1/1 shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]  lg:my-3 ">

            <CardNewsVertical
              title="MOVETE CON LIBERTAD"
              category="Micromovilidad Eléctrica"
              date="11 de Octubre, 4:00 pm"
              image="/img/noticias/moto.svg"
              link="/Noticias/Movilidad"
              clasesfila1="flex justify-end text-xs "
              clasesfila2="text-md sm:pl-20 pt-6"
              clasesfila3="font-semibold text-2xl my-8 sm:pl-20"
              clasesfila4="text-justify  text-base sm:px-20 "
              clasesfila5=" grid justify-self-center py-6"
              clasesfila6="grid justify-center mt-4">
              <p>
                Con las bicicletas y motocicletas eléctricas podrás desplazarte de forma ágil y segura.
              </p>
            </CardNewsVertical>

          </div>
          <div className="w-1/1 ">
            <div className="flex flex-col h-full ">
              <div className="flex-grow shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]  m-3  bg-ice_verde-950 h-1/2">
                <CardNews2Segmentos
                  title="LANZAMIENTO TIENDA EN LÍNEA"
                  category="Tienda ICE"
                  image="/img/noticias/anuncioTienda.svg"
                  date={"11 de Octubre, 4:30 pm"}
                  link={"/Noticias/Tienda/"}
                  clases="bg-ice_azul-900 p-5 h-full"
                  claseshora="text-xs flex justify-end text-white"
                  clasesfila1="font-normal text-base text-white flex-grow"
                  clasesfila2="font-bold md:max-w-xs text-2xl text-white flex-grow pt-3 text-center w-full md:text-left"
                  clasesfila3="grid max-w-md justify-center justify-center my-2 pt-6"
                  clasesfila4="flex items-center gap-4 text-base"

                >
                  <p className="text-white text-left ">
                    La Tienda ICE le permitirá adquirir productos eléctricos innovadores, desde cualquier sitio, ingresando a www.tiendaice.com.
                  </p>
                </CardNews2Segmentos>

              </div>
              <div className="flex-grow shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] m-3 h-1/2 md:h-fit">
                <CardNews4lados
                  title="MEDICIÓN INTELIGENTE <BR/> DE AGUA"
                  category="Iiot"
                  imageBag="/img/noticias/medidor_splash.svg"
                  date={"11 de Octubre, 5:00 pm"}
                  link={"/Noticias/Medicion/"}
                  clases=""


                >
                  <p className="text-base">Este sistema de medición permitirá optimizar la gestión de distribuidores de agua potable.</p>
                </CardNews4lados>

              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
