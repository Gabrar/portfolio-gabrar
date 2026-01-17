import { useNavigate } from "react-router-dom"
import InfiniteCarousel from "../components/InfiniteCarousel"
import Button from "../components/Button"

function LandingPage() {

    const navigate = useNavigate()

    return (
        <div className="relative overflow-hidden h-dvh flex flex-col items-center text-center font-montserrat pt-20">

            <div className="relative z-10 flex flex-col items-center w-full h-full">

                <main className="mt-10 flex flex-col gap-10 ">
                    <div className="flex flex-col gap-10 lg:grid lg:grid-cols-2 max-w-7xl lg:max-w-4xl xl:max-w-7xl mx-auto font-p">
                        <div className="text-3xl flex flex-col gap- lg:justify-center 2xl:justify-start 2xl:mt-10">
                            <span className="fade-1 opacity-0 lg:text-left lg:text-5xl xl:text-6xl 2xl:text-7xl">Olá, meu nome é</span>
                            <h1 className="font-bold tracking-wider fade-2 opacity-0 lg:text-left lg:text-5xl xl:text-6xl 2xl:text-7xl"> Gabriel Dias</h1>
                            <div className="tracking-widest font-pixel animate-bounce hidden lg:block lg:text-lg lg:mt-10 lg:text-left xl:text-xl 2xl:text-2xl">
                                <h1 className="fade-4 opacity-0">Desenvolvedor Web FullStack</h1>
                            </div>
                            <div className="hidden lg:flex lg:mt-15 xl:max-w-2xl fade-5 opacity-0">
                                <InfiniteCarousel />
                            </div>
                        </div>
                        <div className="flex relative flex-col items-center lg:items-end">
                            <div className="animation-left">
                                <img src="./src/assets/gabrar.jpeg" alt="" className="h-40 md:h-50 border-3 rounded-full opacity-0 fade-3 lg:h-80 xl:h-90 2xl:h-100" />
                            </div>
                        </div>
                        <div className="tracking-widest font-pixel animate-bounce lg:hidden">
                            <h1 className="fade-4 opacity-0">Desenvolvedor Web FullStack </h1>
                        </div>
                        <div className="fade-5 opacity-0 flex max-w-sm md:max-w-xl md:-mt-2 lg:hidden">
                            <InfiniteCarousel />
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3 mt-10 font-montserrat tracking-widest md:mt-2 lg:justify-start 2xl:gap-10 2xl:mt-auto">

                        <Button
                            text={'Sobre mim'}
                            page={'/sobre'}
                            animation={'animation-right'}
                        />
                        <Button
                            text={'Projetos'}
                            page={'/projetos'}
                            animation={'animation-top'}
                        />
                        <Button
                            text={'Contato'}
                            page={'/contato'}
                            animation={'animation-left'}
                        />
                    </div>
                </main>
            </div>
        </div>
    )
}

export default LandingPage