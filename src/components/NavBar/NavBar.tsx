import MenuItemType from '@/types/MenuItemType';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import LogoICE from '../Icons/LogoICE';
import { IconMenu2, IconX } from '@tabler/icons-react';
import PopoverMenu from '../DropDown/PopoverMenu';
import Spinner from '../utils/Spinner';
import Botonera from './Botonera';
import ThemeButton from '../utils/ThemeButton';
import Image from 'next/image';
type Props = {

}

export default function NavBar({ }: Props) {

  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    <Spinner />
  }


  const TEXT_EFFECT = "easy-in opacity-80 hover:opacity-100 duration-200";
  const HOVER_EFFECT = "hover:bg-transparent hover:border-b-4 border-purple-500 hover:-translate-y-0.5 hover:scale-105"


  const [navbar, setNavbar] = useState(false);
  const items: MenuItemType[] = [
    {
      id: 1,
      title: "Productos",
      url: "/productos",
      submenu: true,
      childs: [
        {
          id: 1,
          title: "Químicos",
          url: "/categoria"
        },
        {
          id: 2,
          title: "Construcción",
          url: "/categoria"
        }
      ]
    },
    {
      id: 2,
      title: "Servicios",
      url: "/productos",
      submenu: false
    },
    {
      id: 3,
      title: "Misión",
      url: "/mision",
      submenu: false
    },
    {
      id: 4,
      title: "Visión",
      url: "/visión",
      submenu: false
    },
    {
      id: 5,
      title: "Conózcanos",
      url: "/conscanos",
      submenu: false
    },


  ]

  return (
    <div className=' dark:bg-rose-900 bg-slate-200'>
      <nav className="w-full  relative top-0 left-0 right-0 z-50">

        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}

              <div className='grid grid-cols-2 gap-12 md:gap-4'>
                <Link className="text-3xl font-bold leading-none" href="/">
                  <Image alt='logo' src="/img/logoNegro.png" width={100} height={100} />
                </Link>

              </div>
              {/** BOTONES KOLBI Y TIENDA **/}
              <div className='md:hidden'>
                <div className={`grid gap-8 justify-center grid-flow-col content-center `}>
                  <Botonera tiendaUrl={'tiendaURL'} kolbiUrl={'kolbiURL'} />
                </div>

              </div>

              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 rounded-md outline-none focus:border-ice_amarillo-950 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <IconX className="h-8 w-8 font-bold text-ice_azul-950 dark:text-white" />

                  ) : (

                    <IconMenu2 className="h-8 w-8 font-bold text-ice_azul-950 dark:text-white " />

                  )}
                </button>

              </div>

            </div>
          </div>

          <div className='flex gap-6'>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 
              ${navbar ? 'p-12 md:p-0 block' : 'hidden'}`}>
              <ul className={`h-screen gap-6 transition-opacity duration-200 md:h-auto items-center justify-center md:flex`}>
                {
                  items.map((elemento: MenuItemType, index: number) => (
                    <li key={elemento.id} className='text-center'>
                      {
                        elemento.submenu ?
                          <PopoverMenu item={elemento} effects={HOVER_EFFECT} /> :

                          <Link href={elemento.url} onClick={() => setNavbar(!navbar)}>
                            <p className={`${TEXT_EFFECT} ${HOVER_EFFECT}  font-semibold text-ice_azul-950 text-lg my-4 mx-2`}>{elemento.title.toUpperCase()}</p>
                          </Link>
                      }
                    </li>
                  ))
                }
                {!navbar ? (
                  <li>
                    <div className={`grid gap-2 justify-center md:justify-between md:grid-flow-col md:gap-5 content-center md:ml-12 `}>
                      <Botonera tiendaUrl={'tiendaURL'} kolbiUrl={'kolbiURL'} />
                    </div>

                  </li>
                ) : null}


              </ul>

            </div>


          </div>
          <ThemeButton />
        </div>

      </nav >
    </div >
  );
}
