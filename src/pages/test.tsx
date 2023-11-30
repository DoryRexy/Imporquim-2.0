import AccordionItem from "@/components/AccordionItem/AccordionItem";
import BannerNegocios from "@/components/Banner/BannerNegocios";
import BannerPrincipal from "@/components/BannerPrincipal/BannerPrincipal";
import Card from "@/components/Card/Card";
import FlipCard from "@/components/Card/FlipCard";
import CardHome from "@/components/Card/HomeCard";
import MainLayout from "@/layout/MainLayout";
type Props = {};

export default function test({}: Props) {
  return (
    <MainLayout>
      <div className="grid place-content-center mt-14">
        <BannerPrincipal children={undefined} />
      </div>
      <div className="w-">

      </div>
<div className="place-content-center">
<h1 className="font-bold text-current leading-10 md:text-lefts text-center
           text-[2.4rem] lg:text-5xl">      
  EMPRESAS
</h1>
</div>
      <div className=" grid grid-flow-col col-span-8  place-content-center align-middle justify-cente mt-10">
        <div className=" col-span-2 mt-0 mr-11">
          <CardHome href={""} img={"img/empresas/APV.svg"} titulo={""} alt={"imagen"}/>
        </div>
        </div>
    </MainLayout>
  );
}
