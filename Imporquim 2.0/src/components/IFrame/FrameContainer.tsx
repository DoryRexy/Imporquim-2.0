import Spinner from "@/components/utils/Spinner";
import { useEffect, useState } from "react";

type Props = {
    src: string;
    loadingMessage: string
    timeOut?: number
    showBorder?: boolean;
    containerClasses?: string
}


export default function FrameContainer({ src, loadingMessage, timeOut, showBorder, containerClasses }: Props) {
    const finalTimeOut = timeOut || 5000

    const borderClasses = showBorder ? "border-4 border-ice_gris-600" : ""

    const [iframeLoading, setIframeLoading] = useState(true);
    const [iframeError, setIframeError] = useState(false);

    const handleIframeLoad = () => {
        setIframeLoading(false);
    };

    const handleIframeError = () => {
        setIframeLoading(false);
        setIframeError(true);
    };


    useEffect(() => {
        // Definir el tiempo máximo en milisegundos
        const timeoutDuration = finalTimeOut;

        // Establecer un temporizador
        const timeoutId = setTimeout(() => {
            setIframeLoading(false);
        }, timeoutDuration);

        // Limpieza del temporizador en caso de que el componente
        return () => clearTimeout(timeoutId);
    }, []);

    return (

        <div className={`${borderClasses} ${containerClasses} justify-center h-[65rem] md:h-[60rem] lg:h-[62rem] xl:h-[36rem] focus:ring-0`}>
            {iframeLoading && <Spinner title={loadingMessage} />}
            {iframeError && <p>Failed to load iframe content.</p>}

            {
                <iframe src={src}
                    onLoad={handleIframeLoad}
                    onEmptied={() => { console.log("emptied") }}
                    onError={handleIframeError}
                    loading="eager"
                    width="100%"
                    height="100%"
                    id="consultaFacturas"
                    sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                    className={`focus:ring-0 ${iframeLoading ? 'hidden' : null}`}
                />
            }
        </div >
    )
}