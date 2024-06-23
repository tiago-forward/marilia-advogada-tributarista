import Image from "next/image";

import { Heart, Navigation, Bookmark, MessageCircleMore } from "lucide-react";
import ImagemIlustrativa from '../../../../../../public/img-posts/Imagem do WhatsApp de 2024-06-09 à(s) 16.58.57_13f4e412.jpg'
import FotoPerfil from '../../../../../../public/img-posts/FotoPerfilCapa.jpg'
import SeloVerificado from '../../../../../../public/img-posts/verificado.png'

export default function PostFeedFinal() {
    return (
        <div className="flex flex-col items-center gap-4 mb-10 max-w-md m-auto">
            {/* <section className="flex flex-col justify-between relative mt-10 w-[446px] h-[446px] p-10 bg-[#0f39f616]"> */}
            <section className="flex flex-col justify-between relative mt-10 w-[446px] h-[446px] p-10">
                <Image src={ImagemIlustrativa} alt="nada" className="opacity-30 blur-sm" fill />
                <div className="m-auto p-4 rounded-2xl bg-[rgb(30,_41,_59,_60%)] z-10">
                    <main className="w-[350px]">
                        <header className="flex items-center gap-2 p-0 w-[350px]">
                            <div>
                                <Image src={FotoPerfil} alt="foto perfil" className="rounded-full size-14 saturate-0 brightness-90" />
                            </div>
                            <div className="flex flex-col z-10 text-slate-200">
                                <div className="flex items-center gap-2">
                                    <span className="text-md font-medium">Marília Souza</span>
                                    <Image src={SeloVerificado} alt="Selo Verificado" className="rounded-xl size-3" />
                                </div>
                                <span className="text-xs text-amber-600 opacity-50">@adv.marilia_</span>
                            </div>
                        </header>
                        <div className="mt-4">
                            <p className="text-slate-200">Quer ver sua empresa <span className="bg-[#361717] rounded-3xl px-1">decolando</span>?</p>
                            {/* <p className="text-slate-200">Quer ver sua empresa <span className="bg-[#0F39F6] rounded-3xl px-2">decolando</span> ?</p> */}
                            <p>Mande uma mensagem, juntos podemos voar até o sucesso!</p>
                        </div>
                    </main>
                </div>
                <footer className="w-full">
                    <ul className="flex items-center justify-center gap-4 text-amber-600">
                        <li className="flex items-center gap-1">
                            <Heart />
                            <p>Curte</p>
                        </li>
                        <li className="flex items-center gap-1">
                            <MessageCircleMore />
                            <p>Comenta</p>
                        </li>
                        <li className="flex items-center gap-1">
                            <Navigation />
                            <p>Compartilha</p>
                        </li>
                        <li className="flex items-center gap-1">
                            <Bookmark />
                            <p>Salva</p>
                        </li>
                    </ul>
                </footer>
                <div className="user-select-none center pointer-events-none absolute -bottom-0 left-1/2 h-px w-full -translate-x-1/2 -translate-y-1/2 transform-gpu [background:linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(199,160,0.65)_50%,rgba(0,0,0,0)_100%)]"></div>
            </section>
        </div>
    )
}
