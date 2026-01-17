function EditCarousel({ icones }) {

    if (!icones || icones.length === 0) return null

    const renderizarItens = () => (
        icones.map((item, index) => (
            <li key={index} className="size-8 md:size-8 lg:size-12">
                {item}
            </li>
        ))
    )

    return (
        <div className="w-full inline-flex justify-start flex-nowrap overflow-hidden mask-[linear-gradient(to_right,transparent_0,black_128px,black_calc(100%-128px),transparent_100%)]">
            <ul className=" flex items-center justify-start [&_li]:mx-2 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                {renderizarItens()}
            </ul>

            <ul className=" flex items-center justify-start [&_li]:mx-2 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                {renderizarItens()}
            </ul>
            
            <ul className=" flex items-center justify-start [&_li]:mx-2 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                {renderizarItens()}
            </ul>

        </div>
    )
}

export default EditCarousel