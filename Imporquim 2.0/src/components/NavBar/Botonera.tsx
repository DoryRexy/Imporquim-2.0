import Link from 'next/link';
import React from 'react'
import SvgLoader from '../Icons/SvgLoader';

type Props = {
    tiendaUrl: string
    kolbiUrl: string
}

export default function Botonera({ tiendaUrl, kolbiUrl }: Props) {
    const TEXT_EFFECT = "easy-in opacity-80 hover:opacity-100 duration-200";
    const HOVER_EFFECT = "hover:bg-transparent hover:border-b-4 border-ice_amarillo-500 hover:-translate-y-0.5 hover:scale-105"
    return (
        <>
            <Link className={` text-ice_azul-950 font-bold text-sm ${TEXT_EFFECT} ${HOVER_EFFECT}`}
                href={kolbiUrl} target='_blank'>
                <SvgLoader src="/img/navBar/kolbiIcon.svg" alt='Icono Kolbi'></SvgLoader>
            </Link>
            <Link className={`text-ice_azul-950 font-bold text-sm ${TEXT_EFFECT} ${HOVER_EFFECT}`}
                href={tiendaUrl} target='_blank'>
                <SvgLoader src='/img/navBar/carrito.svg' alt="Icono Carrito"></SvgLoader>
            </Link>

        </>


    )
}