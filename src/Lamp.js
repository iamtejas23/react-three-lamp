// src/Lamp.js
import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';

const Lamp = ({ isOn, brightness, color }) => {
  const lampRef = useRef();

  useFrame(() => {
    if (lampRef.current) {
      // Rotate the lamp based on its state
      lampRef.current.rotation.x = isOn ? Math.PI / 4 : 0;

      // Adjust brightness
      lampRef.current.children[0].intensity = isOn ? brightness : 0;

      // Adjust color
      lampRef.current.children[0].color.set(color);
    }
  });

  return (
    <mesh ref={lampRef}>
      {/* Lamp components go here */}
      <pointLight position={[0, 5, 0]} intensity={isOn ? brightness : 0} color={color} />
      {/* Additional 3D model components can be added */}
    </mesh>
  );
};

export default Lamp;
