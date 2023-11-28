import React, { Children } from 'react'
import SvgLoader from '../Icons/SvgLoader';
import { classNames } from '@/utils/stringUtils';
import Calendario from './Calendario';
import InterrupcionChild from './InterrupcionChild';
type Props = {
    children: React.ReactNode;
    title: string;
    state: string;
    start: string;
    end: string;
    nombreDia: string;
    mes: string;
    dia: string;
    localidades: string
};


export default function InterrupcionesCard(props: Props) {
    const gridIconClass = "grid lg:col-span-2 "
    const gridContentClass = "grid lg:col-span-10 "
    return (

        <div className='bg-white rounded-lg shadow-lg mt-4  border border-gray-300'>
            <div className={classNames("grid lg:grid-cols-12 dark:bg-neutral-700 bg-white mx-2 md:mx-10 my-4 gap-6 lg:gap-12 ")} >
                <div className={`${gridIconClass} justify-center content-center`}>
                    <Calendario dia={props.dia} mes={props.mes} nombreDia={props.nombreDia} ></Calendario>
                </div>
                <div className={`${gridContentClass} justify-center`}>

                    <InterrupcionChild state={props.state}
                        title={props.title} start={props.start}
                        end={props.end} afectedTowns={props.localidades} >
                        {props.children}
                    </InterrupcionChild>


                </div>
            </div>

            {/*
        <div className="border-2 border-red-500 rounded-md grid grid-cols-1 items-center lg:grid-cols-2 bg-white  py-3">


            <div className="border-2 border-black grid rounded-lg shadow-md justify-center">
                <p className='grid text-ice_gris-950 font-bold text-xl justify-center mt-2 border-b-[0.5rem] 
                border-ice_azul-950 '>
                    {props.nombreDia}*</p>
                <p className='text-ice_verde-950 font-extrabold text-4xl mt-6  '>{props.dia}</p>
                <p className='text-ice_verde-950 font-extrabold text-4xl'>{props.mes}</p>
            </div>

            <div className=''>
                <div className=' mx-4'>
                    <h2 className="text-ice_verde-950 text-3xl leading-tight">
                        <strong>{`${props.state} - `}</strong>
                        {props.title}</h2>
                    <div className="mt-4 text-gray-600">{props.children}</div>
                </div>
                <div className=" flex items-center my-4 ">

                    <SvgLoader src='/img/suspensiones/timer.svg' alt='Imagen Reloj' key="timer-image"></SvgLoader>
                    <div className='text-md font-bold ml-4'>
                        <p>Inicio:</p>
                    </div>
                    <p className="text-md font-medium ml-4">
                        {props.start}
                    </p>
                    <div className='text-md font-bold ml-4'>
                        <p>Fin:</p>
                    </div>
                    <p className="text-md font-medium ml-4">
                        {props.end}
                    </p>
                </div>
            </div>

    </div>*/}
        </div>
    )
}