import MenuItemType from "@/types/MenuItemType";
import Link from "next/link";
import { useEffect, useState } from "react";
import LogoICE from "../Icons/LogoICE";
import { IconMenu2, IconX } from "@tabler/icons-react";
import PopoverMenu from "../DropDown/PopoverMenu";
import Spinner from "../utils/Spinner";
import Botonera from "./Botonera";
import ThemeButton from "../utils/ThemeButton";
import Image from "next/image";
import SvgLoader from "../Icons/SvgLoader";
type Props = {};

export default function NavBar({}: Props) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    <Spinner />;
  }

  const TEXT_EFFECT = "easy-in opacity-80 hover:opacity-100 duration-200";
  const HOVER_EFFECT =
    "hover:bg-transparent hover:border-b-4 border-slate-800 hover:-translate-y-0.5 hover:scale-105";

  const [navbar, setNavbar] = useState(false);
  const items: MenuItemType[] = [
    {
      id: 1,
      title: "Sobre Nosotros",
      url: "/us",
      submenu: false,
    },
    {
      id: 2,
      title: "Mercados",
      url: "/mercados",
      submenu: true,
      childs: [
        {
          id: 1,
          title: "Agroquimicos",
          url: "/categoria",
        },
        {
          id: 2,
          title: "Construcción",
          url: "/categoria",
        },
        {
          id: 3,
          title: "Pinturas",
          url: "/categoria",
        },
        {
          id: 4,
          title: "Cuidados del Hogar",
          url: "/categoria",
        },
        {
          id: 5,
          title: "Fragancias y aceites",
          url: "/categoria",
        },
        {
          id: 6,
          title: "Nutrición Animal",
          url: "/categoria",
        },
        {
          id: 7,
          title: "Alimentos",
          url: "/categoria",
        },
        {
          id: 8,
          title: "Farma",
          url: "/categoria",
        },
        {
          id: 9,
          title: "Cuidado Personal",
          url: "/categoria",
        },
        {
          id: 10,
          title: "Plásticos,hule y látex",
          url: "/categoria",
        },
      ],
    },
    {
      id: 3,
      title: "Responsabilidad social",
      url: "/rs",
      submenu: false,
    },
    {
      id: 4,
      title: "Contacto",
      url: "/ct",
      submenu: false,
    },
  ];

  return (
    <div className=" dark:bg-teal-900 bg-teal-700">
      <nav className="w-full  relative top-0 left-0 right-0 z-50">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {}

              <div className="grid grid-cols-2 gap-12 md:gap-4 text-red-400">
                <Link className="text-3xl font-bold leading-none" href="/">
                  <Image
                    className="grid dark:hidden"
                    alt="logo"
                    src="/img/logos/logoNegro.svg"
                    width={100}
                    height={100}
                  />
                  <Image
                    className="dark:grid hidden"
                    alt="logo"
                    src="/img/logos/logob.svg"
                    width={100}
                    height={100}
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="flex gap-6">
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 
              ${navbar ? "p-12 md:p-0 block" : "hidden"}`}
            >
              <ul
                className={`h-screen gap-6 transition-opacity duration-200 md:h-auto items-center justify-center md:flex`}
              >
                {items.map((elemento: MenuItemType, index: number) => (
                  <li key={elemento.id} className="text-center">
                    {elemento.submenu ? (
                      <PopoverMenu item={elemento} effects={HOVER_EFFECT} />
                    ) : (
                      <Link
                        href={elemento.url}
                        onClick={() => setNavbar(!navbar)}
                      >
                        <p
                          className={`${TEXT_EFFECT} ${HOVER_EFFECT}  font-semibold text-ice_azul-950 text-lg my-4 mx-2`}
                        >
                          {elemento.title.toUpperCase()}
                        </p>
                      </Link>
                    )}
                  </li>
                ))}
                {!navbar ? (
                  <li>
                    <div
                      className={`grid gap-2 justify-center md:justify-between md:grid-flow-col md:gap-5 content-center md:ml-12 `}
                    >
                      <Botonera tiendaUrl={"tiendaURL"} kolbiUrl={"kolbiURL"} />
                    </div>
                  </li>
                ) : null}
              </ul>
            </div>
          </div>
          <ThemeButton />
        </div>
      </nav>
    </div>
  );
}
