import FrameContainer from "@/components/IFrame/FrameContainer";
import Spinner from "@/components/utils/Spinner";
import { useEffect, useState } from "react";

const defaultURL: string = "https://dev-ave.cn.ice.go.cr/public/servicios/consultaAverias?externo=true";

type Props = {
    frameURL?: string;
}

export default function AveriasReportadas({ frameURL }: Props) {
    const finalUrl = frameURL || defaultURL;
    return (
        <>

            <div className='text-center mb-12 '>
                <h2 className='font-bold text-3xl text-ice_azul-950'>Consulta de averías</h2>
            </div>
            <div className='mx-8 my-8 md:my-20 md:mx-20 text-xl  text-justify'>
                <p className='text-center'>
                    Conozca información detallada sobre las averías reportadas y su estado de atención.
                </p>
            </div>
            <FrameContainer src={finalUrl} showBorder
                loadingMessage="Cargando el mapa..." timeOut={3000} />
        </>
    )
}