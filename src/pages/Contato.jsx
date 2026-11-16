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
                background: 'rgba(30, 41, 59, 0.95)',
                timer: 1500,
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
        <div className="relative overflow-y-auto min-h-dvh flex flex-col items-center justify-start font-montserrat pt-20 pb-12 px-4 sm:px-6 lg:px-8 fade-2 opacity-0">
            <div className="w-full max-w-xl mx-auto flex flex-col items-center justify-center my-auto">

                <div className="text-center mb-6 sm:mb-8">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                        Entre em Contato
                    </h1>
                    <p className="text-xs sm:text-sm text-slate-400 mt-2">
                        Envie uma mensagem e retornarei o mais rápido possível!
                    </p>
                </div>

                <form
                    className="w-full flex flex-col bg-slate-800/40 border border-white/15 backdrop-blur-md rounded-2xl p-5 sm:p-7 md:p-8 shadow-2xl shadow-blue-950/40 text-left"
                    onSubmit={sendEmail}
                >
                    <label className="text-slate-200 mb-1.5 text-xs sm:text-sm font-semibold">Nome</label>
                    <input
                        className="mb-4 p-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all"
                        type="text"
                        placeholder="Digite seu nome"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />

                    <label className="text-slate-200 mb-1.5 text-xs sm:text-sm font-semibold">Email</label>
                    <input
                        className="mb-4 p-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all"
                        type="email"
                        placeholder="Digite seu email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />

                    <label className="text-slate-200 mb-1.5 text-xs sm:text-sm font-semibold">Mensagem</label>
                    <textarea
                        className="mb-6 p-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all resize-none h-32"
                        placeholder="Sua mensagem..."
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                    />

                    <button
                        className="w-full py-3 sm:py-3.5 px-6 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer text-sm sm:text-base"
                        type="submit"
                    >
                        Enviar Mensagem
                    </button>
                </form>

                {/* Botões de Navegação */}
                <div className='flex flex-wrap justify-center gap-2.5 sm:gap-4 mt-8'>
                    <Button
                        text={'Projetos'}
                        page={'/projetos'}
                        opacity={0}
                        animation={'fade-1'}
                    />
                    <Button
                        text={'Sobre mim'}
                        page={'/sobre'}
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

                <FlashMessage
                    msg='Mensagem enviada com sucesso!'
                    color={'bg-green-500/90 text-white font-semibold'}
                    visible={isMessageVisible}
                    onClose={closeMessage}
                />

            </div>
        </div>
    )
}

export default Contato
