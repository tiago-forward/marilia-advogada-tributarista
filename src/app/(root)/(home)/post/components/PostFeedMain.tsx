import { CircleChevronRightIcon } from "lucide-react";

export default function PostFeedMain() {
    return (
        <div className="flex flex-col items-center gap-4 mb-10 max-w-md m-auto">
            <section className="flex flex-col justify-between relative mt-10 w-[446px] h-[446px] p-10 backgroundGrandientPostRed">
                <div>
                    {/* <header className="flex flex-col gap-1 w-[350px]">
                        <span className="text-[#0F39F6] text-3xl font-medium">01</span>
                        <h1 className="text-[20px]">Mudanças trazidas pela Reforma Tributária: Criação de dois novos tributos CBS e IBS</h1>
                    </header>

                    <main className="w-[350px] text-justify">
                        <ul className="list-disc px-7 mt-4 text-sm flex flex-col gap-2 font-oswald text-slate-300 opacity-70 leading-5">
                            <li>CBS (Contribuição sobre Bens e Serviços):</li>
                            <ul>
                                <li>1. Administrado pela União.</li>
                                <li>2. Substitui IPI, PIS e COFINS.</li>
                            </ul>
                            <li>IBS (Imposto sobre Bens e Serviços):</li>
                            <ul>
                                <li>1. Com gestão compartilhada entre Estados e municípios.</li>
                                <li>2. Substitui ICMS e ISS.</li>
                            </ul>
                        </ul>
                    </main> */}


                    {/* 
                    <header className="flex flex-col gap-1 w-[350px]">
                        <span className="text-[#0F39F6] text-3xl font-medium">02</span>
                        <h1 className="text-[17px]">Principais alterações no Agronegócio:</h1>
                    </header>

                    <main className="w-[350px] text-justify">
                        <ul className="list-disc px-7 mt-4 text-sm flex flex-col gap-2 font-oswald text-slate-300 opacity-70 leading-5">
                            <li>Contribuintes da CBS e IBS: Pessoas físicas podem se tornar contribuintes da Contribuição sobre Bens e Serviços (CBS) e do Imposto sobre faturamento e das isenções previstas em Leis Complementares.</li>
                            <li>Mudança na Tributação: Isso significa que atividades que atualmente têm desoneração para pessoas físicas podem passar a ser contribuintes desses novos impostos.</li>
                        </ul>
                    </main> */}



                    <header className="flex flex-col gap-1 w-[350px]">
                        {/* <span className="text-[#0F39F6] text-3xl font-medium">04</span> */}
                        <span className="text-amber-600 text-3xl font-medium">01</span>
                        <h1 className="text-[14px]">Lucro real: Encargo tributário</h1>
                    </header>


                    <main className="w-[350px] text-justify">
                        <ul className="list-disc px-7 mt-1 text-xs flex flex-col gap-2 font-oswald text-slate-300 opacity-70 leading-4">
                            <li className="list-none">1. Lucro Real e PIS/COFINS:</li>
                            <li>No Lucro Real, o produtor paga PIS/COFINS. Além disso, há benefícios como depreciação acelerada incentivada e a ausência de travas de prejuízo fiscal (que têm uma limitação de 30%);</li>
                            <li>No setor agropecuário, não há essa limitação de prejuízo fiscal.</li>
                            <li className="list-none">2. Não Cumulatividade e Exportação:</li>
                            <li>Produtores rurais, como exportadores de soja, têm insumos tributados;</li>
                            <li>Mesmo desonerados, esses produtores mantêm créditos de PIS/COFINS;</li>
                            <li>Esses créditos podem ser ressarcidos ou compensados em operações de exportação.</li>
                        </ul>
                    </main>




                    {/* <header className="flex flex-col gap-1 w-[350px]">
                        <span className="text-[#0F39F6] text-3xl font-medium">03</span>
                        <h1 className="text-[13px]">Na pessoa jurídica, existem dois regimes tributários principais: lucro real e lucro presumido.</h1>
                    </header>

                    <main className="w-[350px] text-justify">
                        <ul className="list-disc mt-2 mb-2 pl-7 text-[11px] flex flex-col gap-2 leading-3 font-oswald text-slate-300 opacity-70">
                            <li className="list-none">1. No presumido - Encargo Tributário:</li>
                            <li>Imposto de Renda (IR) e Contribuição Social sobre o Lucro (CSL) totalizam cerca de 3,08%;</li>
                            <li>No entanto, em produtos agropecuários, há a desoneração do PIS/COFINS. Isso significa que essas contribuições não incidem na saída desses produtos.</li>
                            <li>A contribuição previdenciária, que corresponde a 2,05% sobre o faturamento.</li>
                            <li>Somando todas as cargas tributárias, chegamos a 5,13%. Como não há PIS/COFINS, não há oneração adicional, já que grande parte do setor agropecuário está desonerada no regime presumido.</li>
                            <li>Mas o cenário muda com a reforma tributária, a criação da CBS (Contribuição sobre Bens e Serviços) e do IBS (Imposto sobre Bens e Serviços) terá um impacto significativo.</li>
                            <li>Mudança na Tributação: Isso significa que atividades que atualmente têm desoneração para pessoas físicas podem passar a ser contribuintes desses novos impostos.</li>
                        </ul>
                    </main> */}


                </div>
                <div>
                    <footer className="flex flex-col">
                        <div className="flex justify-between">
                            <span className="text-xs text-amber-600 opacity-50">@adv.marilia_</span>
                            <a href="/" className="flex items-center gap-1 text-sm text-slate-300 hover:text-slate-100 opacity-80 hover:opacity-100">
                                <CircleChevronRightIcon className="size-4 text-white" />
                            </a>
                        </div>
                    </footer>
                    <div className="user-select-none center pointer-events-none absolute -bottom-0 left-1/2 h-px w-full -translate-x-1/2 -translate-y-1/2 transform-gpu [background:linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(199,160,0.65)_50%,rgba(0,0,0,0)_100%)]"></div>
                </div>
            </section>
        </div>
    )
}
