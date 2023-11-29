
import AccordionItem from "@/components/AccordionItem/AccordionItem"
import BannerNegocios from "@/components/Banner/BannerNegocios"
import BannerPrincipal from "@/components/BannerPrincipal/BannerPrincipal"
import MainLayout from "@/layout/MainLayout"
type Props = {}


export default function test({ }: Props) {
    return (
        <MainLayout>
            <div>
           <BannerPrincipal/>
           </div>
            
        </MainLayout >
    )
}