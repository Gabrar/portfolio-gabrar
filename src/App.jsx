import { Outlet, useNavigate } from "react-router-dom"
import { Analytics } from "@vercel/analytics/react"
import { Github, Linkedin } from "lucide-react"

function App() {
  const navigate = useNavigate()
  
  return (
    <main className="relative min-h-dvh w-full overflow-hidden bg-slate-900 text-white flex flex-col">

      {/* Orbes de luz responsivas de fundo */}
      <div className="pointer-events-none absolute -top-20 -left-20 w-64 sm:w-80 h-64 sm:h-80 bg-blue-600/20 rounded-full blur-[80px] animate-pulse" style={{ animationDuration: "4s" }}></div>
      <div className="pointer-events-none absolute top-1/4 -right-20 w-60 sm:w-72 h-60 sm:h-72 bg-blue-500/15 rounded-full blur-[80px] animate-pulse" style={{ animationDuration: "6s" }}></div>
      <div className="pointer-events-none absolute top-1/2 left-1/3 w-64 sm:w-80 h-64 sm:h-80 bg-blue-600/15 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: "8s" }}></div>
      <div className="pointer-events-none absolute -bottom-20 -left-20 w-72 sm:w-96 h-72 sm:h-96 bg-blue-600/20 rounded-full blur-[90px] animate-pulse" style={{ animationDuration: "5s" }}></div>
      <div className="pointer-events-none absolute -bottom-10 right-10 w-64 sm:w-80 h-64 sm:h-80 bg-blue-500/20 rounded-full blur-[90px] animate-pulse" style={{ animationDuration: "7s" }}></div>

      {/* Header Fixo */}
      <header className="w-full px-4 sm:px-8 py-4 flex flex-row items-center absolute top-0 z-20 bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-transparent backdrop-blur-md">
        <div 
          className="text-xl sm:text-2xl font-bold tracking-tight cursor-pointer hover:text-blue-300 transition-colors" 
          onClick={() => navigate('/')}
        >
          Gabrar<span className="text-blue-400">DEV</span>
        </div>
        <div className="flex ml-auto items-center gap-4 sm:gap-6">
          <a 
            href="https://github.com/Gabrar" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub de Gabriel"
            className="p-1 rounded-full text-slate-300 hover:text-white hover:scale-110 transition-all"
          >
            <Github className="size-5 sm:size-6" />
          </a>
          <a 
            href="https://www.linkedin.com/in/gabriel-dias-siqueira-2a8972403/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn de Gabriel"
            className="p-1 rounded-full text-slate-300 hover:text-white hover:scale-110 transition-all"
          >
            <Linkedin className="size-5 sm:size-6" />
          </a>
        </div>
      </header>

      <Analytics />
      
      {/* Conteúdo das Páginas */}
      <div className="flex-1 flex flex-col w-full">
        <Outlet />
      </div>
      
    </main>
  )
}

export default App
