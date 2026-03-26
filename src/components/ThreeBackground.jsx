import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, Bounds, useTexture } from '@react-three/drei';
import * as THREE from 'three';

// Define a floating custom shape
const FloatingShape = ({ position, rotation, color, geometry }) => {
  const meshRef = useRef();
  
  useFrame((state) => {
    meshRef.current.rotation.x += 0.001;
    meshRef.current.rotation.y += 0.002;
    // adding subtle vertical movement
    meshRef.current.position.y += Math.sin(state.clock.elapsedTime + position[0]) * 0.002;
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position} rotation={rotation} castShadow receiveShadow>
        <primitive object={geometry} attach="geometry" />
        <meshPhysicalMaterial 
          color={color} 
          roughness={0.2} 
          transmission={0.9} 
          thickness={1} 
          envMapIntensity={1}
          clearcoat={1}
        />
      </mesh>
    </Float>
  );
};

const BackgroundScene = () => {
  const shapes = useMemo(() => {
    return [
      { geom: new THREE.IcosahedronGeometry(2), pos: [-5, 2, -10], rot: [0.1, 0, 0], col: '#1e40af' },
      { geom: new THREE.TorusKnotGeometry(1.5, 0.4, 100, 16), pos: [6, -3, -15], rot: [0, 0.5, 0], col: '#fbbf24' },
      { geom: new THREE.OctahedronGeometry(1.5), pos: [-6, -4, -8], rot: [1, 0, 0], col: '#1e3a8a' },
      { geom: new THREE.ConeGeometry(1, 2, 32), pos: [5, 4, -12], rot: [0, 0, 0], col: '#fcd34d' },
      { geom: new THREE.SphereGeometry(1.2, 32, 32), pos: [0, 0, -20], rot: [0, 0, 0], col: '#3b82f6' }
    ];
  }, []);

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#fbbf24" />
      <Stars radius={50} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
      
      {shapes.map((s, i) => (
        <FloatingShape key={i} geometry={s.geom} position={s.pos} rotation={s.rot} color={s.col} />
      ))}
      <fog attach="fog" args={['#f7f9fb', 5, 30]} />
    </>
  );
};

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none bg-gradient-to-br from-[#f0f4f8] to-[#e2e8f0]">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }} shadows>
        <BackgroundScene />
      </Canvas>
    </div>
  );
}
