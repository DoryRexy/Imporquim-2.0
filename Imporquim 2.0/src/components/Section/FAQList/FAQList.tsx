import React from 'react'
import AccordionItem from '../../AccordionItem/AccordionItem'
//useSWR allows the use of SWR inside function components
import useSWR from 'swr';
import PreguntasFrecuentesResponseType from '@/types/PreguntasFrecuentesResponse';
import PreguntasFrecuentesTab from '@/components/Tabs/PreguntasFrecuentesTab';

type Props = {}

const fetcher = (url: RequestInfo | URL) => fetch(url).then((res) => res.json());


export default function FAQList({ }: Props) {
    var { data, error } = useSWR('/api/preguntasFrecuentes', fetcher);
    //console.log(JSON.stringify(data))
    //error=true
    if (error) {
        console.log(error)
    }

    if (error) return (
        <div className="mt-6 bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
            <p className="font-bold">!!Alerta</p>
            <p>Sufrimos una situación inesperada, no hay información para mostrar.</p>
        </div>
    )
    if (!data) return (
        <div>No hay datos</div>

    )

    //Hay datos
    return (

        <div className="my-8 ">
            <div className='flex justify-center mb-10'>
                <h2 className='text-3xl font-bold text-ice_azul-950 justify-items-center flex' >Preguntas frecuentes</h2>


            </div>

            <section className="">

                <div className="text-center font-semibold text-md  ">
                    <div className="text-sm font-normal mb-4 mx-20">
                        <p>
                            En esta sección podrá encontrar las respuestas a las consultas
                            más comunes que nos realizan en los diferentes canales de comunicación que tenemos activos.
                        </p>

                    </div>
                </div>
                <div className='w-full bg-ice_verde-950 h-10 '></div>
                <div className='bg-ice_gris-200'>
                    <div className=' flex justify-center mx-1  sm:mx-5 md:mx-16 lg:mx-20 xl:mx-44 2xl:mx-96 ' >
                        {data == null ?
                            <div className="mt-6 bg-red-100 border-4 border-red-500 text-red-700 p-4" role="alert">
                                <p className="font-bold">!!Alerta</p>
                                <p>Sufrimos una situación inesperada, no hay información para mostrar.</p>
                            </div>
                            :
                            <>
                                <PreguntasFrecuentesTab categories={data} classes='bg-ice_gris-200' />

                            </>
                        }


                    </div>
                </div>
            </section>
        </div>
    )
}