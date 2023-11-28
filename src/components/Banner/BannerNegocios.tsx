import defaultImage from "public/img/tecer-banner.png"

import Image from 'next/image'
import SvgLoader from "../Icons/SvgLoader";
type Props = {
    title: string;
    icon?: string;
    img: string;
    classes?: string;
    imgClasses?: string
    imgWidth?: number
    imgHeight?: number;
    reverse?: boolean;
    children?: React.ReactNode
}
/**
 * Banner genérico reutilizable
 * @param title Es un título corto de 2 palabras
 * @param img es la imagen que se muestra a un lado
 * @param icon Es el icono que se muestra sobre el title
 * @param clasess Clases de css adicionales que puede recibir el div principal
 * @param imgWidth Ancho de la imagen
 * @param imgHeight Alto de la imagen
 * @returns 
 */

export default function BannerNegocios({ title, img, icon, classes, imgClasses, imgHeight, imgWidth, reverse, children }: Props) {
    const finalWidth = imgWidth ? imgWidth : 400
    const finalHeight = imgHeight ? imgHeight : 300
    //variable para debug
    const borderClasses = ""
    return (
        <div className={`${classes}   w-full grid grid-cols-12 lg:pt-8 xl:pt-24  `} >
            {/**IMAGENES DE FONDO **/}
            <div className="hidden col-span-12 sm:grid sm:grid-flow-col sm:col-span-1 
            xl:col-span-1 xl:grid-flow-row
            place-content-between opacity-40 ">
                <SvgLoader classes="w-56" src="/img/negocios/carIcon.svg" alt="Icono"></SvgLoader>
                <SvgLoader src="/img/negocios/homeIcon.svg" alt="Icono"></SvgLoader>
            </div>

            {/**TITULO **/}
            <div className={`${borderClasses}  grid col-span-12 sm:col-span-10 
            xl:col-span-4 
            justify-center content-center z-10 pt-3 2xl:justify-end `}>
                <div className=" grid gap-5 text-lg text-ice_azul-950 mx-2 px-4 my-3  lg:min-w-[20rem] xl:-translate-y-14 2xl:max-w-md   ">
                    <h1 className="text-[2.4rem] lg:text-7xl font-bold text-ice_azul-950 text-center">{title}</h1>
                    <div className="text-sm lg:text-base leading-5 justify-self-center xl:leading-5
                    xl:text-lg text-center md:text-left xl:mx-16  2xl:mx-12 2xl:translate-x-4 ">
                        {children}
                    </div>
                </div>

            </div>
            {/**IMAGEN PORTADA **/}
            <div className="grid  col-span-12 lg:col-span-9 sm:justify-center lg:justify-end
            xl:col-span-5
            content-end  ">
                <img className="sm:max-w-md xl:max-w-2xl " width={finalWidth} height={finalHeight} src="/img/negocios/portada.png" alt="Portada Negocios"></img>
            </div>
            {/**ESENCIAL **/}
            <div className="hidden   place-content-center justify-center content-center lg:grid lg:col-span-3 xl:col-span-1 xl:content-start ">
                <SvgLoader classes="w-56" src='/img/bannerPrincipal/esencialCR.svg' alt="Icono" />
            </div>


        </div >
    )
}