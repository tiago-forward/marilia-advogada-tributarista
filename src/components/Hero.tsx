export const Hero = () => {
    return (
        <section className="w-full h-[90vh] flex items-center justify-center border-b border-zinc-900 backgroundGrandientHero">
            <div className="max-w-screen-xl flex flex-col lg:flex-row">
                <div className="w-full flex flex-col justify-start">
                    <h1 className="text-5xl lg:text-7xl font-roboto-slab tracking-wide">Marília de Souza</h1>
                    <p className="text-xl lg:text-3xl mt-4 font-oswald">Seja bem-vindo(a) ao meu perfil!</p>
                    <p className="text-xl lg:text-3xl font-oswald tracking-wide">Sou advogada especializada em Direito tributário no escritório <span className="text-blue-700 font-bold lg:text-xl hover:underline"><a href="https://advocaciajf.com/" target="_blank">JF Advocacia tributária</a></span>.</p>
                </div>
                <div className="max-w-96 lg:w-96"></div>
            </div>
        </section>
    )
}
