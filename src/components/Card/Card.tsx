import Link from 'next/link'
import SvgLoader from '../Icons/SvgLoader'

type Props = {
    title: string
    img: string
    url: string
    classes?: string;
    state?: string
}

export default function Card({ title, img, url, classes, state }: Props) {
    const stateColor = state == "active" ? "text-ice_verde-950" : "text-ice_azul-950"
    return (
        <>
            <Link href={url} className={`border rounded-xl h-56 w-56 sm:h-56 sm:w-56 grid justify-center 
            group/card drop-shadow-lg   
            min-h-fit  dark:bg-neutral-800 dark:shadow-ice_gris-800
            hover:-translate-y-1 hover:shadow-xl duration-300 ${classes}`}>
                <div className={`  `}>
                    <div className={`grid justify-center content-end mt-3 ${stateColor} h-32 `}>
                        <SvgLoader alt="Icono Card" src={img}
                            classes={`  w-20 md:w-20 group-hover/card:scale-105 duration-300 `} />

                    </div>
                    <div className='grid content-end mb-2 '>
                        <h3 className=' px-10 my-4
                    font-medium text-xl text-center text-ice_azul-950 
                    dark:text-ice_gris-300 dark:group-hover/card:text-ice_gris-100'>
                            {title}
                        </h3>
                    </div>
                </div>
            </Link>
        </>
    )
}