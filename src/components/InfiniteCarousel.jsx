import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa"
import { RiTailwindCssFill } from "react-icons/ri"
import { SiMysql } from "react-icons/si"

function InfiniteCarousel() {
    const iconClass = "size-7 sm:size-8 md:size-9 lg:size-11"

    const renderIcons = () => (
        <>
            <li><FaHtml5 className={iconClass} /></li>
            <li><FaCss3Alt className={iconClass} /></li>
            <li><FaReact className={iconClass} /></li>
            <li><RiTailwindCssFill className={iconClass} /></li>
            <li><FaNodeJs className={iconClass} /></li>
            <li><SiMysql className={iconClass} /></li>
        </>
    )

    return (
        <div className="w-full inline-flex justify-start flex-nowrap overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20px,black_calc(100%-20px),transparent)] sm:[mask-image:linear-gradient(to_right,transparent,black_64px,black_calc(100%-64px),transparent)]">
            <ul className="flex items-center justify-start [&_li]:mx-3 sm:[&_li]:mx-4 animate-infinite-scroll" aria-hidden="true">
                {renderIcons()}
            </ul>
            <ul className="flex items-center justify-start [&_li]:mx-3 sm:[&_li]:mx-4 animate-infinite-scroll" aria-hidden="true">
                {renderIcons()}
            </ul>
            <ul className="flex items-center justify-start [&_li]:mx-3 sm:[&_li]:mx-4 animate-infinite-scroll" aria-hidden="true">
                {renderIcons()}
            </ul>
        </div>
    )
}

export default InfiniteCarousel
