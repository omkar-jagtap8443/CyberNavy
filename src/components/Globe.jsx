import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere } from '@react-three/drei';

function Globe() {
  const meshRef = useRef();

  // This hook runs on every frame and allows for animation
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <Sphere args={[1, 100, 200]} scale={2.5} ref={meshRef}>
      <MeshDistortMaterial
        color="#58a6ff"
        distort={0.5}
        speed={2}
        metalness={1}
        roughness={0.1}
      />
    </Sphere>
  );
}

export default Globe;