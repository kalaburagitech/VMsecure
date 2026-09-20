import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { ScrollControls, Scroll, useScroll, Image as ImageImpl } from '@react-three/drei';
import * as THREE from 'three';
import { ShieldCheck } from 'lucide-react';
import { LiveOperations } from './LiveOperations';

function Scene() {
  const scroll = useScroll();
  const group = useRef<THREE.Group>(null);
  const gateRef = useRef<THREE.Mesh>(null);
  const compoundRef = useRef<THREE.Mesh>(null);
  const commandRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (!group.current) return;
    
    // Total scroll depth - cap it so we don't fly past the final image
    const maxZ = 20; 
    const currentZ = scroll.offset * maxZ;
    
    // Smooth camera dolly effect (moving the world towards the camera)
    group.current.position.z = THREE.MathUtils.lerp(group.current.position.z, currentZ, 0.1);

    // Fade out images as they pass the camera (z > position.z)
    // Camera is at z=5 by default. 
    // Image world Z = currentZ + image.position.z
    
    const fadeDistance = 3;

    if (gateRef.current && gateRef.current.material) {
      const worldZ = currentZ + 0;
      const opacity = THREE.MathUtils.clamp(1 - (worldZ - 2) / fadeDistance, 0, 1);
      (gateRef.current.material as THREE.Material).opacity = opacity;
    }
    
    if (compoundRef.current && compoundRef.current.material) {
      const worldZ = currentZ - 10;
      const opacity = THREE.MathUtils.clamp(1 - (worldZ - 2) / fadeDistance, 0, 1);
      (compoundRef.current.material as THREE.Material).opacity = opacity;
    }
  });

  const { viewport } = useThree();
  // The AI generated images are 1:1 aspect ratio.
  // To simulate object-fit: cover, we make the plane a square sized to the largest viewport dimension.
  const size = Math.max(viewport.width, viewport.height);

  return (
    <group ref={group}>
      <ImageImpl ref={gateRef} position={[0, 0, 0]} scale={[size, size, 1]} url="/gate.jpg" transparent />
      <ImageImpl ref={compoundRef} position={[0, 0, -10]} scale={[size, size, 1]} url="/compound.jpg" transparent />
      <ImageImpl ref={commandRef} position={[0, 0, -20]} scale={[size, size, 1]} url="/command.jpg" transparent />
    </group>
  );
}

export function HeroScene() {
  return (
    <div className="w-full h-screen bg-security-black relative">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ScrollControls pages={4} damping={0.2}>
          <Scene />
          
          <Scroll html style={{ width: '100%', height: '100%', zIndex: -1 }}>
            <div className="absolute inset-0 bg-gradient-to-t from-security-black via-security-black/40 to-transparent pointer-events-none" style={{ width: '100vw', height: '100vh', position: 'fixed' }} />
            <div className="absolute inset-0 bg-black/20 pointer-events-none" style={{ width: '100vw', height: '100vh', position: 'fixed' }} />
          </Scroll>

          <Scroll html style={{ width: '100%', height: '100%' }}>
            {/* Stage 1: Initial Hero */}
            <div className="absolute top-0 left-0 w-full h-screen flex flex-col justify-start pt-[12vh] md:pt-[20vh] px-6 md:px-12 pointer-events-none">
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck className="w-5 h-5 text-security-accent" />
                <span className="uppercase tracking-widest text-xs font-semibold text-security-accent">Active Site</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight md:leading-tight mb-4 text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] max-w-2xl">
                Your Site.<br/>
                Your Security.<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-security-accent">Under Control.</span>
              </h1>
              <p className="text-security-white/90 text-base md:text-xl mb-8 max-w-sm drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                Scroll to enter the compound.
              </p>
            </div>

            {/* Stage 3/4: Compound Data Panels */}
            <div className="absolute top-[120vh] left-0 w-full px-4 pointer-events-none">
               <h2 className="text-2xl font-bold text-white mb-8 drop-shadow-md text-center">Compound Active</h2>
               <div className="pointer-events-auto">
                 <LiveOperations />
               </div>
            </div>

            {/* Stage 5: Command Center Overlay */}
            <div className="absolute top-[280vh] left-0 w-full h-screen flex flex-col justify-center items-center px-6 pointer-events-none text-center">
              <h2 className="text-4xl font-bold text-white drop-shadow-lg mb-4">Operations Center</h2>
              <p className="text-white/80 max-w-sm mb-8">Full command view activated. All systems nominal.</p>
            </div>
            
          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  );
}
