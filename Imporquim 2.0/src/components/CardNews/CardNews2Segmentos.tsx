
import CustomButton from '../CustomButton/CustomButton';
import Router from 'next/router';

type Props = {
  title: string
  category: string
  date: string
  children: React.ReactNode
  link: string
  image?: string;
  clases?: string;
  claseshora?: string;
  clasesfila1?: string;
  clasesfila2?: string;
  clasesfila3?: string;
  clasesfila4?: string;
}

export default function CardNews2Segmentos(props: Props) {
  return (
    <div className={` ${props.clases}`}>
      <div className={` ${props.claseshora}`} >
        {props.date}
      </div>
      <div className="grid md:flex h-full  ">

        <div className="grid md:w-1/2 md:flex md:flex-col -translate-y-6  ">
          <div className={` ${props.clasesfila1}`}>
            {props.category}
          </div>
          <div className={` ${props.clasesfila2}  `}>
            {props.title}
          </div>
          <div className='py-4 '>
            {props.children}
          </div>
          <div className={` ${props.clasesfila3}`}>
            <CustomButton title="Ver más>" classes="bg-ice_azul-950 text-xs"
              onClick={() => {
                Router.push(props.link)
              }} />
          </div>
          {/*<div className={` ${props.clasesfila4}`}>
            <img alt="imagen ojo" src="/img/eye.png" width={24} height={18} />
            8818
          </div>*/}
        </div>

        <div className="md:w-9/12 z-50 ">
          <img src={props.image} className=' object-cover' />
        </div>
      </div>
    </div>
  )
}