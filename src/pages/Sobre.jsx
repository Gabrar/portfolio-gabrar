import { useNavigate } from "react-router-dom"
import Button from "../components/Button"

function Sobre() {
    const navigate = useNavigate()

    return (
        <div className="relative overflow-y-auto min-h-dvh flex flex-col items-center justify-start font-montserrat pt-20 pb-12 px-4 sm:px-6 lg:px-8">

            <div className="w-full max-w-5xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-12 mt-4 sm:mt-8">

                {/* Coluna Lateral: Foto e Navegação */}
                <div className="flex flex-col items-center shrink-0">
                    <div className="relative group">
                        <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl group-hover:blur-2xl transition-all"></div>
                        <img 
                            src="/gabrar-pictures/gabrar2.jpeg" 
                            alt="Gabriel Dias Siqueira" 
                            className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 aspect-square object-cover rounded-full border-4 border-white/80 shadow-2xl shadow-blue-500/20 hover:scale-105 transition-transform duration-300 animate-pulse fade-2 opacity-0" 
                        />
                    </div>

                    {/* Botões de Navegação Desktop */}
                    <div className="hidden lg:flex flex-col gap-3 mt-8 w-full max-w-[200px]">
                        <Button
                            text={'Projetos'}
                            page={'/projetos'}
                            opacity={0}
                            animation={'fade-1'}
                        />
                        <Button
                            text={'Contato'}
                            page={'/contato'}
                            opacity={0}
                            animation={'fade-2'}
                        />
                        <Button
                            text={'Página Inicial'}
                            page={'/'}
                            opacity={0}
                            animation={'fade-3'}
                        />
                    </div>
                </div>

                {/* Card de Texto Sobre */}
                <div className="w-full max-w-2xl lg:max-w-none flex-1 border border-white/15 bg-slate-800/40 backdrop-blur-md rounded-2xl p-5 sm:p-7 md:p-8 shadow-2xl shadow-blue-950/40 animation-right">
                    
                    <div className="border-b border-white/10 pb-5 mb-6 text-center">
                        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-wide">
                            Gabriel Dias Siqueira
                        </h1>
                        <p className="text-xs sm:text-sm text-blue-300 font-medium mt-1">
                            20 anos de idade | Ceará - Brasil | Desenvolvedor Web Fullstack
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed text-justify sm:text-left">
                        <p>
                            Sou do interior do Ceará e estudante de Análise e Desenvolvimento de Sistemas. Minha jornada na programação começou recentemente com a linguagem C na faculdade, mas foi ao migrar para HTML5 e CSS3 que me apaixonei pelo desenvolvimento web Frontend. Buscando me aprofundar, vi a necessidade de estudar também o Backend. Atualmente, estou focado em NodeJS e MySQL, consolidando meus conhecimentos para atuar como Desenvolvedor Web Fullstack.
                        </p>
                        <p>
                            Atualmente, trabalho no setor de TI de uma universidade. Embora minha função principal não seja o desenvolvimento, tomei a iniciativa de criar um sistema web para o setor que facilita o empréstimo de materiais para alunos e docentes. Você pode ver detalhes desse projeto no meu GitHub ou na seção <button className="underline text-blue-400 hover:text-blue-300 font-semibold transition-colors cursor-pointer" onClick={() => navigate('/projetos')}>'Projetos'</button>. Por isso, estou em busca de uma oportunidade para focar totalmente em desenvolvimento e mostrar meu potencial.
                        </p>
                        <p>
                            Minha linguagem de programação preferida, e o meu foco principal de aprimoramento, é o JavaScript. Em meus projetos, utilizo o ecossistema do NodeJS e ReactJS, com HTML5 e CSS3 me acompanhando desde o início. Recentemente, tenho me dedicado ao TailwindCSS pela praticidade e organização que ele traz aos projetos. No Backend, iniciei estudos em MySQL e planejo me aprofundar ainda mais em Server Side em breve.
                        </p>
                    </div>

                </div>

                {/* Botões de Navegação Mobile & Tablet */}
                <div className="flex lg:hidden flex-wrap justify-center gap-3 mt-4 w-full">
                    <Button
                        text={'Projetos'}
                        page={'/projetos'}
                        animation={'fade-1'}
                        opacity={0}
                    />
                    <Button
                        text={'Contato'}
                        page={'/contato'}
                        animation={'fade-2'}
                        opacity={0}
                    />
                    <Button
                        text={'Página Inicial'}
                        page={'/'}
                        animation={'fade-3'}
                        opacity={0}
                    />
                </div>

            </div>

        </div>
    )
}

export default Sobre
