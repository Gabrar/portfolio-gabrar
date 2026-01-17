import { useNavigate } from "react-router-dom"

function Button({ text, page, animation }) {

    const navigate = useNavigate()

    return (
        <button className={`p-3 lg:p-4 bg-black/30 backdrop-blur-md rounded-bl-md rounded-tr-md cursor-pointer hover:bg-black/50 hover:scale-110 transition delay-100 ease-in-out ${animation} opacity-0`}
            onClick={() => navigate(`${page}`)}>
            {text}
        </button>
    )
}

export default Button