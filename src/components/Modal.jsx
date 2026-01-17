import { useState } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";


function Modal({ isOpen, onClose, projeto }) {

  const [indiceImagem, setIndiceImagem] = useState(0)

  if (!isOpen || !projeto) return null;

  const proximaImagem = () => {
    setIndiceImagem((prev) => {
      if (prev === projeto.imagem.length - 1) {
        return 0;
      }
      return prev + 1;
    });
  };

  const imagemAnterior = () => {
    setIndiceImagem((prev) => {
      if (prev === 0) {
        return projeto.imagem.length - 1;
      }
      return prev - 1;
    });
  };

  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-overlay") onClose()
  }

  return (
    <div id="modal-overlay" onClick={handleOutsideClick} className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex justify-center items-center p-4 fade-1">

      <div className="bg-slate-900 border border-white/20 rounded-xl w-[90%] max-w-2xl md:h-[90%] relative shadow-2xl animate-fade-in-up flex flex-col md:flex-col max-h-[80dvh] overflow-hidden">

        <div className="relative w-full h-64 md:h-auto bg-black flex items-center justify-center group">

          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-white hover:text-white text-2xl font-bold transition"
          >
            &times;
          </button>

          <img
            src={projeto.imagem[indiceImagem]}
            alt={projeto.title}
            className="w-full h-full object-contain" 
          />

          {projeto.imagem.length > 1 && (
            <>
              <button
                onClick={imagemAnterior}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/80 transition"
              >
                &#10094; 
              </button>
              
              <button
                onClick={proximaImagem}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/80 transition"
              >
                &#10095;
              </button>
             
              <div className="absolute bottom-2 flex gap-2">
                {projeto.imagem.map((_, idx) => (
                  <div
                    key={idx}
                    className={`w-2 h-2 rounded-full ${idx === indiceImagem ? 'bg-white' : 'bg-white/30'}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
       
        <div className="p-6 md:w-full flex flex-col overflow-y-auto">
          {projeto.conteudoExtra && (
            <div className="w-full md:max-w-sm mb-6 md:mx-auto">
              {projeto.conteudoExtra}
            </div>
          )}

          <h2 className="text-2xl font-bold text-white -mb-3">{projeto.titulo}</h2>
          <p className="text-gray-300 text-lg font-bold leading-relaxed">
            {projeto.title}
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">{projeto.titulo}</h2>
          <p className="text-gray-300 mb-6 text-sm leading-relaxed">
            {projeto.descricao}
          </p>

          <div className="mt-auto flex gap-3">
            <a href={projeto.linkSite} target="_blank" className="bg-white text-black px-4 py-2 rounded font-bold hover:bg-gray-200 transition text-center w-full">
              Ver Projeto
            </a>
            <a href={projeto.linkRepo} target="_blank" className="border border-white/30 text-white px-4 py-2 rounded hover:bg-white/10 transition text-center w-full">
              GitHub
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Modal;