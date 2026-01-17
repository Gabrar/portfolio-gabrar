import Button from "./Button"

function Card({ imagem, title, onClick }) {
    

    return (
        <div className="flex flex-col h-50 w-35 bg-white/7 rounded-lg border border-white/40 animation-top opacity-0" style={{animationDelay: '0.1s'}}>
            <img src={imagem} alt="" className="h-15 w-auto rounded-md m-2" />

            <h1 className="px-2">{title}</h1>

            <div className="grid grid-cols justify-center mt-auto mb-2">
                <button 
                onClick={onClick}
                className='p-3 lg:p-4 bg-black/30 backdrop-blur-md rounded-bl-md rounded-tr-md cursor-pointer hover:bg-black/50 hover:scale-110 transition delay-100 ease-in-out'
                       
                >
                    Detalhes
                </button>
            </div>
        </div>
    )
}

export default Card