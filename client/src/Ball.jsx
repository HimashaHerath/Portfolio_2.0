// src/Ball.js
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';

const Ball = () => {
  const meshRef = useRef();
  let bounceDirection = 1;
  let bounceSpeed = 0.05;

  useFrame((state, delta) => {
    if (meshRef.current.position.y >= 1.5) {
      bounceDirection = -1;
    } else if (meshRef.current.position.y <= 0.5) {
      bounceDirection = 1;
    }
    meshRef.current.position.y += bounceSpeed * bounceDirection * delta;
  });

  return (
    <Sphere args={[0.5, 32, 32]} ref={meshRef} position={[0, 0.5, 0]}>
      <meshStandardMaterial color={'blue'} />
    </Sphere>
  );
};

export default Ball;
