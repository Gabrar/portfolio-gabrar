import { useEffect, useState } from "react"


function FlashMessage({ msg, color, type, visible, onClose }) {
    
    useEffect(() => {
        // TIMER PARA QUE A IMAGEM DESAPAREÇA DEPOIS DE 3 SEGUNDOS
        let timer;
        if (visible) {
            timer = setTimeout(() => {
                onClose()
            }, 3000)
        }

        return () => {
            clearTimeout(timer)
        }
    }, [visible, onClose])

    
    return (
        <>
            <div className={`fixed bottom-4 right-4 ${color} w-45 p-2 m-1 md:p-2 md:w-75 md:text-base text-xs grid justify-self-end rounded-md text-green-800
                 transition-all duration-500 ease-in-out
                 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'} 
                 `}>
                <span>{msg || "Empréstimo realizado com sucesso!"}</span>
            </div>
        </>
    )
}

export default FlashMessage 