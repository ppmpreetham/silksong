'use client'
import Header from "@/components/Header";
import Env from "@/components/card/Env";
import MultiCards from "@/components/card/MultiCards";
import { useInView } from "react-intersection-observer";
import { Canvas } from '@react-three/fiber';
import { View, Preload } from '@react-three/drei';
import { useRef } from 'react';

export default function Home() {
  const { ref: envRef, inView: envInView } = useInView({ threshold: 0.5 });
  const { ref: multiCardsRef, inView: multiCardsInView } = useInView({ threshold: 0.5 });
  const eventSourceRef = useRef<HTMLDivElement>(null);
  
  console.log("Env in view:", envInView);
  console.log("MultiCards in view:", multiCardsInView);
  
  return (
    <div ref={eventSourceRef} className="w-screen min-h-screen flex flex-col items-center text-white">
      <Header />
      
      <div ref={envRef} className="env-container h-[200vh] w-screen">
        <View className="w-full h-full">
          <Env visible={envInView} />
        </View>
      </div>
      
      <div ref={multiCardsRef} className="w-full h-screen">
        <View className="w-full h-full">
          <MultiCards visible={multiCardsInView} />
        </View>
      </div>
      
      <div className="h-screen"></div>

      {/* Fixed fullscreen canvas */}
      <Canvas
        style={{ 
          position: 'fixed', 
          top: 0, 
          bottom: 0, 
          left: 0, 
          right: 0, 
          overflow: 'hidden',
          pointerEvents: 'none'
        }}
        eventSource={eventSourceRef.current ? eventSourceRef.current : undefined}
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