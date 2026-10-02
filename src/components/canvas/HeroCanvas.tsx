'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function CinematicMonolith() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.sin(t / 2) * 0.3;
    meshRef.current.rotation.y = Math.sin(t / 3) * 0.5;
  });

  return (
    <Float floatIntensity={1.2} rotationIntensity={0.8} speed={2}>
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={2.2}>
        <MeshDistortMaterial
          attach="material"
          color="#111111"
          distort={0.4}
          speed={2}
          roughness={0.1}
          metalness={0.9}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </Sphere>
    </Float>
  );
}

export default function HeroCanvas() {
  return (
    <div className="absolute inset-0 z-0 h-full w-full">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#38bdf8" />
        <directionalLight position={[-10, -10, -5]} intensity={1.5} color="#e11d48" />
        <pointLight position={[0, 0, 2]} intensity={1} color="#ffffff" />
        
        <CinematicMonolith />
        
        <OrbitControls autoRotate autoRotateSpeed={0.5} enablePan={false} enableZoom={false} />
      </Canvas>
    </div>
  );
}