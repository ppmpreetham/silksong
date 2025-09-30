'use client'
import { Canvas } from '@react-three/fiber'
import React, { useRef } from 'react'

import CardMesh from './Card'
import * as THREE from 'three'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

const Env = () => {
  const card1Ref = useRef<THREE.Mesh>(null);
  return (
    <div className="h-screen w-screen">
      <Canvas camera={{ position: [0, 0, 20], fov: 50 }}>
        <ambientLight intensity={1} />
        <CardMesh imageUrl="/cards/card2.jpg" ref={card1Ref} />
      </Canvas>
    </div>
  );
};

export default Env;