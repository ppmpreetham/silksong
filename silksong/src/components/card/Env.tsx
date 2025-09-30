'use client'
import React, { useRef, useState, useEffect } from 'react'
import { PerspectiveCamera } from '@react-three/drei'
import CardMesh from './Card'
import * as THREE from 'three'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)
const PI = Math.PI

const Env = ({visible}: {visible?: boolean}) => {
  const card1Ref = useRef<THREE.Mesh|null>(null)
  const card2Ref = useRef<THREE.Mesh|null>(null)
  const card3Ref = useRef<THREE.Mesh|null>(null)
  const groupRef = useRef<THREE.Mesh|null>(null)
  const [meshesLoaded, setMeshesLoaded] = useState(false)

  useEffect(() => {
    if (card1Ref.current && card2Ref.current && card3Ref.current) {
      setMeshesLoaded(true)
    }
  }, [])
  
  const handleMeshRef = (el: THREE.Mesh | null, refToUpdate: React.RefObject<THREE.Mesh | null>) => {
    refToUpdate.current = el
    if (card1Ref.current && card2Ref.current && card3Ref.current && !meshesLoaded) {
      setMeshesLoaded(true)
    }
  }
  
  useGSAP(() => {
    if (!meshesLoaded || !visible) return
    
    const tl = gsap.timeline({ 
      scrollTrigger: {
        trigger: ".env-container",
        start: 'top 0%', 
        end: 'bottom 100%', 
        scrub: true,
        pin: true
      }
    })
    
    if (card1Ref.current && card2Ref.current && card3Ref.current) {
      const anchor = -4
      card1Ref.current.position.set(1, anchor, card1Ref.current.position.z)
      card2Ref.current.position.set(2, anchor, card2Ref.current.position.z)
      card3Ref.current.position.set(3, anchor, card3Ref.current.position.z)

      card1Ref.current.rotation.z = -1 * PI / 12
      card2Ref.current.rotation.z = 0
      card3Ref.current.rotation.z = 1 * PI / 12

      tl
      .fromTo(groupRef.current!.position, { y: -10 }, { y: 5, duration: 1, ease: 'none' })
      .to(groupRef.current!.rotation, {y: 2*PI, duration: 2, ease: 'none'}, "<")
      .to(card2Ref.current.position, {y: "-=2", duration: 1, ease: 'power2.in'}, 2)
      .to(card1Ref.current.position, {y: "+=18", duration: 1, ease: 'power2.in'}, 2)
      .to(card3Ref.current.position, {y: "+=18", duration: 1, ease: 'power2.in'}, 2)
      .to(card2Ref.current.rotation, {y: "+=3.13", z: "+=0.3", x:"+=0.4", duration: 2, ease: 'power4.inOut'}, 3)
      .to(card2Ref.current.rotation, {y: "+=6.28", duration: 1})
    }
  }, { dependencies: [meshesLoaded, visible] });
  
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 50]} fov={50} />
      <ambientLight intensity={1.5} />
      <group ref={groupRef} rotation={[0, 0, PI - 0]} position={[2,0,0]}>
        <CardMesh position={[0, 0, 0]} imageUrl="/cards/card1.jpg" ref={(el) => handleMeshRef(el, card1Ref)} />
        <CardMesh position={[0, 0, 0.25]} imageUrl="/cards/card2.jpg" ref={(el) => handleMeshRef(el, card2Ref)} />
        <CardMesh position={[0, 0, 0.5]} imageUrl="/cards/card3.jpg" ref={(el) => handleMeshRef(el, card3Ref)} />
      </group>
    </>
  );
};

export default Env;