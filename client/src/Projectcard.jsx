// src/ProjectCard.js
import React from 'react';
import { Html } from '@react-three/drei';

const ProjectCard = ({ position, title, description }) => {
  return (
    <group position={position}>
      <mesh position={[0, 0, 0]} scale={[5, 3, 0.1]}>
        <boxBufferGeometry attach="geometry" />
        <meshStandardMaterial color={'white'} />
      </mesh>
      <Html position={[-2, 0, 0.1]} scaleFactor={20}>
        <div className="p-2">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-sm">{description}</p>
        </div>
      </Html>
    </group>
  );
};

export default ProjectCard;
