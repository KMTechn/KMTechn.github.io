import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { MapControls } from '@react-three/drei';
import * as THREE from 'three';
import Globe from './Globe';
import Loader from './Loader';

/**
 * Desktop-only 3D Globe component
 * This component is lazy-loaded to avoid loading Three.js on mobile devices
 */
const Desktop3DGlobe = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 7.2], fov: 44 }}
      dpr={[1, 1.5]}
      performance={{ min: 0.5 }}
      gl={{ alpha: true, antialias: true }}
      style={{ background: 'transparent' }}
    >
      <Suspense fallback={<Loader />}>
        <Globe />
      </Suspense>
      <MapControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.28}
        enableDamping
        dampingFactor={0.05}
        mouseButtons={{
          LEFT: THREE.MOUSE.ROTATE,
          MIDDLE: THREE.MOUSE.DOLLY,
          RIGHT: THREE.MOUSE.PAN
        }}
      />
    </Canvas>
  );
};

export default Desktop3DGlobe;
