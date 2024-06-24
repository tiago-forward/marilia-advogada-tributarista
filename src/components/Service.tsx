import { services } from "@/constants"

import { SectionTitle } from "./SectionTitle"
import { ServiceCard } from "./ServiceCard"

export const Service = () => {
    return (
        <section className="w-full flex flex-col items-center justify-center backgroundGrandientService">
            <div className="max-w-screen-xl m-auto py-10">
                <SectionTitle>
                    Serviços de Atuação do Direito Tributário
                </SectionTitle>
                <p className="font-oswald text-sm lg:text-xl leading-7 lg:leading-9 pt-6 text-white opacity-90">Ofereço uma ampla gama de serviços voltados para questões tributárias, garantindo que nossos clientes estejam em conformidade com todas as leis fiscais aplicáveis</p>
                <div className="pt-6 gap-6 grid grid-cols-[minmax(300px,_1fr)] sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <ServiceCard key={index} title={service.name} description={service.description} background={service.icon} />
                    ))}
                </div>
            </div>
        </section>
    )
}
