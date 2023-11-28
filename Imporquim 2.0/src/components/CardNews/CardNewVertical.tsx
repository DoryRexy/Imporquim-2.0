import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import Router from 'next/router';
type Props = {
  title: string
  category: string
  date: string
  children: React.ReactNode
  link: string
  image?: string;
  clasesfila1?: string;
  clasesfila2?: string;
  clasesfila3?: string;
  clasesfila4?: string;
  clasesfila5?: string;
  clasesfila6?: string;

}

export default function CardNewsVertical(props: Props) {
  return (
    <div className="m-5  grid   ">

      <div id="fila1" className={` ${props.clasesfila1} `}>
        {props.date}
      </div>
      <div id="fila2" className={` ${props.clasesfila2} `}>
        {props.category}
      </div>
      <div id="fila3" className={` ${props.clasesfila3} `}>
        {props.title}
      </div>
      <div id="fila4" className={` ${props.clasesfila4} `}>
        {props.children}
      </div>
      {/*<div id="fila5" className={` ${props.clasesfila5}`}>
        <Image alt="imagen ojo" src="/img/eye.png" width={24} height={18} />
        <p>888</p>
      </div>*/}
      <div className={`${props.clasesfila5} w-[21rem] sm:w-[30rem] `}>

        <img src={props.image} />
      </div>

      <div id="fila6" className={` ${props.clasesfila6}`}>
        <CustomButton title="Ver más >" classes="bg-ice_azul-950 text-xs" onClick={() => {
          Router.push(props.link)
        }} />
      </div>
    </div>
  )
}