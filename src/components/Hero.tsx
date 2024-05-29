export const Hero = () => {
    return (
        <section className="w-full h-[90vh] flex items-center justify-center border-b border-zinc-900 backgroundGrandientHero">
            <div className="max-w-screen-xl flex flex-col lg:flex-row">
                <div className="w-full flex flex-col justify-start">
                    <h1 className="text-4xl lg:text-6xl font-open-sans">Marília de Souza</h1>
                    <p className="text-base lg:text-xl mt-4">Seja bem-vindo(a) ao meu perfil!</p>
                    <p className="text-base lg:text-xl">Sou advogada especializada em Direito tributário no escritório <span className="text-blue-700 text-base lg:text-xl hover:underline"><a href="https://advocaciajf.com/" target="_blank">JF Advocacia tributária</a></span>.</p>
                </div>
                <div className="max-w-96 lg:w-96"></div>
            </div>
        </section>
    )
}
