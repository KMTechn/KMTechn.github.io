import React, { useMemo, useRef, useState } from 'react';
import { Sphere, CatmullRomLine, Html, useTexture } from '@react-three/drei';
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

const locations = [
  { name: 'Jiksan Hub', lat: 36.881, lon: 127.152 },
  { name: 'Seoul', lat: 37.5665, lon: 126.9780 },
  { name: 'Shanghai', lat: 31.2304, lon: 121.4737 },
  { name: 'Hong Kong', lat: 22.3193, lon: 114.1694 },
  { name: 'Frankfurt', lat: 50.1109, lon: 8.6821 },
  { name: 'Detroit', lat: 42.3314, lon: -83.0458 },
  { name: 'Southeast Asia', lat: 13.7563, lon: 100.5018 },
];

// --- Components for points and arcs ---
function Point({ position, name, color }) {
  const [hovered, setHovered] = useState(false);
  const meshRef = useRef();

  useFrame((_, delta) => {
    if (!meshRef.current) return;

    if (hovered) {
      // Simple pulse effect - optimized
      const targetScale = 1.2;
      meshRef.current.scale.lerp({ x: targetScale, y: targetScale, z: targetScale }, delta * 3);
    } else if (meshRef.current.scale.x > 1.01) {
      meshRef.current.scale.lerp({ x: 1, y: 1, z: 1 }, delta * 5);
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
      <meshBasicMaterial color={color} toneMapped={false} />
      <Html
        as='div'
        distanceFactor={10}
        style={{
          transition: 'opacity 0.2s',
          opacity: hovered ? 1 : 0,
          pointerEvents: 'none',
          padding: '5px 10px',
          background: 'rgba(15, 23, 42, 0.86)',
          color: '#fff',
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

function Points({ points, color }) {
  const positions = useMemo(() => {
    return points.map(p => ({
      ...p,
      position: latLonToVector3(p.lat, p.lon, GLOBE_RADIUS + 0.02)
    }));
  }, [points]);

  return (
    <group>
      {positions.map((p) => <Point key={p.name} position={p.position} name={p.name} color={color} />)}
    </group>
  );
}

function Arcs({ points, color }) {
  const curves = useMemo(() => {
    const result = [];
    // Elevate the arc points slightly more to prevent them from clipping into the globe
    const arcRadius = GLOBE_RADIUS + 0.05;
    const allPointsVec = points.map(p => latLonToVector3(p.lat, p.lon, arcRadius));
    const hub = allPointsVec[0];

    for (let i = 1; i < allPointsVec.length; i++) {
      const start = hub;
      const end = allPointsVec[i];

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
          color={color}
          lineWidth={2.4}
          transparent
          opacity={0.88}
        />
      ))}
    </group>
  );
}


const Globe = (props) => {
  const {
    ambientIntensity = 0.85,
    directionalIntensity = 7.5,
    metalness = 0.35,
    roughness = 0.38,
    emissiveIntensity = 1.35,
    cloudsOpacity = 0.18,
    routeColor = '#ffcc00',
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

  useFrame((_, delta) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += delta * 0.05;
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += delta * 0.06;
    }
  });

  return (
    <>
      <ambientLight intensity={ambientIntensity} />
      <directionalLight position={[8, 8, 6]} intensity={directionalIntensity} />
      <pointLight position={[-4, -2, 5]} intensity={1.8} color={routeColor} />

      <group ref={globeRef}>
        {/* Earth */}
        <Sphere args={[GLOBE_RADIUS, 48, 48]}>
          <meshStandardMaterial
            map={dayMap}
            color="#cdd5df"
            metalness={metalness}
            roughness={roughness}
            emissiveMap={nightMap}
            emissive="#ffcc88"
            emissiveIntensity={emissiveIntensity}
          />
        </Sphere>

        <Sphere args={[GLOBE_RADIUS + 0.08, 48, 48]}>
          <meshBasicMaterial
            color={routeColor}
            transparent
            opacity={0.045}
            depthWrite={false}
          />
        </Sphere>

        {/* Clouds */}
        <Sphere
          ref={cloudsRef}
          args={[GLOBE_RADIUS + 0.05, 24, 24]}
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

        <Points points={locations} color={routeColor} />
        <Arcs points={locations} color={routeColor} />
      </group>
    </>
  );
}

export default Globe;
