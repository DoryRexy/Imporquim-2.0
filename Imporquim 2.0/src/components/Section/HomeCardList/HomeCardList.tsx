import HomeCard from "@/components/Card/HomeCard";
import { classNames } from "@/utils/stringUtils";

type Props = {
  tiendaUrl: string,
  agenciaUrl: string
}

export default function HomeCardList({ tiendaUrl, agenciaUrl }: Props) {
  return (
    <div className="grid justify-center py-6 bg-[#fafafa] ">
      <div id="homeCardList" className={
        classNames(
          "grid  justify-center gap-4 xl:max-w-7xl justify-self-center md:grid-cols-2 md:justify-items-center xl:grid-cols-5 ",
          "overflow-hidden py-2",
          "bg-opacity-20 xl:mt-[-7.5rem] ")}>

        <HomeCard
          alt="Icono suspensiones"
          href="/Hogar/Suspensiones"
          img="/img/homeCards/Suspensiones.svg"
          titulo="Suspensiones Eléctricas"
          textColor="text-ice_azul-950"
          cssPersonalizado="bg-ice_gris-200" />

        <HomeCard
          href="/Hogar/Tramites/"
          alt="Icono de trámites"
          img="/img/homeCards/Tramites.svg"
          titulo="Trámites"
          textColor="text-ice_azul-950"
          cssPersonalizado="bg-ice_gris-200" />

        <HomeCard
          alt="Icono Es Electrico"
          href="Hogar/Servicios/EsElectrico"
          img="/img/homeCards/EsElectrico.svg"
          titulo="¡Es Eléctrico!"
          textColor="text-ice_azul-950"
          cssPersonalizado="bg-ice_gris-200" />

        <HomeCard external={true}
          alt="Icono Agencia"
          href={agenciaUrl}
          img="/img/homeCards/AgenciaVirtual.svg"
          titulo="Agencia Virtual"
          textColor="text-ice_azul-950"
          cssPersonalizado="bg-ice_gris-200" />

        <HomeCard external={true}
          alt="Icono Carrito"
          href={tiendaUrl}
          img="/img/homeCards/carrito.svg"
          titulo="Tienda ICE"
          textColor="text-ice_azul-950"
          cssPersonalizado="bg-ice_gris-200" />

      </div>
    </div>

  );
}
