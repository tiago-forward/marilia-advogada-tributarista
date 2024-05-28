// import Image from "next/image"

// import Marilia from "../../public/Marília-Completa.png"
// import MariliaPost from "../../public/445356234_1116454596231372_5766169442103522423_n.jpeg"

export const Hero = () => {
    return (
        <section className="w-full h-[90vh] flex items-center justify-center border-b border-zinc-900 backgroundGrandientHero">
            <div className="max-w-screen-xl flex">
                <div className="w-full flex flex-col justify-start">
                    <h1 className="text-6xl font-open-sans">Marília de Souza</h1>
                    <p className="text-xl mt-4">Seja bem-vindo(a) ao meu perfil!</p>
                    <p className="text-xl">Sou advogada especializada em Direito tributário no escritório <span className="text-blue-700 hover:underline"><a href="https://advocaciajf.com/" target="_blank">JF Advocacia tributária</a></span>.</p>
                </div>
                <div className="w-96"></div>
            </div>
        </section>
    )
}
