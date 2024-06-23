import Image from "next/image";

import { CircleChevronRightIcon } from "lucide-react";
import BackgroundImage from '../../../../../../public/img-posts/Corporativo/artiz.ai_46647A70-6A80-3162-32DE-B0EAC4A6DCE0.jpg'
import FotoPerfil from '../../../../../../public/img-posts/FotoPerfilCapa.jpg'
import SeloVerificado from '../../../../../../public/img-posts/verificado.png'

export default function PostFeedMain() {
    return (
        <div className="flex items-center justify-start mb-10 max-w-md m-auto">
            <section className="flex flex-col justify-between relative w-[446px] h-[446px] p-10 bg-black mt-40 z-10">
                <div>
                    <Image src={BackgroundImage} alt="nada" className="opacity-30 blur-sm" fill />
                    <header className="flex items-center gap-2 p-0 w-[350px]">
                        <div>
                            <Image src={FotoPerfil} alt="foto perfil" className="rounded-full size-10 saturate-0 brightness-90" />
                        </div>
                        <div className="flex flex-col z-10 text-slate-200">
                            <div className="flex items-center gap-2">
                                <span className="text-xs font-medium">Marília Souza</span>
                                <Image src={SeloVerificado} alt="Selo Verificado" className="rounded-xl size-3" />
                            </div>
                            <span className="text-[9px] text-amber-600 opacity-50">@adv.marilia_</span>
                        </div>
                    </header>
                </div>
                <div className="z-10">
                    <main className="text-3xl font-medium mt-6">
                        {/* <h1 className="text-slate-200">A Reforma tributária e os seus impactos ao <span className="bg-[#0F39F6] rounded-3xl px-2">produtor rural</span> a partir de 2026</h1> */}
                        <h1 className="text-slate-200 text-2xl mb-20">Como o planejamento tributário pode te ajudar a reduzir a carga tributária e salvar a sua emprasa ?</h1>
                        {/* className="bg-[#361717] rounded-3xl px-3" */}
                        {/* <h2 className="text-slate-200 text-sm">Entender isso é o primeiro passo para verificar se a empresa está pagando os impostos corretamente.</h2> */}
                    </main>
                </div>
                <div>
                    <footer className="flex justify-end gap-2">
                        <p className="text-xs font-oswald text-slate-300 leading-5">Veja <span className="text-slate-100">mais!</span></p>
                        <a href="/" className="flex items-center gap-1 text-sm text-slate-300 hover:text-slate-100 opacity-80 hover:opacity-100">
                            <CircleChevronRightIcon className="size-4 text-white" />
                        </a>
                    </footer>
                    <div className="user-select-none center pointer-events-none absolute -bottom-0 left-1/2 h-px w-full -translate-x-1/2 -translate-y-1/2 transform-gpu [background:linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(199,160,0.65)_50%,rgba(0,0,0,0)_100%)]"></div>
                </div>
            </section>
            <div className="backgroundGrandientPostRed h-[446px] w-[50px] mt-40 z-10">
                <p className="w-[50px]"></p>
            </div>
        </div>
    )
}
