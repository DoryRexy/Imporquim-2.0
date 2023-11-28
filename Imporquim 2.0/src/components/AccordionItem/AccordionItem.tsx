import { dropDownTransitionClasses } from '@/utils/transitions'
import { Disclosure, Transition } from '@headlessui/react'
import { IconChevronRight } from '@tabler/icons-react'


type Props = {
  id: number;
  title: string;
  content: (string | string[])[];
  listClasses?: string;
}

export default function AccordionItem({ id, title, content, listClasses }: Props) {
  return (

    <div className="w-full px-5 pt-3">
      <div className="mx-auto w-full max-w-4xl  dark:bg-slate-800">
        <Disclosure as="div" key={id}>
          {({ open }) => (
            <>
              <Disclosure.Button key={`btn-${id}`} className="border-2 border-ice_gris-200 shadow-lg bg-white flex w-full justify-between rounded-sm font-medium
                         dark:bg-slate-700 
                          px-4 py-2 text-left text-sm text-ice_gris-900
                         hover:-translate-y-0.5 dark:hover:bg-slate-950 focus:outline-none 
                          focus-visible:ring focus-visible:ring-green-500 
                          focus-visible:ring-opacity-75 duration-200">

                <span>{id}. {title}</span>
                <IconChevronRight
                  className={`duration-200 ${open ? 'rotate-90 transform' : ''
                    } h-5 w-5 text-ice_azul-950`}
                />
              </Disclosure.Button>
              <Transition show={open}
                {...dropDownTransitionClasses}>
                <Disclosure.Panel static className="px-4 pt-4 pb-2 bg-white text-sm text-ice_gris-950 dark:text-slate-100">
                  <ul>
                    {content.map((item, index) => {
                      if (typeof item === 'string') {
                        // Renderizar párrafo
                        return <p className='mt-2 text-justify' key={index} dangerouslySetInnerHTML={{ __html: item }}></p>;
                      } else {
                        // Renderizar lista
                        return (
                          <ul className="list-disc list-outside ml-5 my-5" key={index}>
                            {item.map((listItem, listItemIndex) => (
                              <li className='mt-2 text-justify' key={listItemIndex} dangerouslySetInnerHTML={{ __html: listItem }}></li>
                            ))}
                          </ul>
                        );
                      }
                    })}
                  </ul>



                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>

      </div>
    </div>

  )
}
