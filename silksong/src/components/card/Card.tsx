import { useTexture } from '@react-three/drei/core/Texture';
import React from 'react'
import * as THREE from 'three'

const CardMesh = ({ imageUrl, ref }: {imageUrl: string; ref: React.Ref<THREE.Mesh>;}) => {
  const texture = useTexture(imageUrl);
  const backside = useTexture('/cards/card1.jpg');
  return (
    <mesh ref={ref}>
      {/* Front side */}
      <planeGeometry args={[8, 12]} />
      <meshStandardMaterial color="white" map={texture} alphaMap={texture} />
      {/* Back side */}
      <mesh position={[0, 0, -0.01]}>
      <planeGeometry args={[8, 12]} />
      <meshStandardMaterial color="white" map={backside} />
      </mesh>
    </mesh>
  )
}

export default CardMesh