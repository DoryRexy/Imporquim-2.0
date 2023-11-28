import defaultImage from "../../../public/img/tecer-banner.png"

import Image from 'next/image'
import SvgLoader from "../Icons/SvgLoader";
type Props = {
    title: string;
    paragraph?: string;
    icon?: string;
    img: string;
    classes?: string;
    imgClasses?: string
    imgWidth?: number
    imgHeight?: number
    inlineTitle?: boolean
}
/**
 * Banner genérico reutilizable
 * @param title Es un título corto de 2 palabras
 * @param paragraph Es un texto pequeño debajo del title
 * @param img es la imagen que se muestra a un lado
 * @param icon Es el icono que se muestra sobre el title
 * @param clasess Clases de css adicionales que puede recibir el div principal
 * @param imgWidth Ancho de la imagen
 * @param imgHeight Alto de la imagen
 * @returns 
 */

export default function BannerTexto({ title, paragraph, img, icon, classes, imgClasses, imgHeight, imgWidth }: Props) {
    const finalWidth = imgWidth ? imgWidth : 400
    const finalHeight = imgHeight ? imgHeight : 200
    return (

        <div className='banner-back p-10 pb-28' >
            <div className="md:columns-2 sm:columns-1">
                <div className='grid justify-center sm:2 p-11 mt-10'>
                    <div className="flex place-content-center border-4 ">

                        <SvgLoader alt="Icono" src="/img/ayuda/helpIcon.svg" classes="text-ice_azul-950 "></SvgLoader>
                        <h1 className='font-sans font-extrabold text-ice_azul-950 text-7xl'
                            dangerouslySetInnerHTML={{ __html: title }}></h1>

                    </div>
                    <h1 className='font-sans font-extrabold text-ice_azul-950 text-7xl'
                        dangerouslySetInnerHTML={{ __html: title }}>

                    </h1>
                    <p className='text-ice_azul-950 max-w-md text-lg text-justify mt-4'>
                        {paragraph}
                    </p>
                </div>
                <div>
                    <SvgLoader alt="banner" src="v-electrico.svg" ></SvgLoader>
                    {/*<img className='pb-10' src='/img/v-electrico.svg'></img>*/}
                </div>
            </div>
        </div >
    )
}