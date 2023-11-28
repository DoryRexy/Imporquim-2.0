import PreguntasFrecuentesResponseType from "@/types/PreguntasFrecuentesResponse"
import { Tab } from "@headlessui/react"
import { title } from "process"
import { Fragment } from "react"
import { useState } from 'react'
import AccordionItem from "../AccordionItem/AccordionItem"
import { classNames } from "@/utils/stringUtils"
import TransitionTab from "./TransitionTab"
type Props = {
    categories: PreguntasFrecuentesResponseType[]
    classes?: string
}





export default function PreguntasFrecuentesTab({ categories, classes }: Props) {


    return (
        <div className={`w-full  -mt-4 sm:px-0 ${classes} `}>
            <Tab.Group>
                <Tab.List className="flex space-x-1 rounded-sm p-1  bg-white">
                    {categories.map((item) => (
                        <div className="flex w-full">
                            <Tab
                                key={item.category}
                                className={({ selected }) =>
                                    classNames(
                                        'w-full  py-2.5 text-sm font-bold leading-5 text-ice_azul-950',
                                        'duration-200 hover:text-ice_azul-800 ',
                                        selected
                                            ? 'border-b-4 border-ice_verde-950 '
                                            : '  hover:-translate-y-0.5'
                                    )
                                }>
                                {item.category}

                            </Tab>
                            {item.idCategory < 4 ? (
                                <span className="mx-2 border-2 border-ice_azul-950"></span>
                            ) : null}



                        </div>

                    ))}
                </Tab.List>
                <Tab.Panels className="mt-2">
                    {Object.values(categories).map((category, idx) => (
                        <Tab.Panel
                            key={idx}
                            className={classNames(
                                'mt-4 p-2'
                            )}>
                            <TransitionTab>
                                <ul>
                                    {category.questions.map((pregunta) => (
                                        <li
                                            key={pregunta.id}
                                            className="relative ">
                                            <AccordionItem id={pregunta.id} title={pregunta.title} content={pregunta.response} listClasses='list-disc' />
                                        </li>
                                    ))}
                                </ul>
                            </TransitionTab>
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}


