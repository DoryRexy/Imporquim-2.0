import Link from 'next/link';
import React from 'react';

type Props = {
    url: string
    children?: React.ReactNode;
    className?: string
}

export default function FooterLink({ url, children, className }: Props) {
    return (
        <div className={`p-2 dark:text-white dark:hover:text-teal-600 text-black hover:text-teal-600 hover:scale-110 hover:-translate-y-1 duration-200 ease-in-out ${className}`}>
            <Link href={url} target='_blank'>
                {children}
            </Link>
        </div>
    )
}