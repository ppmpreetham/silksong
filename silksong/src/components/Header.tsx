'use client'

import React, {useRef} from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import "./Header.css"

const Header = () => {
  const container = useRef<HTMLDivElement>(null)
  const ImageRef = useRef<HTMLImageElement>(null)

    useGSAP(() => {
        if (container.current) {
            gsap.fromTo(
                ImageRef.current,
                { filter: "blur(100px)" },
                { filter: "blur(0px)", duration: 2, ease: "power2.out" }
            );
        }
    }, { scope: container });
    
    return (
    <>
      <div className="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div ref={container} className="flex flex-col items-center justify-center relative z-10">
        <Image src="/silksong.png" alt="Silksong Logo" width={500} height={500} ref={ImageRef}/>
      </div>
    </>
  )
}

export default Header