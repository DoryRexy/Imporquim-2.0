import Link from "next/link";
import React from "react";
import SvgLoader from "../Icons/SvgLoader";
import { classNames } from "@/utils/stringUtils";


interface Props {
  children?: React.ReactNode;
  href: string;
  img: string;
  titulo: string;
  cssPersonalizado?: string;
  textColor?: string;
  external?: boolean;
  alt: string;
}

export default function CardHome(props: Props) {
  return (
    <Link href={props.href} target={props.external ? "_blank" : "_self"} className="max-h-[18rem] p-1 ">
      <div id="card" className={classNames(
        "overflow-hidden border-2 border-ice_gris-200 grid items-center duration-200 shadow-md",
        "w-60 h-full ",
        "mx-0 mb-0 sm:mx-0 md:mx-0 lg:mx-0 xl:mx-0",
        "xl:min-w-[14rem]  lg:min-w-[8rem]  rounded-lg  ",
        "hover:-translate-y-1 hover:drop-shadow-md ",
        "dark:bg-neutral-600 shadow-ice_gris-600 dark:shadow-ice_gris-900 ",
        `border dark:border-ice_gris-700 ${props.cssPersonalizado}`)}>


        <div className={` grid justify-center mt-8 mb-6  overflow-auto ${props.textColor}`}>
          <SvgLoader alt={props.alt} src={props.img} classes="max-w-[120px] max-h-[120px] " />
        </div>
        {props.children}
        <div className="  flex justify-center  content-center h-20">
          <p className={` dark:text-white font-medium text-2xl text-center mx-8  ${props.textColor}`}>
            {props.titulo}
          </p>
        </div>
      </div >
    </Link >

  );
}

