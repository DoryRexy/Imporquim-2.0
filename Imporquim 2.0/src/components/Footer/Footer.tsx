import Link from "next/link";
import packageInfo from '../../../package.json';
import Image from "next/image";
import FooterLink from "./FooterLink";
import FooterLinkType from "@/types/FooterLinkType";
import { capitalizarPrimeraLetra } from '@/utils/stringUtils'
import SvgLoader from "../Icons/SvgLoader";
const data: FooterLinkType[] = [
  {
    title: "Telefonos",
    img: "/img/footer/phone.svg",
    srOnly: "",
    link: "tel:8000-"
  },
  {
    title: "Facebook",
    img: "/img/footer/facebook.svg",
    srOnly: "Link a Facebook",
    link: "https://www.facebook.com/imporquin"
  },
  {
    title: "Twitter",
    img: "/img/footer/x.svg",
    srOnly: "Link a Twitter",
    link: "https://twitter.com/@imporquin"
  },
  {
    title: "Instagram",
    img: "/img/footer/instagram.svg",
    srOnly: "Link a Instagram",
    link: "https://www.instagram.com/imporquin/"
  },
  {
    title: "Youtube",
    img: "/img/footer/youtube.svg",
    srOnly: "Link a Youtube",
    link: "https://www.youtube.com/@imporquin "
  }
]

export default function Footer() {
  let date: Date = new Date();
  //const options: DateTimeOptions = { weekday: 'long', month: 'long', day: 'numeric' };
  const options: Intl.DateTimeFormatOptions = {
    //formatMatcher: "best fit",
    dateStyle: "full",
    //timeStyle: "full" ,
    //dayPeriod: "long",
    //fractionalSecondDigits: 2
  };



  const formattedDate = capitalizarPrimeraLetra
    (date.toLocaleDateString("es-CR", options))
    .replace(",", "");

  return (
    <section className="">
      <div className="grid  px-0 py-10 mx-auto space-y-8 overflow-hidden md:px-6 lg:px-8">
        <div className="flex flex-wrap gap-5 md:gap-10 lg:gap-16 justify-center mt-2">
          {
            /** **/
            data.map((item) => {
              return (
                <FooterLink url={item.link} key={item.title}>
                  <span className="sr-only">{item.srOnly}</span>
                  <SvgLoader src={item.img} alt={item.srOnly} ></SvgLoader>
                </FooterLink>
              )
            })
          }

        </div>
        <div className="mt-8 text-xs leading-6 text-center">
          <p className="">
            {formattedDate}           </p>
          <p>Imporquin © Todos los derechos reservados</p>
          <Link href="/privacidad">
            <p className="mt-0 leading-6 text-center underline hover:translate-y-0.5 duration-200 ">
              Política de privacidad
            </p>
          </Link>
        </div>
        <div className="w-full flex justify-center text-xs ">

          <p id="version" className="px-1">v{packageInfo.version}</p>
        </div>
      </div>
    </section>
  );
}
