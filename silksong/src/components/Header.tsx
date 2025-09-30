'use client'

import React, {useRef} from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Header = () => {
  const container = useRef<HTMLDivElement>(null)
  const ImageRef = useRef<HTMLImageElement>(null)

    useGSAP(() => {
        if (container.current) {
            gsap.fromTo(
                ImageRef.current,
                { filter: "blur(500px)" },
                { filter: "blur(0px)", duration: 3, ease: "power2.out" }
            );
        }
    }, { scope: container });
    
    return (
    <div ref={container} className="flex flex-col items-center justify-center">
      <Image src="/silksong.png" alt="Silksong Logo" width={300} height={300} ref={ImageRef}/>
    </div>
  )
}

export default Header