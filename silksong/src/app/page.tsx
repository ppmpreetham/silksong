'use client'
import Header from "@/components/Header";
import Env from "@/components/card/Env";
import MultiCards from "@/components/card/MultiCards";
import { Canvas } from '@react-three/fiber';
import { View, Preload } from '@react-three/drei';
import { useRef } from 'react';

export default function Home() {
  let envInView = true;
  let multiCardsInView = true;
  const envRef = useRef<HTMLDivElement>(null);
  const multiCardsRef = useRef<HTMLDivElement>(null);
  const eventSourceRef = useRef<HTMLDivElement>(null);
  
  return (
    <div ref={eventSourceRef} className="w-screen min-h-screen flex flex-col items-center text-white">
      <Header />
      
      <div ref={envRef} className="env-container h-[200vh] w-screen">
        <View className="w-full h-full">
          <Env visible={envInView} />
        </View>
      </div>
      
      <div ref={multiCardsRef} className="w-full h-screen relative" style={{ zIndex: 10, pointerEvents: 'auto' }}>
        <View 
          className="w-full h-full" 
          track={multiCardsRef as React.RefObject<HTMLElement>}
        >
          <MultiCards visible={multiCardsInView} />
        </View>
      </div>
      
      <div className="h-screen"></div>

      <Canvas
        style={{ 
          position: 'fixed', 
          top: 0, 
          bottom: 0, 
          left: 0, 
          right: 0, 
          overflow: 'hidden',
          pointerEvents: "auto"
        }}
        eventSource={eventSourceRef as React.RefObject<HTMLElement>}
        eventPrefix="client"
        gl={{
          powerPreference: "high-performance",
          alpha: false,
        }}
        performance={{ min: 0.5 }}
        dpr={[1, 2]}
      >
        <View.Port />
        <Preload all />
      </Canvas>
    </div>
  );
}