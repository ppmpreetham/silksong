'use client'

import React, {useRef} from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import "./Header.css"
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const Header = () => {
    const container = useRef<HTMLDivElement>(null)
    const ImageRef = useRef<HTMLImageElement>(null)
    const background = useRef<HTMLDivElement>(null)

    gsap.set(ImageRef.current, { opacity: 0 })
    useGSAP(() => {
      const tl = gsap.timeline()
      if (container.current) {
          tl.fromTo(
              ImageRef.current,
              { filter: "blur(100px)" },
              { filter: "blur(0px) drop-shadow(12px 12px 7px rgba(255,255,255, 0.25))",
                duration: 1, 
                ease: "power2.out", 
                opacity: 1 
              })
              .to(background.current,{
                opacity: 0.1,
                scrollTrigger:{
                  trigger: container.current,
                  start: "top top",
                  end: "bottom top",
                  scrub: true,
                }
              }
            )

        }
    }, { scope: container })
    
    return (
    <div className='h-screen w-screen' ref={container}>
      <div className="background" ref={background}>
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
      <div ref={container} className="h-screen w-screen flex flex-col items-center justify-center relative z-10">
        <Image src="/silksong.png" alt="Silksong Logo" width={500} height={500} ref={ImageRef} className='glow opacity-0'/>
      </div>
    </div>
  )
}

export default Header