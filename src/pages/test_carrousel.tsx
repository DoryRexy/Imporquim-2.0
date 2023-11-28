import Carrousel from "@/components/Test/Carrousel"
import MainLayout from "@/layout/MainLayout"
import { AnimatePresence, motion } from "framer-motion"
type Props = {}

const slides = [
    "/img/esElectrico/guias.png",
    "/img/esElectrico/portada.png",
    "/img/esElectrico/tarjeta.png"
]
export default function test({ }: Props) {
    return (
        <MainLayout>
            <div className="grid justify-center">

                <div className="grid max-w-5xl  justify-self-center">
                    <AnimatePresence>

                        <Carrousel autoSlider  >
                            {slides.map((source, index) => (
                                <motion.img
                                    initial={{ opacity: 0, y: 200 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="flex" width={576} alt="carrusell" key={index} src={source}></motion.img>
                            ))}
                        </Carrousel>
                    </AnimatePresence>
                </div>
            </div>

        </MainLayout >
    )
}