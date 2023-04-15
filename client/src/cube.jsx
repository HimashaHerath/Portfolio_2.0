// src/Cube.js
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';

const Cube = () => {
  const meshRef = useRef();

  useFrame((state) => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <Box args={[1, 1, 1]} ref={meshRef}>
      <meshStandardMaterial color={'red'} />
    </Box>
  );
};

export default Cube;
