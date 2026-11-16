import { ArrowRight } from "lucide-react";

function Card({ imagem, title, descricao, tags = [], onClick, delay = "0.1s" }) {
    return (
        <div
            onClick={onClick}
            style={{ animationDelay: delay }}
            className="group relative flex flex-col w-full max-w-[320px] sm:w-[280px] md:w-[300px] lg:w-[320px] bg-slate-800/40 hover:bg-slate-800/70 rounded-2xl border border-white/10 hover:border-blue-400/40 backdrop-blur-md overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/15 cursor-pointer animation-top opacity-0 text-left"
        >
            {/* Imagem do Projeto com Zoom e Gradiente */}
            <div className="relative aspect-video w-full overflow-hidden bg-slate-950/70">
                <img
                    src={imagem}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
            </div>

            {/* Conteúdo do Card */}
            <div className="p-4 sm:p-5 flex flex-col flex-1">
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-blue-300 transition-colors line-clamp-1">
                    {title}
                </h3>

                {descricao && (
                    <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-slate-300/80 line-clamp-2 leading-relaxed">
                        {descricao}
                    </p>
                )}

                {/* Tags de Tecnologias */}
                {tags && tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                        {tags.slice(0, 3).map((tag, idx) => (
                            <span
                                key={idx}
                                className="text-[10px] sm:text-[11px] font-medium px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-300"
                            >
                                {tag}
                            </span>
                        ))}
                        {tags.length > 3 && (
                            <span className="text-[10px] sm:text-[11px] font-medium px-1.5 py-0.5 rounded-md bg-blue-500/10 text-blue-300">
                                +{tags.length - 3}
                            </span>
                        )}
                    </div>
                )}

                {/* Ação Inferior */}
                <div className="mt-auto pt-3.5 sm:pt-4 flex items-center justify-between border-t border-white/10 text-xs font-semibold text-slate-300 group-hover:text-white transition-colors">
                    <span>Ver detalhes</span>
                    <div className="p-1.5 rounded-full bg-white/5 border border-white/10 group-hover:bg-blue-600 group-hover:border-blue-500 group-hover:text-white transition-all duration-300">
                        <ArrowRight className="size-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
