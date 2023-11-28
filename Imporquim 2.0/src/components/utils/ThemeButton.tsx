import { IconMoonFilled, IconSunFilled } from '@tabler/icons-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

type Props = {}

export default function ThemeButton({ }: Props) {
    const [mounted, setMounted] = useState(false)
    const { resolvedTheme, setTheme } = useTheme()

    //useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <button aria-label='Toggle Dark Mode'
            type='button' className='flex items-center justify-center rounded-lg
            p-2 ease-out duration-200 hover:animate-pulse'
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
            {resolvedTheme === 'dark' ?
                (
                    <IconSunFilled className='h-8 w-8 text-ice_amarillo-500  ' />
                ) : (
                    <IconMoonFilled className='h-8 w-8 text-ice_gris-500 ' />)}
        </button>
    )
}