import React from 'react'

type Props = {

}

export default function Alert({ }: Props) {
    return (
        <>
            <div
                className="mb-4 rounded-lg bg-slate-200 px-6 py-5 text-base text-neutral-900 dark:bg-neutral-700 dark:text-neutral-50"
                role="alert">
                A simple primary alert—check it out!
            </div>
            <div
                className="mb-4 rounded-lg bg-ice_amarillo-500 px-6 py-5 text-base text-neutral-800"
                role="alert">
                A simple secondary alert—check it out!
            </div>
            <div
                className="mb-4 rounded-lg bg-ice_verde-950 px-6 py-5 text-base text-neutral-800"
                role="alert">
                A simple success alert—check it out!
            </div>
            <div
                className="mb-4 rounded-lg bg-red-100 px-6 py-5 text-base text-red-700"
                role="alert">
                A simple danger alert—check it out!
            </div>
            <div
                className="mb-4 rounded-lg bg-warning-100 px-6 py-5 text-base text-warning-800"
                role="alert">
                A simple warning alert—check it out!
            </div>
            <div
                className="mb-4 rounded-lg bg-info-100 px-6 py-5 text-base text-info-800"
                role="alert">
                A simple info alert—check it out!
            </div>
            <div
                className="mb-4 rounded-lg bg-neutral-50 px-6 py-5 text-base text-neutral-600"
                role="alert">
                A simple light alert—check it out!
            </div>
            <div
                className="mb-4 rounded-lg bg-neutral-800 px-6 py-5 text-base text-neutral-50 dark:bg-neutral-900"
                role="alert">
                A simple dark alert—check it out!
            </div>
        </>
    )
}