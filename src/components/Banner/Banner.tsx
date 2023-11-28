
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

export default function Banner({ title, img, icon, classes, imgClasses, imgHeight, imgWidth, reverse, children }: Props) {
    const finalWidth = imgWidth ? imgWidth : 400
    const finalHeight = imgHeight ? imgHeight : 200
    //variable para debug
    const borderClasses = " "
    return (
        <div className={`${classes} overflow-hidden lg:h-[27rem] xl:h-[30rem]   w-full flex flex-col 
            ${reverse ? ' lg:flex-row-reverse' : 'flex-col lg:flex-row'}`} >
            {/**DESCRIPCIONES */}
            <div className={`${borderClasses}   flex-1 flex ${reverse ? 'xl:mr-40' : 'lg:ml-16 xl:ml-40'}  content-center md:justify-self-center
             lg:justify-end h-full  justify-center  `}>
                <div className={`${borderClasses} mx-2 grid content-center  `}>
                    <div className="flex flex-col gap-4 xl:flex-row my-4 justify-center  ">

                        <span className="flex justify-center mt-2 lg:mt-0 text-ice_azul-950 lg:px-5 ">
                            {icon ? (<SvgLoader alt="icono banner" src={icon} />) : null}

                        </span>
                        <span className={`${borderClasses} grid justify-center content-center text-center `}>
                            <h1 className="text-4xl sm:text-5xl font-bold text-ice_azul-950">{title}</h1>
                        </span>
                    </div>
                    {/** */}
                    <div className="text-xl text-ice_azul-950 mx-2 my-3 lg:mx-10 ">
                        {children}
                    </div>
                </div>
            </div>
            {/**IMAGEN */}
            <div className={`${borderClasses} ${imgClasses} lg:w-[50%] xl:w-[55%] grid mt-4 md:mt-0`}>
                <img className=" inset-0 overflow-hidden grid " alt="Banner" src={img} width={finalWidth} height={finalHeight}></img>
            </div>
        </div >
    )
}