import { useNavigate } from "react-router-dom"

function Button({ text, page, animation = '', opacity = 1 }) {
    const navigate = useNavigate()

    return (
        <button 
            className={`px-4 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-sm font-medium bg-slate-800/50 hover:bg-slate-700/70 border border-white/15 hover:border-blue-400/40 backdrop-blur-md rounded-xl text-white shadow-md hover:shadow-blue-500/10 cursor-pointer hover:scale-105 active:scale-95 transition-all duration-200 ${animation} ${opacity === 0 ? 'opacity-0' : 'opacity-100'}`}
            onClick={() => navigate(`${page}`)}
        >
            {text}
        </button>
    )
}

export default Button
