import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, X, ExternalLink, Github } from "lucide-react";

function Modal({ isOpen, onClose, projeto }) {
  const [indiceImagem, setIndiceImagem] = useState(0);
  const [prevProjetoId, setPrevProjetoId] = useState(projeto?.id);

  const totalImagens = projeto?.imagem?.length || 0;

  // Reseta o índice da imagem ao abrir outro projeto
  if (projeto?.id !== prevProjetoId) {
    setPrevProjetoId(projeto?.id);
    setIndiceImagem(0);
  }

  const proximaImagem = useCallback(() => {
    if (totalImagens <= 1) return;
    setIndiceImagem((prev) => (prev === totalImagens - 1 ? 0 : prev + 1));
  }, [totalImagens]);

  const imagemAnterior = useCallback(() => {
    if (totalImagens <= 1) return;
    setIndiceImagem((prev) => (prev === 0 ? totalImagens - 1 : prev - 1));
  }, [totalImagens]);

  // Teclas de atalho e bloqueio do scroll no body
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") proximaImagem();
      if (e.key === "ArrowLeft") imagemAnterior();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, proximaImagem, imagemAnterior]);

  if (!isOpen || !projeto) return null;

  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-overlay") onClose();
  };

  return (
    <div
      id="modal-overlay"
      onClick={handleOutsideClick}
      className="fixed inset-0 bg-slate-950/85 backdrop-blur-md z-50 flex justify-center items-center p-3 sm:p-5 md:p-6 fade-1"
    >
      <div className="bg-slate-900 border border-white/15 rounded-2xl w-full max-w-2xl lg:max-w-3xl max-h-[92dvh] relative shadow-2xl shadow-blue-950/50 flex flex-col overflow-hidden animate-modal">
        {/* Botão de Fechar Flutuante */}
        <button
          onClick={onClose}
          aria-label="Fechar modal"
          className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 z-20 p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/20 transition-all backdrop-blur-md cursor-pointer hover:scale-105 active:scale-95"
        >
          <X className="size-4 sm:size-5" />
        </button>

        {/* Galeria de Imagens com Carousel Responsivo */}
        <div className="relative w-full bg-slate-950 flex items-center justify-center overflow-hidden min-h-[180px] max-h-[220px] sm:max-h-[300px] md:max-h-[360px]">
          <img
            src={projeto.imagem[indiceImagem]}
            alt={projeto.title}
            className="w-full max-h-[220px] sm:max-h-[300px] md:max-h-[360px] object-contain transition-opacity duration-300 select-none"
          />

          {totalImagens > 1 && (
            <>
              {/* Botão Anterior */}
              <button
                onClick={imagemAnterior}
                aria-label="Imagem anterior"
                className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 rounded-full bg-black/60 hover:bg-black/85 text-white/90 hover:text-white border border-white/15 transition-all backdrop-blur-sm hover:scale-110 active:scale-95 cursor-pointer"
              >
                <ChevronLeft className="size-4 sm:size-5" />
              </button>

              {/* Botão Próximo */}
              <button
                onClick={proximaImagem}
                aria-label="Próxima imagem"
                className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 rounded-full bg-black/60 hover:bg-black/85 text-white/90 hover:text-white border border-white/15 transition-all backdrop-blur-sm hover:scale-110 active:scale-95 cursor-pointer"
              >
                <ChevronRight className="size-4 sm:size-5" />
              </button>

              {/* Contador de Imagens */}
              <div className="absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 bg-black/70 backdrop-blur-md border border-white/10 text-white/90 text-[10px] sm:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full font-mono">
                {indiceImagem + 1} / {totalImagens}
              </div>

              {/* Indicadores / Bolinhas */}
              <div className="absolute bottom-2.5 right-2.5 sm:right-auto sm:left-1/2 sm:-translate-x-1/2 flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-2 py-0.5 sm:py-1 rounded-full">
                {projeto.imagem.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setIndiceImagem(idx)}
                    aria-label={`Ir para imagem ${idx + 1}`}
                    className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === indiceImagem
                        ? "w-4 sm:w-5 bg-blue-500"
                        : "w-1.5 sm:w-2 bg-white/40 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Informações e Detalhes do Projeto */}
        <div className="p-4 sm:p-6 md:p-7 flex flex-col gap-3.5 sm:gap-4 overflow-y-auto">
          {/* Título */}
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-wide text-center">
            {projeto.title}
          </h2>

          {/* Carrossel de Tecnologias */}
          {projeto.conteudoExtra ? (
            <div className="py-2.5 sm:py-3 border-y border-white/10">
              <span className="text-[11px] sm:text-xs uppercase font-semibold text-slate-400 tracking-wider block mb-2 text-center">
                Tecnologias utilizadas
              </span>
              <div className="w-full max-w-sm mx-auto">
                {projeto.conteudoExtra}
              </div>
            </div>
          ) : projeto.tags && projeto.tags.length > 0 ? (
            <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 py-2 border-y border-white/10">
              {projeto.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs font-medium px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}

          {/* Descrição */}
          <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed text-justify sm:text-left">
            {projeto.descricao}
          </p>

          {/* Botões de Ação */}
          <div className="mt-2 sm:mt-4 pt-3.5 sm:pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-2.5 sm:gap-3">
            {projeto.linkSite && (
              <a
                href={projeto.linkSite}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 sm:py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0 text-center text-xs sm:text-sm"
              >
                <ExternalLink className="size-4" />
                <span>Ver Projeto</span>
              </a>
            )}

            {projeto.linkRepo && (
              <a
                href={projeto.linkRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 sm:py-3 px-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold transition-all hover:border-white/40 hover:-translate-y-0.5 active:translate-y-0 text-center text-xs sm:text-sm"
              >
                <Github className="size-4" />
                <span>Repositório GitHub</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
