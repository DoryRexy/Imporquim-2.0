import SvgLoader from "../Icons/SvgLoader"
import ImageCard from "./ImageCard"

type Props = {}

export default function AyudaCardList({ }: Props) {

    return (
        <div className="grid justify-center">

            <div className='grid gap-16 md:grid-cols-3 justify-center my-8 mx-4 '>
                <ImageCard title="Canales de atención digital" bgColor='bg-ice_gris-200' href="/Ayuda/Canales" >
                    <img src="/img/ayuda/canalesDigitales.svg" ></img>
                </ImageCard>
                <ImageCard title="Agencias" bgColor='bg-ice_gris-200' href="/Ayuda/Agencias">
                    <img src="/img/ayuda/agencias.svg" ></img>
                </ImageCard>
                <ImageCard title="Preguntas frecuentes" bgColor='bg-ice_gris-200' href="/Ayuda/PreguntasFrecuentes" >
                    <img src="/img/ayuda/preguntasFrecuentes.svg" ></img>
                </ImageCard>
            </div>
        </div>
    )
}