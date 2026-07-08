import React, { useEffect, useRef } from 'react';
import {
  AmbientLight,
  Clock,
  Curve,
  DirectionalLight,
  Group,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  NormalBlending,
  PerspectiveCamera,
  PointLight,
  Scene,
  SphereGeometry,
  SRGBColorSpace,
  TextureLoader,
  TubeGeometry,
  Vector3,
  WebGLRenderer
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const GLOBE_RADIUS = 3.08;
const ROUTE_BASE_RADIUS = GLOBE_RADIUS + 0.15;
const INITIAL_ROTATION_Y = -3.85;
const ROUTE_COLOR = '#ffcc00';
const TEXTURE_PATHS = [
  '/earth-day-4096.webp',
  '/earth-night-4096.webp',
  '/earth-clouds-2048.webp',
];

const locations = [
  { name: 'Jiksan Hub', lat: 36.881, lon: 127.152 },
  { name: 'Seoul', lat: 37.5665, lon: 126.9780 },
  { name: 'Shanghai', lat: 31.2304, lon: 121.4737 },
  { name: 'Hong Kong', lat: 22.3193, lon: 114.1694 },
  { name: 'Frankfurt', lat: 50.1109, lon: 8.6821 },
  { name: 'Detroit', lat: 42.3314, lon: -83.0458 },
  { name: 'Southeast Asia', lat: 13.7563, lon: 100.5018 },
];

const latLonToVector3 = (lat, lon, radius) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new Vector3(x, y, z);
};

const configureTexture = (texture, renderer) => {
  const maxAnisotropy = renderer.capabilities.getMaxAnisotropy?.() || 1;
  texture.colorSpace = SRGBColorSpace;
  texture.anisotropy = Math.min(8, maxAnisotropy);
  texture.needsUpdate = true;
};

const createPoint = (position, color) => {
  const point = new Mesh(
    new SphereGeometry(0.055, 16, 16),
    new MeshBasicMaterial({ color, toneMapped: false })
  );
  point.position.copy(position);
  return point;
};

class GlobeArcCurve extends Curve {
  constructor(start, end) {
    super();
    this.startDirection = start.clone().normalize();
    this.endDirection = end.clone().normalize();
    this.angle = Math.acos(Math.min(1, Math.max(-1, this.startDirection.dot(this.endDirection))));
    this.sinAngle = Math.sin(this.angle);
    this.arcHeight = Math.min(0.82, Math.max(0.16, this.angle * 0.3));
  }

  getPoint(t, target = new Vector3()) {
    if (this.angle < 1e-5 || Math.abs(this.sinAngle) < 1e-5) {
      target.copy(this.startDirection).lerp(this.endDirection, t).normalize();
    } else {
      const startWeight = Math.sin((1 - t) * this.angle) / this.sinAngle;
      const endWeight = Math.sin(t * this.angle) / this.sinAngle;
      target
        .copy(this.startDirection)
        .multiplyScalar(startWeight)
        .addScaledVector(this.endDirection, endWeight)
        .normalize();
    }

    const lift = Math.sin(Math.PI * t) * this.arcHeight;
    return target.multiplyScalar(ROUTE_BASE_RADIUS + lift);
  }
}

const createRouteTube = (start, end, color) => {
  const curve = new GlobeArcCurve(start, end);
  return new Mesh(
    new TubeGeometry(curve, 56, 0.011, 6, false),
    new MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 0.72,
      toneMapped: false,
    })
  );
};

const addRoutes = (group, color) => {
  const routePoints = locations.map((location) => (
    latLonToVector3(location.lat, location.lon, ROUTE_BASE_RADIUS)
  ));
  const hub = routePoints[0];

  routePoints.forEach((end, index) => {
    if (index === 0) return;
    group.add(createRouteTube(hub, end, color));
  });
};

const addPoints = (group, color) => {
  locations.forEach((location) => {
    group.add(createPoint(
      latLonToVector3(location.lat, location.lon, ROUTE_BASE_RADIUS + 0.01),
      color
    ));
  });
};

