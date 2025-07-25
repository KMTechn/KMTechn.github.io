import React, { useMemo, useRef, useState } from 'react';
import { Sphere, Stars, CatmullRomLine, Html } from '@react-three/drei';
import { useTexture } from '@react-three/drei';
import { Vector3, NormalBlending } from 'three';
import { useFrame } from '@react-three/fiber';

const GLOBE_RADIUS = 3.08;

// Helper function to convert latitude/longitude to a 3D vector on the sphere
const latLonToVector3 = (lat, lon, radius) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new Vector3(x, y, z);
};

// --- Data for partners ---
const locations = [
  { name: 'Seoul', lat: 37.5665, lon: 126.9780 },
  { name: 'Berlin', lat: 52.5200, lon: 13.4050 },
  { name: 'Wuhu', lat: 31.33, lon: 118.38 },
  { name: 'Hong Kong', lat: 22.3193, lon: 114.1694 },
];

// --- Components for points and arcs ---
function Point({ position, name }) {
  const [hovered, setHovered] = useState(false);
  const meshRef = useRef();

  useFrame((_, delta) => {
    if (hovered && meshRef.current) {
      // Simple pulse effect
      const scale = 1 + Math.sin(performance.now() * 0.005) * 0.2;
      meshRef.current.scale.set(scale, scale, scale);
    } else if (meshRef.current.scale.x > 1) {
      // Smoothly return to normal size
      meshRef.current.scale.lerp(new Vector3(1, 1, 1), delta * 5);
    }
  });

  return (
    <mesh 
      position={position} 
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <sphereGeometry args={[0.055, 16, 16]} />
      <meshBasicMaterial color="gold" toneMapped={false} />
      <Html 
        as='div'
        distanceFactor={10}
        style={{
          transition: 'opacity 0.2s',
          opacity: hovered ? 1 : 0,
          pointerEvents: 'none',
          padding: '5px 10px',
          background: 'rgba(0, 0, 0, 0.7)',
          color: 'white',
          borderRadius: '5px',
          fontSize: '14px',
          whiteSpace: 'nowrap',
          transform: 'translate(-50%, -150%)'
        }}
      >
        {name}
      </Html>
    </mesh>
  );
}

function Points({ points }) {
  const positions = useMemo(() => {
    return points.map(p => ({
      ...p,
      position: latLonToVector3(p.lat, p.lon, GLOBE_RADIUS + 0.02)
    }));
  }, [points]);

  return (
    <group>
      {positions.map((p) => <Point key={p.name} position={p.position} name={p.name} />)}
    </group>
  );
}

function Arcs({ points }) {
  const curves = useMemo(() => {
    const result = [];
    // Elevate the arc points slightly more to prevent them from clipping into the globe
    const arcRadius = GLOBE_RADIUS + 0.05; 
    const allPointsVec = points.map(p => latLonToVector3(p.lat, p.lon, arcRadius));

    for (let i = 0; i < allPointsVec.length; i++) {
      const start = allPointsVec[i];
      const end = allPointsVec[(i + 1) % allPointsVec.length];
      
      const distance = start.distanceTo(end);
      // Adjust arc height based on the distance between points
      const heightMultiplier = 1.05 + (distance / (GLOBE_RADIUS * 2)) * 0.25;

      const controlPoint = start.clone().lerp(end, 0.5).normalize().multiplyScalar(GLOBE_RADIUS * heightMultiplier);
      result.push([start, controlPoint, end]);
    }
    return result;
  }, [points]);

  return (
    <group>
      {curves.map((curvePoints, i) => (
        <CatmullRomLine
          key={i}
          points={curvePoints}
          color="cyan"
          lineWidth={2}
          transparent
          opacity={0.7}
        />
      ))}
    </group>
  );
}


const Globe = (props) => {
  const {
    ambientIntensity,
    directionalIntensity,
    metalness,
    roughness,
    emissiveIntensity,
    cloudsOpacity = 0.4,
  } = props;

  const [
    dayMap,
    nightMap,
    cloudsMap,
  ] = useTexture([
    '/earth-day.jpg',
    '/earth-night.jpg',
    '/earth-clouds.jpg',
  ]);

  const globeRef = useRef();
  const cloudsRef = useRef();

  useFrame(({ clock }) => {
    if (globeRef.current) {
      globeRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y = clock.getElapsedTime() * 0.06;
    }
  });

  return (
    <>
      <ambientLight intensity={ambientIntensity} />
      <directionalLight position={[10, 10, 5]} intensity={directionalIntensity} />
      
      <Stars radius={300} depth={50} count={8000} factor={5} saturation={0} fade={false} speed={1} />

      <group ref={globeRef}>
        {/* Earth */}
        <Sphere args={[GLOBE_RADIUS, 32, 32]}>
          <meshStandardMaterial 
            map={dayMap}
            metalness={metalness} 
            roughness={roughness} 
            emissiveMap={nightMap}
            emissive="#ffffff"
            emissiveIntensity={emissiveIntensity}
          />
        </Sphere>

        {/* Clouds */}
        <Sphere 
          ref={cloudsRef} 
          args={[GLOBE_RADIUS + 0.05, 32, 32]}
          castShadow={false}
          receiveShadow={false}
        >
          <meshStandardMaterial
            map={cloudsMap}
            transparent
            opacity={cloudsOpacity}
            blending={NormalBlending}
          />
        </Sphere>
        
        <Points points={locations} />
        <Arcs points={locations} />
      </group>
    </>
  );
}

export default Globe;


