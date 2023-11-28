import MenuItemType from "@/types/MenuItemType";
import { Popover, Transition } from "@headlessui/react";
import { IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";


type Props = {
    item: MenuItemType;
    effects?: string;
}


const PopoverMenu = ({ item, effects }: Props) => {
    return (
        <Popover className={`md:relative`}>
            {({ open }) => (
                <>
                    <Popover.Button
                        className={`${effects} duration-500 focus:outline-none font-bold 
                            opacity-80  w-full text-lg text-ice_azul-950 flex justify-center `}>
                        <div className="flex justify-center content-center duration-500 transition-transform">
                            {item.title.toUpperCase()}
                            <IconChevronRight className={`${open ? "rotate-90" : "rotate-0"} -mr-5 w-6 h-6  mt-0.5 `} />
                        </div>
                    </Popover.Button>
                    <Popover.Overlay onClick={() => { console.log("click") }} className="md:fixed md:inset-0 md:bg-black md:opacity-40" />
                    <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                    >
                        <Popover.Panel className="z-0 bg-white bg-opacity-90 w-full grid md:absolute md:z-10 mt-2 md:w-48 text-ice_azul-950
                     rounded-lg shadow-2xl  h-fit mb-4">
                            {({ close }) => (
                                <ul className=" py-2">
                                    {
                                        item.submenu && item.childs && item.childs.map((child: MenuItemType, index: number) => (
                                            <li key={`${child.id}`} className="px-3 py-3 hover:bg-ice_verde-200">
                                                <Link href={child.url} className="" onClick={() => {
                                                    close();
                                                }}>
                                                    {child.title}
                                                </Link>
                                            </li>
                                        ))
                                    }

                                </ul>)}
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    );
};

export default PopoverMenu;