const createGlobeGroup = ([dayMap, nightMap, cloudsMap]) => {
  const group = new Group();
  group.rotation.y = INITIAL_ROTATION_Y;

  const earth = new Mesh(
    new SphereGeometry(GLOBE_RADIUS, 64, 64),
    new MeshStandardMaterial({
      map: dayMap,
      color: '#cdd5df',
      metalness: 0.35,
      roughness: 0.38,
      emissiveMap: nightMap,
      emissive: '#ffcc88',
      emissiveIntensity: 1.35,
    })
  );
  group.add(earth);

  const glow = new Mesh(
    new SphereGeometry(GLOBE_RADIUS + 0.08, 64, 64),
    new MeshBasicMaterial({
      color: ROUTE_COLOR,
      transparent: true,
      opacity: 0.045,
      depthWrite: false,
    })
  );
  group.add(glow);

  const clouds = new Mesh(
    new SphereGeometry(GLOBE_RADIUS + 0.05, 32, 32),
    new MeshStandardMaterial({
      map: cloudsMap,
      transparent: true,
      opacity: 0.18,
      blending: NormalBlending,
    })
  );
  clouds.userData.isCloudLayer = true;
  group.add(clouds);

  addPoints(group, ROUTE_COLOR);
  addRoutes(group, ROUTE_COLOR);

  return { group, clouds };
};

const disposeMaterial = (material) => {
  if (Array.isArray(material)) {
    material.forEach(disposeMaterial);
    return;
  }
  material?.dispose();
};

const disposeScene = (scene) => {
  scene.traverse((object) => {
    object.geometry?.dispose();
    disposeMaterial(object.material);
  });
};

/**
 * Desktop-only 3D Globe component.
 * Lazy-loaded from the home page so Three.js never loads on mobile.
 */
const Desktop3DGlobe = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    let animationFrame = 0;
    let globeGroup = null;
    let cloudLayer = null;
    let isDisposed = false;
    let loadedTextures = [];

    const scene = new Scene();
    const camera = new PerspectiveCamera(46, 1, 0.1, 100);
    camera.position.set(0, 0, 9.8);

    const renderer = new WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.outputColorSpace = SRGBColorSpace;
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';
    mount.appendChild(renderer.domElement);

    scene.add(new AmbientLight(0xffffff, 0.85));
    const directionalLight = new DirectionalLight(0xffffff, 7.5);
    directionalLight.position.set(8, 8, 6);
    scene.add(directionalLight);
    const pointLight = new PointLight(ROUTE_COLOR, 1.8);
    pointLight.position.set(-4, -2, 5);
    scene.add(pointLight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.28;
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    const resize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      if (!width || !height) return;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
      renderer.setSize(width, height, false);
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(mount);
    resize();

    const clock = new Clock();
    const render = () => {
      const delta = clock.getDelta();
      if (globeGroup) {
        globeGroup.rotation.y += delta * 0.05;
      }
      if (cloudLayer) {
        cloudLayer.rotation.y += delta * 0.06;
      }
      controls.update();
      renderer.render(scene, camera);
      animationFrame = window.requestAnimationFrame(render);
    };

    const textureLoader = new TextureLoader();
    Promise.all(TEXTURE_PATHS.map((path) => textureLoader.loadAsync(path)))
      .then((textures) => {
        if (isDisposed) {
          textures.forEach((texture) => texture.dispose());
          return;
        }
        loadedTextures = textures;
        textures.forEach((texture) => configureTexture(texture, renderer));

        const globe = createGlobeGroup(textures);
        globeGroup = globe.group;
        cloudLayer = globe.clouds;
        scene.add(globeGroup);
      })
      .catch((error) => {
        if (!isDisposed) {
          console.error('Failed to load globe textures', error);
        }
      });

    render();

    return () => {
      isDisposed = true;
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      controls.dispose();
      disposeScene(scene);
      loadedTextures.forEach((texture) => texture.dispose());
      renderer.dispose();
      renderer.forceContextLoss();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      style={{
        width: '100%',
        height: '100%',
        minHeight: 300,
      }}
    />
  );
};

export default Desktop3DGlobe;
