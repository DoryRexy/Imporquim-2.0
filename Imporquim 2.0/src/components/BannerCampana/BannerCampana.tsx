import { ES_ELECTRICO_URL } from "@/constants";
import { classNames } from "@/utils/stringUtils";
import CustomButton from "../CustomButton/CustomButton";
import Image from "next/image";
type Props = {};

export default function BannerCampana({ }: Props) {

  return (
    <section className="relative">
      <div className="h-60 md:h-62 lg:h-72 xl:h-[25rem] 2xl:h-[27rem]  overflow-hidden hover: ">

        <img src="/img/campaña/1440.svg" width={1024} height={285} alt="banner de campaña" className="hidden w-full" />
        <img src="/img/campaña/390.svg" width={390} height={234} alt="banner de campaña" className="grid sm:hidden object-cover w-full" />
        <img src="/img/campaña/640.svg" width={640} height={234} alt="banner de campaña" className="hidden sm:grid md:hidden object-cover w-full" />
        <img src="/img/campaña/768.svg" width={768} height={219} alt="banner de campaña" className="hidden md:grid lg:hidden object-cover w-full" />
        <img src="/img/campaña/1024.svg" width={1024} height={285} alt="banner de campaña" className="hidden lg:grid xl:hidden object-cover w-full" />
        <img src="/img/campaña/1440.svg" width={1440} height={404} alt="banner de campaña" className="hidden xl:grid object-cover w-full" />
      </div>
      {/*<div className="absolute top-1 font-medium sm:top-3 lg:top-14 text-white">
        <p className={classNames("max-w-[16rem] sm:max-w-[18rem] md:max-w-sm lg:max-w-none",
          "mx-4 sm:mx-6 md:mx-20 text-base md:text-xl lg:text-2xl 2xl:text-3xl")}>
          La primera red de cargadores rápidos del país
        </p>
      </div>
      <div className={classNames("absolute top-20 mx-4 sm:top-16 md:top-20 lg:top-40",
        "md:mx-20 hover:-translate-y-0.5 hover:scale-105 duration-200")}>
        <img className="md:hidden" src="/img/campaña/es_electrico.svg" width={290} />
        <img className={classNames("hidden md:grid lg:hidden")}
          src="/img/campaña/es_electrico.svg" width={390} />
        <img className={classNames("hidden lg:grid")}
          src="/img/campaña/es_electrico.svg" width={600} />
      </div>
      */}
      <div className="absolute bottom-3 md:bottom-12 lg:bottom-12 xl:bottom-20 2xl:bottom-10 left-1/3 lg:left-1/3 ">
        <CustomButton title="SUSCRÍBASE" classes="bg-ice_azul-950" onClick={() => {
          window.open(ES_ELECTRICO_URL, '_blank')
        }} ></CustomButton>
      </div>
    </section>


  );
}
