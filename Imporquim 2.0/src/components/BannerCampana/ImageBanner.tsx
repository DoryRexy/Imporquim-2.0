import { classNames } from "@/utils/stringUtils";
import Link from "next/link";


type Props = {
  url: string
  external?: boolean
};

export default function ImageBanner({ url, external }: Props) {

  return (
    <section className="relative group ">
      <div className={classNames(" overflow-hidden  border-opacity-30  hover:scale-[103%] hover:cursor-pointer duration-200 ",
        "hover:opacity-[92%] hover:border-ice_gris-500 hover:border-0")}
      >
        <Link href={url} target={`${external ? '_blank' : '_self'}`}>

          <img src="/img/esElectrico/secondBanner/640.png" width={640} height={234} alt="banner de campaña" className="hidden sm:grid md:hidden object-cover w-full" />
          <img src="/img/esElectrico/secondBanner/390.png" width={390} height={234} alt="banner de campaña" className="grid sm:hidden object-cover w-full" />
          <img src="/img/esElectrico/secondBanner/768.png" width={768} height={219} alt="banner de campaña" className="hidden md:grid lg:hidden object-cover w-full" />
          <img src="/img/esElectrico/secondBanner/1024.png" width={1023} height={285} alt="banner de campaña" className="hidden lg:grid xl:hidden object-cover w-full" />
          <img src="/img/esElectrico/secondBanner/1440.png" width={1440} height={404} alt="banner de campaña" className="hidden xl:grid object-cover w-full" />
        </Link>
      </div>
    </section>


  );
}
