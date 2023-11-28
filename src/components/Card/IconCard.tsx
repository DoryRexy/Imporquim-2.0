import Image from 'next/image'
type Props = {
    img: string
    bgColor: string
}

export default function IconCard({ img, bgColor }: Props) {
    return (
        <div className='relative group my-4 hover:scale-105 hover:-translate-y-0.5   duration-200'>
            <div className='absolute  animate-tilt duration-300 dark:to-ice_gris-900
                w-40 h-36  bg-gradient-to-tl from-ice_verde-700 blur to-ice_gris-500'></div>
            <div className={`${bgColor} relative flex justify-center align-middle w-40 h-36    
            rounded-xl shadow-xl border 
            border-white border-opacity-40`} >

                <Image className='' src={img} alt='icon'></Image>



            </div>

        </div>
    )
}