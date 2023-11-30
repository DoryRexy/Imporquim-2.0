import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import Carrousel from "../Test/Carrousel";

type Props = {
  children: React.ReactNode;
  autoSlider?: boolean;
  autoSliderInterval?: number;
};

export default function BannerPrincipal({}: Props) {
  //bg-gradient-to-r  bg-gradient-radial bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
  const gradient: string =
    "bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-ice_verde-300 via-ice_verde-100 to-ice_verde-600";
  return (
    <div className={`${gradient}  p-2 mt-8 md:mt-0 lg:pb-28 max-w-7xl`}>
      <div className="grid grid-cols-12 gap-0 place-content-center  ">
        {/**TITULO Y TEXTO */}
        <div
          className="grid place-content-center gap-4 md:translate-x-10
        col-span-10 md:col-span-6 "
        >
          <h1
            className="font-extrabold text-current leading-10 text-center md:text-left col-span-5
           text-[2.4rem] lg:text-7xl"
          >
            ¿Qué es <br />
            Imporquim?
          </h1>
          <p className="text-current max-w-md text-sm mt-0 lg:text-base ">
            Somos una empresa dedicada a trabajar por la rentabilidad y
            sostenibilidad del negocio de nuestros clientes a través de la
            provisión de materias primas.
          </p>
        </div>
        {/** IMAGEN */}
        <div className="grid  col-span-9 md:col-span-6 ">
          <img src="img/logos/logoNegro.png" alt="IMAGEN DEL FRENTE " />
        </div>
      </div>
    </div>
  );
}
