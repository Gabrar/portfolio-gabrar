import { FaCss3, FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa"
import { RiTailwindCssFill } from "react-icons/ri"
import { SiMysql } from "react-icons/si"


function InfiniteCarousel() {

    return (
        <div className="w-full inline-flex justify-start flex-nowrap overflow-hidden mask-[linear-gradient(to_right,transparent_0,black_128px,black_calc(100%-128px),transparent_100%)]">
            <ul className=" flex items-center justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
            <li><FaHtml5 className="size-8 md:size-8 lg:size-12"/></li>
                <li><FaCss3Alt className="size-8 md:size-8 lg:size-12"/></li>
                <li><FaReact className="size-8 md:size-8 lg:size-12"/></li>
                <li><RiTailwindCssFill className="size-8 md:size-8 lg:size-12"/></li>
                <li><FaNodeJs className="size-8 md:size-8 lg:size-12"/></li>
                <li><SiMysql className="size-8 md:size-8 lg:size-12" /></li>
            </ul>

            <ul className="flex items-center justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                <li><FaHtml5 className="size-8 md:size-8 lg:size-12"/></li>
                <li><FaCss3Alt className="size-8 md:size-8 lg:size-12"/></li>
                <li><FaReact className="size-8 md:size-8 lg:size-12"/></li>
                <li><RiTailwindCssFill className="size-8 md:size-8 lg:size-12"/></li>
                <li><FaNodeJs className="size-8 md:size-8 lg:size-12"/></li>
                <li><SiMysql className="size-8 md:size-8 lg:size-12" /></li>
            </ul>

            <ul className="flex items-center justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                <li><FaHtml5 className="size-8 md:size-8 lg:size-12"/></li>
                <li><FaCss3Alt className="size-8 md:size-8 lg:size-12"/></li>
                <li><FaReact className="size-8 md:size-8 lg:size-12"/></li>
                <li><RiTailwindCssFill className="size-8 md:size-8 lg:size-12"/></li>
                <li><FaNodeJs className="size-8 md:size-8 lg:size-12"/></li>
                <li><SiMysql className="size-8 md:size-8 lg:size-12" /></li>
            </ul>

        </div>
    )
}

export default InfiniteCarousel