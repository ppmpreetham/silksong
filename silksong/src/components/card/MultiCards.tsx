'use client'
import React, { useEffect, useRef, useState } from 'react'
import CardMesh from './Card'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import { gsap } from 'gsap'

const cardImages = [
  "/cards/card1.jpg",
  "/cards/card2.jpg",
  "/cards/card3.jpg",
]

const rotate180 = (mesh: THREE.Mesh | null) => {
  if (mesh) {
    gsap.to(mesh.rotation, {
      y: mesh.rotation.y + Math.PI,
      duration: 0.6,
      ease: "power2.inOut"
    })
  }
}

const MultiCards = () => {
  const cardRefs = useRef<(THREE.Mesh | null)[]>(Array(50).fill(null))
  const eventSourceRef = useRef<HTMLDivElement>(null!)
  const [frameloop, setFrameloop] = useState<'always' | 'never'>('always');
  
  useEffect(() => {
    const handleVisibilityChange = () => setFrameloop(document.hidden ? 'never' : 'always');
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  return (
    <div className="w-full h-screen" ref={eventSourceRef}>
      <Canvas 
        frameloop= {frameloop}
        eventSource= {eventSourceRef}
        eventPrefix= "client"
        gl= {{
          powerPreference: "high-performance",
          alpha: false,
        }}
        performance= {{ min: 0.5 }}
        dpr= {[1,2]}
        camera={{ position: [0, 0, 40], rotation: [0, 0, Math.PI/6], fov: 50 }}
      >
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} />

        {Array.from({ length: 50 }).map((_, idx) => {
          const row = Math.floor(idx / 10)
          const col = idx % 10
          const x = (col - 4.5) * 9
          const y = (2 - row) * 13

          return (
            <group key={idx} onPointerOver={() => rotate180(cardRefs.current[idx])}>
              <CardMesh
                ref={(el) => { cardRefs.current[idx] = el }}
                imageUrl={cardImages[idx % cardImages.length]}
                position={[x, y, 0]}
              />
            </group>
          )
        })}
      </Canvas>
    </div>
  )
}

export default MultiCards