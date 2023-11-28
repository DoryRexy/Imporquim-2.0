import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import Router from 'next/router';

type Props = {
    title: string
    category: string
    date: string
    children: React.ReactNode
    link: string
    imageBag?: string;
    clases?: string;
    clasesCuadro1?: string;
    clasesCuadro2?: string;
    clasesCuadro3?: string;
    clasesCuadro4?: string;
};

export default function CardNews4lados(props: Props) {
    return (
        <div className={`bg-no-repeat bg-cover bg-center grid ${props.clases}`}
            style={{
                backgroundImage: `linear-gradient(
                to bottom right,
                rgba(255, 255, 255, 0),
                rgba(217, 217, 217, 0.9)
              ),url('${props.imageBag}')`,
            }}>
            <div className='h-[24rem]'>

                <div className='grid w-full justify-end text-xs p-2 '>
                    {props.date}
                </div>
                <div className='grid w-full text-ice_azul-950 font-bold text-2xl grid-cols-12  '>
                    <div className='col-span-5 '></div>
                    <div className='col-span-7 mb-5'>

                        <p dangerouslySetInnerHTML={{ __html: props.title }}></p>
                    </div>
                </div>
                <div className='grid grid-cols-12 text-base justify-end  '>
                    <div className='col-span-5'></div>
                    <div className="col-span-7 text-xl mix-blend-normal">{props.children}</div>
                </div>


                <div className={`${props.clasesCuadro3} flex justify-end w-4/6 mt-12`}>

                    <CustomButton title="Ver más >" classes="bg-ice_azul-950 text-xs"
                        onClick={() => {
                            Router.push(props.link)
                        }} />
                </div>
                {/*<div className={`w-1/2 ${props.clasesCuadro4}`}>
                <Image alt="imagen ojo" src="/img/eye.png" width={24} height={18} />
                <p>888</p>
            </div>*/}
            </div>
        </div >
    )
}