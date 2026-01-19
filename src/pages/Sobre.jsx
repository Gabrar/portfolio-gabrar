import { useNavigate } from "react-router-dom"
import Button from "../components/Button"

function Sobre() {

    const navigate = useNavigate()

    return (
        <div className="relative overflow-y-auto h-dvh flex flex-col items-center font-montserrat pt-20 lg:items-start fade-1 lg:flex-row lg:justify-center">

            <div className="flex flex-col items-center">

                <div className="flex gap-5 justify-center lg:hidden ">
                    <Button
                        text={'Projetos'}
                        page={'/projetos'}
                        animation={'animation-top'}
                    />
                    <Button
                        text={'Contato'}
                        page={'/contato'}
                        animation={'animation-bot'}
                    />
                    <Button
                        text={'Pagina Inicial'}
                        page={'/'}
                        animation={'animation-top'}
                    />
                </div>

                <img src="/gabrar-pictures/gabrar2.jpeg" alt="" className=" border-3 border-white h-40 md:h-60 xl:h-70 m-10 mb-4 rounded-full hover:scale-110 transition lg:m-0 lg:mb-10 animate-pulse" />

                <div className="hidden lg:flex lg:gap-5 lg:justify-center ">
                    <Button
                        text={'Projetos'}
                        page={'/projetos'}
                        animation={'animation-top'}
                    />
                    <Button
                        text={'Contato'}
                        page={'/contato'}
                        animation={'animation-bot'}
                    />
                </div>

                <div className="hidden lg:block mt-5">
                    <Button
                        text={'Pagina Inicial'}
                        page={'/'}
                        animation={'animation-top'}
                    />
                </div>

            </div>

            <div className="border-3 mt-5 lg:mt-0 border-white/30 bg-white/7 h-auto w-[85%] md:w-[70%] lg:w-[60%] xl:w-[40%] rounded-md block mb-5 animation-right lg:ml-10 xl:ml-10">

                <div className="border-b m-5">
                    <h1 className="m-5 text-center text-base ">
                        <span className="text-2xl">Gabriel Dias Siqueira</span> <br /> 20 anos de idade | Ceará - Brasil <br /> Desenvolvedor web Fullstack
                    </h1>
                </div>

                <p className="m-8 text-justify">
                    Sou do interior do Ceará e estudante de Análise e Desenvolvimento de Sistemas. Minha jornada na programação começou recentemente com a linguagem C na faculdade, mas foi ao migrar para HTML5 e CSS3 que me apaixonei pelo desenvolvimento web Frontend. Buscando me aprofundar, vi a necessidade de estudar também o Backend. Atualmente, estou focado em NodeJS e MySQL, consolidando meus conhecimentos para atuar como Desenvolvedor Web Fullstack.
                </p>
                <p className="m-8 text-justify">
                    Atualmente, trabalho no setor de TI de uma universidade. Embora minha função principal não seja o desenvolvimento, tomei a iniciativa de criar um sistema web para o setor que facilita o empréstimo de materiais para alunos e docentes. Você pode ver detalhes desse projeto no meu GitHub ou na seção <button className="underline hover:text-blue-300 transition" onClick={() => navigate('/projetos')}>'Projetos'</button>. Por isso, estou em busca de uma oportunidade para focar totalmente em desenvolvimento e mostrar meu potencial.
                </p>
                <p className="m-8 text-justify">
                    Minha linguagem de programação preferida, e o meu foco principal de aprimoramento, é o JavaScript. Em meus projetos, utilizo o ecossistema do NodeJS e ReactJS, com HTML5 e CSS3 me acompanhando desde o início. <br /> Recentemente, tenho me dedicado ao TailwindCSS pela praticidade e organização que ele traz aos projetos. No Backend, iniciei estudos em MySQL e planejo me aprofundar ainda mais em Server Side em breve.
                </p>
            </div>

        </div>
    )
}

export default Sobre

/**  */