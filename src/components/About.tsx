import MaríliaPerfil from '../../public/Marília-Completa.png'

import Image from 'next/image'

export const About = () => {
    return (
        <section className="w-full flex items-center justify-center border-b border-zinc-900 bg-black">
            <div className="max-w-screen-xl flex flex-col items-center justify-center gap-10 md:flex-row py-6">
                <div className="flex flex-col justify-center py-6 lg:max-w-2xl">
                    <h2 className='text-lg text-amber-600 font-bold pb-4'>Marília de Souza</h2>
                    <p className='text-justify tracking-tight'>Acredito que o direito tributário e processual não precisa ser complicado e inacessível. Meu compromisso é simplificar conceitos e tornar o assunto compreensível tanto para pessoas físicas quanto para empresas. Minha missão é desmistificar o complexo mundo dos tributos, oferecendo informações claras e práticas para você tomar decisões conscientes. Em caso de dúvidas estou à disposição para esclarecer questões e ajudar você a navegar pelo labirinto tributário. ✨❤️</p>
                </div>
                <div className='bg-amber-950 shadow-md shadow-black rounded-sm flex items-center justify-center bg-imagem-fundo bg-cover bg-no-repeat w-full'>
                    <Image src={MaríliaPerfil} alt="Marília Perfil" className='w-full sm:w-96' />
                </div>
            </div>
        </section>
    )
}
