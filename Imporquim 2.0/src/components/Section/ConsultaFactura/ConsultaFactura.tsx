import FrameContainer from "@/components/IFrame/FrameContainer";
import Spinner from "@/components/utils/Spinner";
import { useEffect, useState } from 'react';

const defaultURL: string = "https://dev-ave.cn.ice.go.cr/public/consultaFacturaElectrica?externo=true";

type Props = {
  frameURL?: string;
  containerClasses?: string;
}
//useEffect only runs on the client, so now we can safely show the UI


export default function ConsultaFactura({ frameURL, containerClasses }: Props) {
  const [mounted, setMounted] = useState(false)
  const finalURL: string = frameURL == null ? defaultURL : frameURL;

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Spinner />
    )
  }


  return (
    <div id="facturacion" className="focus:ring-0 h-fit pt-24 2xl:pt-32 bg-[#fafafa]">

      <FrameContainer loadingMessage="Cargando la consulta" src={finalURL} containerClasses={containerClasses} />
    </div>
  )
}

