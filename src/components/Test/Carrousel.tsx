import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';


type Props = {
    children: React.ReactNode,
    autoSlider?: boolean,
    autoSliderInterval?: number
}
//https://www.youtube.com/watch?v=XJSOgV4VELk&t=64s
export default function Carrousel({ children, autoSlider = false, autoSliderInterval = 3000 }: Props) {

    const length = React.Children.count(children);
    const [index, setIndex] = useState(0);

    const prev = () =>
        setIndex((index) => (index === 0 ? length - 1 : index - 1))

    const next = () =>
        setIndex((index) => (index === length - 1 ? 0 : index + 1))



    useEffect(() => {
        if (!autoSlider) return
        const sliderInterval = setInterval(next, autoSliderInterval)
        return () => clearInterval(sliderInterval)

    }, [])

    /**UTILS */
    const divArray = Array.from({ length }, (_, index) => index + 1);
    const bntClasses = " w-10 p-1 rounded-full shadow bg-ice_gris-800 opacity-80 hover:opacity-100 hover:scale-105 duration-150"

    return (
        <div className='overflow-hidden relative'>
            <AnimatePresence>
                <div className='flex transition-transform easy-out duration-500'
                    style={{ transform: `translateX(-${index * 100}%)` }}>


                    {children}
                </div>


            </AnimatePresence>
            <div className=' text-white absolute inset-0 flex items-center
            justify-between mx-1'>
                <button className={`${bntClasses}`} onClick={prev}>
                    <IconChevronLeft />
                </button>
                <button className={`${bntClasses}`} onClick={next}>
                    <IconChevronRight className='' />

                </button>
            </div>
            <div className='absolute bottom-4 right-0 left-0'>
                <div className='flex items-center justify-center gap-2'>
                    {
                        divArray.map((num, i) => {
                            return (<div className={`transition-all w-3 h-3 bg-white rounded-full ${index === i ? "p-2" : "bg-opacity-50"}`}></div>)
                        })

                    }

                </div>
            </div>
        </div >
    )
}