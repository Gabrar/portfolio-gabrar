import InfiniteCarousel from "../components/InfiniteCarousel"
import Button from "../components/Button"
import { Download } from "lucide-react"

function LandingPage() {
    return (
        <div className="relative overflow-y-auto min-h-dvh flex flex-col items-center justify-center font-montserrat pt-20 pb-10 px-4 sm:px-6 lg:px-8">
            <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-7xl mx-auto my-auto">

                <main className="w-full flex flex-col items-center">
                    <div className="w-full flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-8 lg:gap-12 items-center">

                        {/* Coluna de Texto e Apresentação */}
                        <div className="flex flex-col text-center md:text-left gap-2 sm:gap-3 order-2 md:order-1">
                            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-slate-300 fade-1 opacity-0 tracking-widest">
                                Olá, meu nome é
                            </span>

                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white fade-2 opacity-0 tracking-widest">
                                Gabriel <span className="text-blue-400">Dias</span>
                            </h1>

                            <div className="tracking-widest font-pixel text-sm sm:text-base md:text-lg lg:text-xl text-blue-300 animate-bounce mt-2 sm:mt-4">
                                <span className="fade-4 opacity-0">Desenvolvedor Web FullStack</span>
                            </div>

                            {/* Carrossel de Tecnologias */}
                            <div className="w-full max-w-xs sm:max-w-md md:max-w-lg mx-auto md:mx-0 mt-4 sm:mt-6 fade-5 opacity-0">
                                <InfiniteCarousel />
                            </div>

                            {/* Botões de Ação */}
                            <div className="flex flex-wrap justify-center md:justify-start gap-2.5 sm:gap-4 mt-6 sm:mt-8">
                                <Button
                                    text={'Sobre mim'}
                                    page={'/sobre'}
                                    animation={'animation-right'}
                                    opacity={0}
                                />
                                <Button
                                    text={'Projetos'}
                                    page={'/projetos'}
                                    animation={'animation-top'}
                                    opacity={0}
                                />
                                <Button
                                    text={'Contato'}
                                    page={'/contato'}
                                    animation={'animation-left'}
                                    opacity={0}
                                />
                                <a
                                    href="/archives/Gabriel_Dias_Siqueira_Curriculo.pdf"
                                    download="Currículo Gabriel Dias Siqueira.pdf"
                                    className="px-4 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-sm font-medium bg-blue-600/80 hover:bg-blue-600 border border-blue-400/40 rounded-xl text-white shadow-lg shadow-blue-600/20 hover:shadow-blue-500/30 flex items-center gap-2 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer animation-bot opacity-0"
                                >
                                    <Download className="size-4" />
                                    <span>Baixar CV</span>
                                </a>
                            </div>
                        </div>

                        {/* Coluna da Imagem */}
                        <div className="flex justify-center md:justify-end items-center order-1 md:order-2">
                            <div className="animation-left opacity-0 relative group">
                                <div className="absolute inset-0 rounded-full bg-blue-500/25 blur-2xl group-hover:blur-3xl transition-all"></div>
                                <img 
                                    src="/gabrar-pictures/gabrar.jpeg" 
                                    alt="Foto de perfil de Gabriel Dias" 
                                    className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-96 lg:h-96 xl:w-[420px] xl:h-[420px] 2xl:w-[480px] 2xl:h-[480px] aspect-square object-cover rounded-full border-4 sm:border-[5px] border-white/80 shadow-2xl shadow-blue-500/25 transition-transform duration-300 group-hover:scale-105" 
                                />
                            </div>
                        </div>

                    </div>
                </main>

            </div>
        </div>
    )
}

export default LandingPage
