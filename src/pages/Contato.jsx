import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Button from '../components/Button';
import FlashMessage from '../components/FlashMessage';
import Swal from 'sweetalert2';

function Contato() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [isMessageVisible, setIsMessageVisible] = useState(false);
    // STATES DA FLASH MESSAGE QUE ATUALIZARÃO APÓS CLICAR NO BOTÃO DE CONFIRMAR
    const closeMessage = () => {
        setIsMessageVisible(false)
    }

    function sendEmail(e) {
        e.preventDefault();

        if (name === '' || email === '' || message === '') {
            Swal.fire({
                text: 'Preencha todos os campos!',
                color: 'rgb(255, 255, 255)',
                showConfirmButton: false,
                background: 'rgba(98, 116, 142, 0.24)',
                timer: 1200,
                width: 300
            });
            return;
        }

        const templateParams = {
            name: name,
            message: message,
            email: email,
            reply_to: email
        }

        emailjs.send("service_zok979a", "template_ctxiopg", templateParams, "ma8tBFKlYQTcfuJ1a")
            .then((response) => {
                console.log("EMAIL ENVIADO", response.status, response.text);
                setName('');
                setEmail('');
                setMessage('');
                setIsMessageVisible(true)
            }, (err) => {
                console.log("ERRO: ", err);
                alert("Erro ao enviar mensagem, tente novamente mais tarde.");
            });
    }
    return (
        <div className="relative overflow-y-auto h-dvh flex flex-col items-center text-center font-montserrat pt-5 opacity-0 fade-2">
            <div className="relative min-h-1dvh flex flex-col items-center justify-start font-montserrat pt-20 pb-10 px-4">

                <h1 className="text-3xl font-bold text-white mb-8">Entre em Contato</h1>

                <div className='flex flex-col gap-5'>

                    
                    
                    <form
                        className="flex flex-col w-full max-w-125 md:w-250 bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/30"
                        onSubmit={sendEmail}
                    >
                        <label className="text-white mb-2 font-medium">Nome</label>
                        <input
                            className="mb-4 p-3 rounded-md bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:border-white transition-colors"
                            type="text"
                            placeholder="Digite seu nome"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                        <label className="text-white mb-2 font-medium">Email</label>
                        <input
                            className="mb-4 p-3 rounded-md bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:border-white transition-colors"
                            type="email"
                            placeholder="Digite seu email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                        <label className="text-white mb-2 font-medium">Mensagem</label>
                        <textarea
                            className="mb-6 p-3 rounded-md bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:border-white transition-colors resize-none h-32"
                            placeholder="Sua mensagem..."
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                        />
                        <button
                            className="p-3 bg-white text-black font-bold rounded-md hover:bg-gray-200 transition-all hover:scale-105"
                            type="submit"
                            
                        >
                            Enviar Mensagem
                        </button>
                    </form>

                    <div className='flex justify-center gap-5'>
                        <Button
                            text={'Projetos'}
                            page={'/projetos'}
                            opacity={0}
                            animation={'fade-1'}
                        />
                        <Button
                            text={'Sobre'}
                            page={'/sobre'}
                            opacity={0}
                            animation={'fade-2'}
                        />
                        <Button
                            text={'Pagina Inicial'}
                            page={'/'}
                            opacity={0}
                            animation={'fade-3'}
                        />
                    </div>

                </div>



                <FlashMessage
                    msg='Mensagem enviado com sucesso.'
                    color={'bg-green-300'}
                    type='sucess'
                    visible={isMessageVisible}
                    onClose={closeMessage}
                />

            </div>
        </div>
    )
}

export default Contato