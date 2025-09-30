import React, { useRef, useState } from 'react'
import * as THREE from 'three'

const CardMesh = () => {
  const ref = useRef<THREE.Mesh>(null)

  return (
    <mesh ref={ref}>
      <boxGeometry args={[5, 10, 1]} scale={10}/>
      <meshStandardMaterial color={'white'} />
    </mesh>
  )
}



export default CardMesh