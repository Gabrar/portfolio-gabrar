function EditCarousel({ icones }) {
    if (!icones || icones.length === 0) return null

    const renderizarItens = () => (
        icones.map((item, index) => (
            <li key={index} className="size-8 sm:size-9 md:size-10 lg:size-11 flex items-center justify-center">
                {item}
            </li>
        ))
    )

    return (
        <div className="w-full inline-flex justify-start flex-nowrap overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20px,black_calc(100%-20px),transparent)] sm:[mask-image:linear-gradient(to_right,transparent,black_48px,black_calc(100%-48px),transparent)]">
            <ul className="flex items-center justify-start [&_li]:mx-2.5 sm:[&_li]:mx-3.5 animate-infinite-scroll" aria-hidden="true">
                {renderizarItens()}
            </ul>
            <ul className="flex items-center justify-start [&_li]:mx-2.5 sm:[&_li]:mx-3.5 animate-infinite-scroll" aria-hidden="true">
                {renderizarItens()}
            </ul>
            <ul className="flex items-center justify-start [&_li]:mx-2.5 sm:[&_li]:mx-3.5 animate-infinite-scroll" aria-hidden="true">
                {renderizarItens()}
            </ul>
        </div>
    )
}

export default EditCarousel
