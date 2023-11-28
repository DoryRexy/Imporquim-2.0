
import { Icon360View, IconRocket } from '@tabler/icons-react';
type Props = {
    title: string;
}

export default function PageLoader({ title }: Props) {
    const gradient = "bg-gradient-to-br from-ice_verde-950 from-10% via-45% to-ice_verde-900 via-ice_verde-700"
    return (
        <div className={`grid place-content-center `}>
            <div className='grid w-fit h-fit '>

                <Icon360View className='animate-tiltfast text-ice_verde-950 w-44 h-44' />
                <p className={`mt-8  animate-pulse duration-75 text-xl dark:text-white font-medium text-black `} >{title && 'Cargando ...'} </p>
            </div>
        </div>
    )
}