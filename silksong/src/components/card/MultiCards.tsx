'use client'
import React, { useRef } from 'react'
import { PerspectiveCamera } from '@react-three/drei'
import CardMesh from './Card'
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

const MultiCards = ({visible}: {visible?: boolean}) => {
  const cardRefs = useRef<(THREE.Mesh | null)[]>(Array(50).fill(null))

  return (
    <>
      <PerspectiveCamera 
        makeDefault 
        position={[0, 0, 40]} 
        rotation={[0, 0, Math.PI/6]} 
        fov={50} 
      />
      <ambientLight intensity={1.5} />
      <pointLight position={[10, 10, 10]} />

      {Array.from({ length: 50 }).map((_, idx) => {
        const row = Math.floor(idx / 10)
        const col = idx % 10
        const x = (col - 4.5) * 9
        const y = (2 - row) * 13

        return (
          <group 
            key={idx} 
            onClick={() => rotate180(cardRefs.current[idx])}
            onPointerOver={() => rotate180(cardRefs.current[idx])}
            position={[x, y, 0]}
          >
            <CardMesh
              ref={(el) => { cardRefs.current[idx] = el }}
              imageUrl={cardImages[idx % cardImages.length]}
              position={[0, 0, 0]}
            />
          </group>
        )
      })}
    </>
  )
}

export default MultiCards