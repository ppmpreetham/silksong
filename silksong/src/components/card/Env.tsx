'use client'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import CardMesh from './Card'
import * as THREE from 'three'

const Env = () => {
  return (
    <div className="h-screen w-screen">
        <Canvas className='' camera={{ position: [0, 0, 20], fov: 50 }}>
          <ambientLight intensity={10}/>
          <CardMesh />
        </Canvas>
    </div>
  )
}

export default Env