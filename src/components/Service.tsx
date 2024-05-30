import { ServiceCard } from "./ServiceCard"

export const Service = () => {
    return (
        <section className="w-full flex flex-col items-center justify-center backgroundGrandientService">
            <div className="max-w-screen-xl m-auto py-10">
                <h2 className='text-center pt-6 lg:pb-6 text-2xl lg:text-4xl font-oswald tracking-wide'>Serviços de Atuação do Direito Tributário</h2>
                <p className="text-justify tracking-tight font-oswald text-sm lg:text-xl leading-7 lg:leading-9 pt-6">Ofereço uma ampla gama de serviços voltados para questões tributárias, garantindo que nossos clientes estejam em conformidade com todas as leis fiscais aplicáveis</p>
                <div className="py-6 flex flex-col gap-2">
                    <ServiceCard
                        title={"Consultoria Tributária"}
                        description={"Oferecemos consultoria personalizada para ajudar empresas e indivíduos a entenderem e cumpram suas obrigações fiscais, otimizando impostos pagos e evitando penalidades."}
                    />
                    <ServiceCard
                        title={"Planejamento Fiscal"}
                        description={"Desenvolvemos estratégias de planejamento fiscal para minimizar a carga tributária, incluindo a reestruturação de negócios, investimentos e transações internacionais."}
                    />
                    <ServiceCard
                        title={"Litígios Tributários"}
                        description={"Representamos nossos clientes em disputas com as autoridades fiscais, buscando a melhor solução possível dentro do sistema jurídico brasileiro."}
                    />
                    <ServiceCard
                        title={"Auditoria Interna Tributária"}
                        description={"Realizamos auditorias internas para identificar possíveis irregularidades fiscais, garantindo a conformidade contínua com as regulamentações tributárias."}
                    />
                    <ServiceCard
                        title={"Consultoria Tributária"}
                        description={"Oferecemos consultoria personalizada para ajudar empresas e indivíduos a entenderem e cumpram suas obrigações fiscais, otimizando impostos pagos e evitando penalidades."}
                    />
                </div>
            </div>
        </section >
    )
}
