import MaríliaPerfil from '../../public/Marília-Completa.png'

import Image from 'next/image'

export const About = () => {
    return (
        <section className="w-full flex flex-col items-center justify-center border-b border-zinc-900 bg-black">
            <h2 className='text-center pt-6 lg:pb-6 text-2xl lg:text-4xl font-oswald tracking-wide'>Sobre mim</h2>
            <div className="max-w-screen-xl flex flex-col items-center justify-center gap-10 md:flex-row py-6">
                <div className="flex flex-col justify-center py-6 lg:max-w-2xl">
                    <h3 className='text-lg lg:text-2xl text-red-600 font-bold pb-4 font-sans'>Marília de Souza</h3>
                    <p className='text-justify tracking-tight font-oswald text-base lg:text-xl leading-7 lg:leading-9'>Acredito que o direito tributário e processual não precisa ser complicado e inacessível. Meu compromisso é simplificar conceitos e tornar o assunto compreensível tanto para pessoas físicas quanto para empresas. Minha missão é desmistificar o complexo mundo dos tributos, oferecendo informações claras e práticas para você tomar decisões conscientes. Em caso de dúvidas estou à disposição para esclarecer questões e ajudar você a navegar pelo labirinto tributário. ✨❤️</p>
                </div>
                <div className='bg-amber-950 shadow-md shadow-black rounded-sm flex items-center justify-center bg-imagem-fundo bg-cover bg-no-repeat w-full'>
                    <Image src={MaríliaPerfil} alt="Marília Perfil" className='w-full sm:w-96' />
                </div>
            </div>
        </section>
    )
}
