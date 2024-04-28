import Image from 'next/image';
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from "@gsap/react";
import Link from 'next/link';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const header = "Welcome to the Website"

const subtext = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
including versions of Lorem Ipsum.`

export const Landing = ({
    backgroundPic,
} : {
    backgroundPic: string;
}) => {

    const landingRef = useRef<HTMLHeadingElement | null>(null);

    useGSAP(() => {
        gsap.to(".header", {scale:2, duration:1});
        gsap.to(".subtext", {autoAlpha:1, y:-50, duration:1, scrollTrigger:{
            trigger:".subtext",
            start: "top center",
        }});
      }, { scope: landingRef });


    return (
        <div ref={landingRef} className="px-12">
            <div className="fixed -z-10 inset-0">
                <Image
                    src={backgroundPic}
                    fill
                    alt='background image'
                    quality={100}
                />
            </div>
            <div className='mt-72 flex flex-col items-center justify-center'>
                <div className='h-[100vh]'>
                    <h1 className={`text-white font-bold header text-sm md:text-base lg:text-lg xl:text-xl`}>{header}</h1>
                </div>
                <div className='h-[100vh]'>
                    <p className={`text-white text-xs font-bold subtext opacity-0 md:text-sm lg:text-base xl:text-lg`}>{subtext}</p>
                    <Link href="/population-page" className="bg-sky-200 p-2 md:p-2 lg:p-4 xl:p-4 rounded-md hover:bg-sky-800 hover:text-white w-1/2 text-center text-xs md:text-sm lg:text-base xl:text-lg">
                        Visit US Population Data
                    </Link>
                </div>
            </div>
        </div>
    )
}   