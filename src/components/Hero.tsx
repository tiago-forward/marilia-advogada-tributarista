interface HeroProps {
    id: string
}

export const Hero = ({ id }: HeroProps) => {
    return (
        <section id={id} className="relative w-full h-[90vh] flex items-center justify-center border-b border-zinc-900 backgroundImagetHero bg-cover bg-center">
            <div className="absolute inset-0 z-0 backgroundGrandientHero"></div>
            <div className="relative z-10 max-w-screen-xl flex flex-col lg:flex-row items-center justify-center text-white">
                <div className="w-full flex flex-col justify-start text-center lg:text-left">
                    <h1 className="text-5xl lg:text-7xl font-roboto-slab tracking-wide">Marília Souza</h1>
                    {/* <p className="text-xl lg:text-3xl mt-4 font-oswald">Seja bem-vindo(a) ao meu perfil!</p> */}
                    {/* <p className="text-xl lg:text-3xl font-oswald tracking-wide">
                        Advogada especializada em Direito Tributário no escritório 
                        <span className="text-blue-700 font-bold lg:text-xl hover:underline">
                            <a href="https://advocaciajf.com/" target="_blank">JF Advocacia tributária</a>
                        </span>.
                    </p> */}
                </div>
                <div className="max-w-96 lg:w-96"></div>
            </div>
        </section>
    )
}
