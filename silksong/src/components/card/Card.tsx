import { useTexture } from '@react-three/drei/core/Texture';
import React, { forwardRef } from 'react'
import * as THREE from 'three'

const CardMesh = forwardRef<THREE.Mesh, { imageUrl: string, position?: [number, number, number] }>(({ imageUrl, position }, ref) => {
  const texture = useTexture(imageUrl);
  const backside = useTexture('/cards/card1.jpg');
  
  return (
    <mesh ref={ref} position={position}>
      {/* Front side */}
      <planeGeometry args={[8, 12]} />
      <meshStandardMaterial color="white" map={backside} side={THREE.DoubleSide} />
      {/* Back side */}
      <mesh position={[0, 0, -0.01]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[8, 12]} />
        <meshStandardMaterial color="white" map={texture} side={THREE.DoubleSide} />
      </mesh>
    </mesh>
  )
})

CardMesh.displayName = 'CardMesh'

export default CardMesh