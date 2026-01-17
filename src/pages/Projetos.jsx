import { useState } from "react"
import Card from "../components/CardProjetos"
import Modal from "../components/Modal"
import EditCarousel from "../components/EditCarousel";
import { FaReact, FaNodeJs, } from "react-icons/fa";
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
            descricao: 'Um sistema para um seto de TI de uma Universidade que facilita o empréstimo de materiais de apoio para alunos e docentes. ',
            conteudoExtra: (
                <EditCarousel 
                    icones={[
                        <FaReact className={`${iconClass}`}/>,
                        <RiTailwindCssFill className={`${iconClass}`}/>,
                        <FaNodeJs className={`${iconClass}`}/>,
                        <SiMysql className={`${iconClass}`}/>
                    ]}
                />
            ),
            linkSite: 'https://google.com',
            linkRepo: 'https://github.com'
        },

        {
            id: 2,
            title: 'Cine Data',
            imagem: [
                '/projects/cine-data.png',
                '/projects/description/emprestimos/login-page.jpeg',
                '/projects/description/emprestimos/landing-page.jpeg',
                '/projects/description/emprestimos/components-show.jpeg',
                '/projects/description/emprestimos/sheets-history.jpeg'
            ],
            descricao: 'Descrição detalhada do sistema de empréstimos...',
            linkSite: 'https://cine-data.vercel.app/',
            linkRepo: 'https://github.com/Gabrar/cine-data'
        },
        
    ]

    return (
        <div className="relative overflow-hidden h-dvh flex flex-col text-center font-montserrat pt-20">

            <h1 className="text-2xl fade-1">Conheça um pouco do meu trabalho!</h1>

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
                isOpen={!!projetoAberto} // Verdadeiro se tiver um projeto selecionado
                onClose={() => setProjetoAberto(null)} // Fecha o modal limpando o estado
                projeto={projetoAberto || {}} // Passa os dados do projeto
            />

        </div>
    )
}

export default Projetos

/* {
            id: 2,
            title: 'Cine Data',
            imagem: [
                'src/assets/projects/emprestimos-dti.png',
                'src/assets/projects/description/emprestimos/login-page',
                'src/assets/projects/description/emprestimos/landing-page',
                'src/assets/projects/description/emprestimos/components-show',
                'src/assets/projects/description/emprestimos/sheets-history'
            ],
            descricao: 'Descrição detalhada do Cine Data...',
            linkSite: 'https://google.com',
            linkRepo: 'https://github.com'
        },*/