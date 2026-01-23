
import { Outlet, useNavigate } from "react-router-dom"
import { Analytics } from "@vercel/analytics/next"
import { Github, Linkedin } from "lucide-react"

function App() {
  const navigate = useNavigate()
  
  return (
    <main className="relative min-h-dvh w-full overflow-hidden bg-slate-900 text-white">

      <div className="absolute -bottom-50 -left-40 w-72 h-72 bg-blue-600/20 rounded-full blur-[80px] animate-pulse 150" style={{ animationDuration: "1s" }}></div>
      <div className="absolute -top-10 -left-20 w-72 h-72 bg-blue-600/20 rounded-full blur-[80px] animate-pulse" style={{ animationDuration: "1s" }}></div>
      <div className="absolute -bottom-10 left-45 w-72 h-72 bg-blue-600/20 rounded-full blur-[80px] animate-pulse" style={{ animationDuration: "3s" }}></div>
      <div className="absolute top-20 left-80 w-65 h-65 bg-blue-600/20 rounded-full blur-[80px] animate-pulse" style={{ animationDuration: "6s" }}></div>
      <div className="absolute top-70 left-150 w-72 h-72 bg-blue-600/20 rounded-full blur-[80px] animate-pulse" style={{ animationDuration: "4s" }}></div>
      <div className="absolute -top-50 left-150 w-72 h-72 bg-blue-600/20 rounded-full blur-[80px] animate-pulse" style={{ animationDuration: "8s" }}></div>
      <div className="absolute top-22 left-230 w-72 h-72 bg-blue-600/20 rounded-full blur-[80px] animate-pulse" style={{ animationDuration: "2s" }}></div>
      <div className="absolute -bottom-50 left-270 w-72 h-72 bg-blue-600/20 rounded-full blur-[80px] animate-pulse" style={{ animationDuration: "1s" }}></div>
      <div className="absolute top-60 left-320 w-72 h-72 bg-blue-600/20 rounded-full blur-[80px] animate-pulse" style={{ animationDuration: "5s" }}></div>
      <div className="absolute -top-60 left-330 w-72 h-72 bg-blue-600/20 rounded-full blur-[80px] animate-pulse" style={{ animationDuration: "4s" }}></div>

      <header className="w-full p-5 flex flex-row absolute top-0 z-10 bg-linerar-to-b from-slate-900/60 to-transparent backdrop-blur-md">
        <div className="-tracking-widest text-2xl text-start cursor-pointer" onClick={() => navigate('/')}>GabrielDEV</div>
        <div className="flex ml-auto gap-5">
          <a href="https://github.com/Gabrar" target="_BLANK">
            <Github className="2xl:size-8 cursor-pointer hover:text-slate-600 transition delay-50" />
          </a>
          <a href="https://www.linkedin.com/in/gabriel-dias-siqueira/" target="_BLANK">
            <Linkedin className="2xl:size-8 cursor-pointer hover:text-slate-600 transition delay-50" />
          </a>
        </div>
      </header>
      <Analytics />
      <Outlet />
      
    </main>
  )
}

export default App

//