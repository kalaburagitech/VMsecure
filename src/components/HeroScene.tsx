import { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { ScrollControls, Scroll, useScroll, Image as ImageImpl } from '@react-three/drei';
import * as THREE from 'three';
import { ShieldCheck, Crosshair, Wifi, Shield, Eye, Bell, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { GlassPanel } from './GlassPanel';

function Scene() {
  const scroll = useScroll();
  const group = useRef<THREE.Group>(null);
  
  const refs = [
    useRef<THREE.Mesh>(null),
    useRef<THREE.Mesh>(null),
    useRef<THREE.Mesh>(null),
    useRef<THREE.Mesh>(null),
    useRef<THREE.Mesh>(null),
    useRef<THREE.Mesh>(null),
    useRef<THREE.Mesh>(null),
  ];

  useFrame(() => {
    if (!group.current) return;
    
    // Total scroll depth: 7 images spaced by 10 units = maxZ of 60
    const maxZ = 60; 
    const currentZ = scroll.offset * maxZ;
    
    // Smooth camera dolly effect
    group.current.position.z = THREE.MathUtils.lerp(group.current.position.z, currentZ, 0.1);

    const fadeDistance = 4;

    refs.forEach((ref, index) => {
      if (ref.current && ref.current.material) {
        const imageZ = -(index * 10);
        // Calculate the world Z of this image
        const worldZ = currentZ + imageZ;
        // Fade out as it passes the camera (camera is at z=5, fade starting around worldZ=2)
        (ref.current.material as THREE.Material).opacity = THREE.MathUtils.clamp(1 - (worldZ - 2) / fadeDistance, 0, 1);
      }
    });
  });

  const { viewport } = useThree();
  const size = Math.max(viewport.width, viewport.height) * 1.2; // Slightly larger to ensure cover

  return (
    <group ref={group}>
      <ImageImpl ref={refs[0]} position={[0, 0, 0]} scale={[size, size]} url="/s1.jpg" transparent />
      <ImageImpl ref={refs[1]} position={[0, 0, -10]} scale={[size, size]} url="/s2.jpg" transparent />
      <ImageImpl ref={refs[2]} position={[0, 0, -20]} scale={[size, size]} url="/s3.jpg" transparent />
      <ImageImpl ref={refs[3]} position={[0, 0, -30]} scale={[size, size]} url="/s4.jpg" transparent />
      <ImageImpl ref={refs[4]} position={[0, 0, -40]} scale={[size, size]} url="/s5.jpg" transparent />
      <ImageImpl ref={refs[5]} position={[0, 0, -50]} scale={[size, size]} url="/s6.jpg" transparent />
      <ImageImpl ref={refs[6]} position={[0, 0, -60]} scale={[size, size]} url="/s7.jpg" transparent />
    </group>
  );
}

export function HeroScene() {
  return (
    <div className="fixed inset-0 bg-security-black z-0">
      <div className="absolute inset-0 bg-gradient-to-b from-security-black/80 via-transparent to-security-black/80 pointer-events-none z-10" />
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ScrollControls pages={8} damping={0.2}>
          <Scene />
          
          <Scroll html style={{ width: '100%', height: '100%' }}>
            
            {/* Scene 1: Hero */}
            <div className="absolute top-0 left-0 w-full h-[100vh] flex flex-col justify-center items-start px-6 md:px-16 pointer-events-none">
              <div className="max-w-xl pointer-events-auto">
                <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 backdrop-blur-md">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">AI Powered Security</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-white drop-shadow-2xl">
                  Secure Your<br/>Home Today
                </h1>
                <p className="text-xl text-white/80 mb-8 max-w-md font-light drop-shadow-md">
                  Smart Security for a Safer Tomorrow. Experience the future of protection.
                </p>
                <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                  Get Started →
                </button>
              </div>
            </div>

            {/* Scene 2: AI Surveillance & Features */}
            <div className="absolute top-[120vh] left-0 w-full h-[100vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-16 pointer-events-none">
              <div className="max-w-lg mb-8 md:mb-0">
                <GlassPanel delay={0} className="p-8 backdrop-blur-xl border-white/10 pointer-events-auto">
                  <h2 className="text-3xl font-bold text-white mb-4">Your Home<br/>Our Priority</h2>
                  <p className="text-white/70 mb-6">Advanced AI Security for Your Loved Ones. The robotic unit scans every anomaly with zero latency.</p>
                  <button className="text-blue-400 font-semibold hover:text-blue-300 transition-colors">Learn More →</button>
                </GlassPanel>
              </div>
              <div className="flex gap-4 pointer-events-auto">
                <GlassPanel delay={0.2} className="p-6 text-center w-32 border-white/10">
                  <Eye className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <p className="text-xs text-white font-semibold">24/7 Monitoring</p>
                </GlassPanel>
                <GlassPanel delay={0.4} className="p-6 text-center w-32 border-white/10">
                  <Bell className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <p className="text-xs text-white font-semibold">Smart Alerts</p>
                </GlassPanel>
                <GlassPanel delay={0.6} className="p-6 text-center w-32 border-white/10">
                  <ShieldAlert className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <p className="text-xs text-white font-semibold">AI Protection</p>
                </GlassPanel>
              </div>
            </div>

            {/* Scene 3: Drone Transition */}
            <div className="absolute top-[240vh] left-0 w-full h-[100vh] flex flex-col justify-end items-center pb-32 px-6 pointer-events-none text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-2xl mb-4">Security Comes Near</h2>
              <p className="text-xl text-white/80 max-w-lg drop-shadow-lg">As threats evolve, our protection gets stronger. Automated drone deployment initiated.</p>
            </div>

            {/* Scene 4: Aerial Community */}
            <div className="absolute top-[360vh] left-0 w-full h-[100vh] flex flex-col justify-start pt-32 items-center px-6 pointer-events-none text-center">
              <div className="inline-block px-6 py-3 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 mb-6">
                <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Full 360° Protection</h2>
              </div>
              <p className="text-2xl text-white font-medium drop-shadow-xl">All sides secured. Aerial patrol active.</p>
            </div>

            {/* Scene 5: Shield Dome */}
            <div className="absolute top-[480vh] left-0 w-full h-[100vh] flex items-center justify-center px-6 pointer-events-none">
              <GlassPanel delay={0} className="p-10 max-w-xl text-center backdrop-blur-xl border-blue-500/30 shadow-[0_0_50px_rgba(59,130,246,0.2)] pointer-events-auto">
                <Shield className="w-16 h-16 text-blue-400 mx-auto mb-6" />
                <h2 className="text-4xl font-bold text-white mb-4">The Energy Shield</h2>
                <p className="text-white/80 text-lg">A virtual dome of absolute security. Any perimeter breach is neutralized before it happens.</p>
              </GlassPanel>
            </div>

            {/* Scene 6: Four Side CCTV */}
            <div className="absolute top-[600vh] left-0 w-full h-[100vh] flex flex-col justify-center items-start px-6 md:px-24 pointer-events-none">
              <h2 className="text-5xl font-bold text-white drop-shadow-2xl mb-4">Four Side Security</h2>
              <p className="text-2xl text-white/90 drop-shadow-lg mb-12">No threat can enter.</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pointer-events-auto w-full max-w-4xl">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="bg-black/40 backdrop-blur-md border border-white/10 p-4 rounded-xl flex items-center gap-3">
                    <Crosshair className="text-red-500 w-5 h-5 animate-pulse" />
                    <span className="text-white font-mono text-sm">CAM 0{i} LIVE</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Scene 7: Safe Home (Final) */}
            <div className="absolute top-[720vh] left-0 w-full h-[100vh] flex flex-col justify-between items-center py-20 px-6 pointer-events-none text-center">
              <div>
                <ShieldCheck className="w-20 h-20 text-blue-400 mx-auto mb-6 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                <h2 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-2xl mb-4">Safe Homes<br/>Happier Lives</h2>
                <p className="text-2xl text-blue-200 drop-shadow-lg">Security Beyond Boundaries</p>
              </div>

              <div className="flex flex-wrap justify-center gap-4 md:gap-12 mt-auto pointer-events-auto">
                <div className="flex flex-col items-center">
                  <CheckCircle2 className="w-8 h-8 text-blue-400 mb-2" />
                  <span className="text-sm text-white/80">24/7 Monitoring</span>
                </div>
                <div className="flex flex-col items-center">
                  <Eye className="w-8 h-8 text-blue-400 mb-2" />
                  <span className="text-sm text-white/80">Smart Cameras</span>
                </div>
                <div className="flex flex-col items-center">
                  <Shield className="w-8 h-8 text-blue-400 mb-2" />
                  <span className="text-sm text-white/80">Perimeter Protection</span>
                </div>
                <div className="flex flex-col items-center">
                  <Crosshair className="w-8 h-8 text-blue-400 mb-2" />
                  <span className="text-sm text-white/80">AI Powered Security</span>
                </div>
              </div>
            </div>

          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  );
}
