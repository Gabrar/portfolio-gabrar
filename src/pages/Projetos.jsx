import { useState } from "react"
import Card from "../components/CardProjetos"
import Modal from "../components/Modal"
import Button from "../components/Button";
import EditCarousel from "../components/EditCarousel";
import { FaReact, FaNodeJs, FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill, RiSupabaseFill, RiFirebaseFill } from "react-icons/ri"
import { SiMysql } from "react-icons/si"
import { TbBrandNextjs, TbBrandTypescript } from "react-icons/tb";

function Projetos() {

    const iconClass = "size-8 md:size-8 lg:size-12"

    const [projetoAberto, setProjetoAberto] = useState(null);

    const listaProjetos = [
        {
            id: 1,
            title: "CeosSystem",
            tags: ["Next.js", "Tailwind CSS", "Supabase", "Firebase", "Node.js"],
            imagem: [
                '/projects/ceossystem.png',
                '/projects/description/ceossystem/event-pages.png',
                '/projects/description/ceossystem/event-description1.png',
                '/projects/description/ceossystem/event-description2.png',
                '/projects/description/ceossystem/user-panel.png',
                '/projects/description/ceossystem/info.png'
            ],
            descricao: 'O CeosSystem é um projeto Fullstack com foco em gestão de eventos e serviços, desenvolvido para otimizar a experiência tanto para os organizadores quanto para os clientes. A plataforma permite que administradores criem e gerenciem eventos com todas as informações necessárias, enquanto os usuários podem acessar, filtrar e se inscrever nos eventos de forma rápida e intuitiva. O sistema utiliza banco de dados Firebase para o armazenamento de dados, Supabase para o upload de imagens e documentos e oferece um painel de controle completo para o gerenciamento de todas as funcionalidades.',
            conteudoExtra: (
                <EditCarousel
                    icones={[
                        <TbBrandNextjs className={`${iconClass}`} />,
                        <RiTailwindCssFill className={`${iconClass}`} />,
                        <RiSupabaseFill className={`${iconClass}`} />,
                        <RiFirebaseFill className={`${iconClass}`} />,
                        <FaNodeJs className={`${iconClass}`} />
                    ]}
                />
            ),
            linkSite: 'https://ceossystem.vercel.app/',
            linkRepo: 'https://github.com/Gabrar/ceossystem'
            
        },
        {
            id: 2,
            title: 'Núcleo Processual',
            tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
            imagem: [
                '/projects/nucleo-processual.jfif',
                '/projects/description/nucleo-processual/anexo.jfif',
                '/projects/description/nucleo-processual/criar-usuario.jfif',
                '/projects/description/nucleo-processual/processos.jfif',
                '/projects/description/nucleo-processual/usuarios.jfif'
            ],
            descricao: 'O núcleo processual inicialmente foi um projeto piloto para apresentação que me ajudou a entender melhor como trabalhar com NextJS e TypeScript. O projeto final seria implementado com Firebase utilizando PostgreSQL, caso fosse aceito. Apesar de ser apenas um piloto, o resultado ficou satisfatório e então resolvi deixar exposto em meu Portfólio.',
            conteudoExtra: (
                <EditCarousel
                    icones={[
                        <TbBrandNextjs className={`${iconClass}`} />,
                        <TbBrandTypescript className={`${iconClass}`} />,
                        <RiTailwindCssFill className={`${iconClass}`} />,
                        <FaNodeJs className={`${iconClass}`} />
                    ]}
                />
            ),
            linkRepo: 'https://github.com/Gabrar/nucleo-processual'
        },
        {
            id: 3,
            title: 'Sistema de Empréstimos',
            tags: ['React', 'Tailwind CSS', 'Node.js', 'MySQL'],
            imagem: [
                '/projects/emprestimos-dti.png',
                '/projects/description/emprestimos/login-page.jpeg',
                '/projects/description/emprestimos/landing-page.jpeg',
                '/projects/description/emprestimos/components-show.jpeg',
                '/projects/description/emprestimos/sheets-history.jpeg'
            ],
            descricao: 'Sistema desenvolvido em ReactJS para o setor de TI de uma universidade, visando otimizar o empréstimo de materiais de apoio (notebooks, cabos HDMI, projetores, etc.). O projeto surgiu da necessidade de substituir o controle físico em papel por uma solução digital. O sistema utiliza MySQL para o gerenciamento de inventário e usuários, registrando os empréstimos localmente e exportando o histórico completo para planilhas Excel no momento da devolução.',
            conteudoExtra: (
                <EditCarousel
                    icones={[
                        <FaReact className={`${iconClass}`} />,
                        <RiTailwindCssFill className={`${iconClass}`} />,
                        <FaNodeJs className={`${iconClass}`} />,
                        <SiMysql className={`${iconClass}`} />
                    ]}
                />
            ),
            linkRepo: 'https://github.com/Gabrar/emprestimos-dti'
        },
        {
            id: 4,
            title: 'Cine Data',
            tags: ['React', 'CSS3', 'Node.js', 'APIs'],
            imagem: [
                '/projects/cine-data.png',
                '/projects/description/cine-data/batman.jpeg',
                '/projects/description/cine-data/tomb-raider.jpeg',
                '/projects/description/cine-data/joker.jpeg'
            ],
            descricao: 'O Cine Data foi um dos meus primeiros projetos práticos com React, desenvolvido para aprofundar meus conhecimentos em consumo de APIs externas e transição para o desenvolvimento Fullstack. A plataforma permite consultar informações detalhadas sobre filmes — como sinopse, ano de lançamento e avaliação no IMDB — integrando o front-end em ReactJS com um back-end em NodeJS. É um projeto que marca o início da minha jornada na stack, focado em entender como os dados fluem entre o servidor e a interface.',
            conteudoExtra: (
                <EditCarousel
                    icones={[
                        <FaReact className={`${iconClass}`} />,
                        <FaCss3Alt className={`${iconClass}`} />,
                        <FaNodeJs className={`${iconClass}`} />,
                    ]}
                />
            ),
            linkSite: 'https://cine-data.vercel.app/',
            linkRepo: 'https://github.com/Gabrar/cine-data'
        }
    ]

    return (
        <div className="relative overflow-y-auto min-h-dvh flex flex-col text-center font-montserrat pt-20 sm:pt-24 pb-12 px-4 sm:px-6 lg:px-8">

            <div className="max-w-3xl mx-auto mb-6 sm:mb-8">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight fade-1">
                    Conheça um pouco do meu trabalho!
                </h1>
                <p className="text-xs sm:text-sm text-slate-400 mt-2 fade-2">
                    Clique em um projeto para ver mais imagens e detalhes técnicos
                </p>
            </div>

            <div className="flex flex-wrap gap-5 sm:gap-6 justify-center max-w-7xl mx-auto w-full">
                {listaProjetos.map((projeto, index) => (
                    <Card
                        key={projeto.id}
                        imagem={projeto.imagem[0]}
                        title={projeto.title}
                        descricao={projeto.descricao}
                        tags={projeto.tags}
                        delay={`${index * 0.15 + 0.1}s`}
                        onClick={() => setProjetoAberto(projeto)}
                    />
                ))}
            </div>

            <Modal
                isOpen={!!projetoAberto}
                onClose={() => setProjetoAberto(null)}
                projeto={projetoAberto || {}}
            />

            <div className='flex justify-center mt-10 sm:mt-14 pb-4 gap-2.5 sm:gap-4 flex-wrap'>
                <Button
                    text={'Sobre'}
                    page={'/sobre'}
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
    )
}

export default Projetos
