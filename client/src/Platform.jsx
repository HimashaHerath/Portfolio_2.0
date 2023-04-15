// src/Platform.js
import React from 'react';
import { Box } from '@react-three/drei';

const Platform = () => {
  return (
    <Box args={[3, 0.1, 3]} position={[0, -0.05, 0]}>
      <meshStandardMaterial color={'gray'} />
    </Box>
  );
};

export default Platform;
