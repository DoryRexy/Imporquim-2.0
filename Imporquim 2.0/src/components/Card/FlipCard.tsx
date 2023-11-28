import React, { use } from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import SvgLoader from '../Icons/SvgLoader'
type Props = {
    title: string
    img: string
    children?: React.ReactNode
}
const FlipCard = ({ title, img, children }: Props) => {
    const [isFlipped, setFlipped] = useState(false)
    const [isAnimated, setAnimated] = useState(false)
    function handleFlip(): void {
        if (!isAnimated) {
            setFlipped(!isFlipped)
            setAnimated(true)
        }
    }
    const internalCard: string = "grid justify-center"
    const finalImg = "/img/tramites/cards/suspensionPago.svg"
    return (

        <div className=' group flip-card w-[18rem] h-[20rem]  text-white ' onMouseEnter={handleFlip}
            onMouseLeave={handleFlip} >
            <motion.div className='flip-card-inner w-[100%] h-[100%] shadow-md grid place-content-center '
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 360 }}
                transition={{ duration: 0.2, animationDirection: "normal" }}
                onAnimationComplete={() => setAnimated(false)}>
                <div className={`flip-card-front w-[100%] h-[100%] grid place-content-center gap-4 bg-ice_azul-950 rounded-md font-bold `}>
                    <div className='grid  place-content-center text-white group-hover:text-ice_verde-950 group-hover:scale-105  duration-200'>

                        <SvgLoader src={img} alt={'icono'} />
                    </div>
                    <h3 className='mx-14 grid text-center text-xl'>{title}</h3>
                </div>
                <div className={`flip-card-back w-[100%] h-[100%] bg-ice_gris-200 
                text-ice_azul-950 rounded-md  font-normal px-3 ${internalCard}`}>
                    {children}
                </div>
            </motion.div>

        </div>
    )
}

export default FlipCard