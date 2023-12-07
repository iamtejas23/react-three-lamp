// src/App.js
import React, { useState } from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Lamp from './Lamp';

const App = () => {
  const [isLampOn, setLampOn] = useState(false);
  const [brightness, setBrightness] = useState(1.5);
  const [color, setColor] = useState('#000000');

  const toggleLamp = () => {
    setLampOn(!isLampOn);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>React Three.js Lamp</h1>
      <Canvas
        camera={{ position: [0, 0, 10] }}
        onCreated={({ gl }) => {
          gl.shadowMap.enabled = true;
          gl.shadowMap.type = window.THREE.PCFSoftShadowMap;
        }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 5, 0]} intensity={isLampOn ? brightness : 0} color={color} />
        <Lamp isOn={isLampOn} brightness={brightness} color={color} />
        <OrbitControls enableDamping />
      </Canvas>
      <div>
        <button onClick={toggleLamp}>
          {isLampOn ? 'Turn Off Lamp' : 'Turn On Lamp'}
        </button>
      </div>
      <div>
        <label>
          Brightness:
          <input
            type="range"
            min="0"
            max="2"
            step="0.1"
            value={brightness}
            onChange={(e) => setBrightness(parseFloat(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          Color:
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </label>
      </div>
    </div>
  );
};

export default App;
