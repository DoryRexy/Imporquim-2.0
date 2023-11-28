import { deprecate } from "util";
import defaultImage from "../../../public/img/tecer-banner.png"

import Image from 'next/image'
type Props = {
    title: string;
    icon?: string;
    img: string;
    classes?: string;
    imgClasses?: string
    imgWidth?: number
    imgHeight?: number
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

export default function Banner({ title, img, icon, classes, imgClasses, imgHeight, imgWidth }: Props) {
    const finalWidth = imgWidth ? imgWidth : 400
    const finalHeight = imgHeight ? imgHeight : 200
    return (
        <div className={`${classes}  w-full h-1/3 md:h-96`} >
            <div className='grid grid-cols-1 sm:grid-cols-2 h-full'>
                <div className='grid grid-flow-row mt-8 sm:mt-0s md:grid-flow-col content-center gap-5'>
                    <div className='grid justify-center'>
                        <span className="w-28 h-28 md:w-32 md:h-32 ">
                            <Image alt='icono ayuda'
                                src={icon ? icon : defaultImage}
                                sizes="(min-width: 10px) 10vw" />
                        </span>
                    </div>
                    <span className='grid justify-center content-center text-center '>
                        <h1 className="text-5xl sm:text-6xl font-bold text-ice_azul-950">{title}</h1>
                    </span>
                </div>

                <div className={`${imgClasses}`}>
                    <Image alt="Banner Servicios"
                        priority={true}
                        src={img} width={finalWidth} height={finalHeight}></Image>
                </div>
            </div>

        </div >
    )
}