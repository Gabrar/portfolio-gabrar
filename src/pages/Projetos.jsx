import { useState } from "react"
import Card from "../components/CardProjetos"
import Modal from "../components/Modal"
import Button from "../components/Button";
import EditCarousel from "../components/EditCarousel";
import { FaReact, FaNodeJs, FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri"
import { SiMysql } from "react-icons/si"

function Projetos() {

    const iconClass = "size-8 md:size-8 lg:size-12"

    const [projetoAberto, setProjetoAberto] = useState(null);

    const listaProjetos = [
        {
            id: 1,
            title: 'Sistema de Empréstimos',
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
            linkSite: 'https://github.com/Gabrar/emprestimos-dti',
            linkRepo: 'https://github.com/Gabrar/emprestimos-dti'
        },

        {
            id: 2,
            title: 'Cine Data',
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
        },

    ]

    return (
        <div className="relative overflow-hidden h-dvh flex flex-col text-center font-montserrat pt-20">

            <h1 className="text-2xl fade-1 font-bold">Conheça um pouco do meu trabalho!</h1>

            <div className="flex flex-wrap gap-5 mt-10 justify-center m-5">
                {listaProjetos.map((projeto) => (
                    <Card
                        key={projeto.id}
                        imagem={projeto.imagem[0]}
                        title={projeto.title}
                        onClick={() => setProjetoAberto(projeto)}
                    />
                ))}
            </div>

            <Modal
                isOpen={!!projetoAberto}
                onClose={() => setProjetoAberto(null)}
                projeto={projetoAberto || {}}
            />

            <div className='flex justify-center mt-auto pb-10 gap-5'>
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
                    text={'Pagina Inicial'}
                    page={'/'}
                    animation={'fade-3'}
                    opacity={0}
                />
            </div>

        </div>
    )
}

export default Projetos
