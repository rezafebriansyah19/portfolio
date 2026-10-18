import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { ContactShadows, Environment, Float, OrbitControls } from '@react-three/drei';
import type { Group } from 'three';
import * as THREE from 'three';
import styles from './HeroScene.module.scss';

const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return true;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

const GoldStructure = () => {
  const groupRef = useRef<Group>(null);
  const { pointer } = useThree();
  const reducedMotion = useMemo(() => prefersReducedMotion(), []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    const eased = reducedMotion ? 0.08 : 0.2;
    const targetX = (pointer.x * 0.6) * (reducedMotion ? 0.2 : 1);
    const targetY = (pointer.y * 0.35) * (reducedMotion ? 0.2 : 1);

    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      0.75 + targetY,
      eased,
    );
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      state.clock.elapsedTime * 0.25 + targetX,
      eased,
    );
    groupRef.current.rotation.z = THREE.MathUtils.lerp(
      groupRef.current.rotation.z,
      0.5 + targetX * 0.7,
      eased,
    );

    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.9) * 0.1;
    groupRef.current.position.x = Math.cos(state.clock.elapsedTime * 0.6) * 0.04;

    if (reducedMotion) {
      groupRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      <Float speed={1.2} rotationIntensity={0.8} floatIntensity={0.7}>
        <mesh scale={1.5} rotation={[0.9, 0.2, 0.35]}>
          <torusKnotGeometry args={[1.1, 0.26, 220, 32]} />
          <meshPhysicalMaterial
            color="#D6B56D"
            metalness={1}
            roughness={0.22}
            clearcoat={1}
            clearcoatRoughness={0.2}
            reflectivity={1}
          />
        </mesh>
      </Float>

      <mesh position={[0.05, 0.6, -0.2]} scale={0.8} rotation={[0.4, 1.1, 0.3]}>
        <octahedronGeometry args={[1.2, 0]} />
        <meshStandardMaterial color="#F5E7C1" metalness={0.96} roughness={0.15} />
      </mesh>

      <mesh position={[0.8, -0.6, 0.9]} scale={0.38} rotation={[0.7, 0.8, 0.2]}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="#E5C77E" metalness={1} roughness={0.1} />
      </mesh>
    </group>
  );
};

export const HeroScene: React.FC = () => {
  const reducedMotion = useMemo(() => prefersReducedMotion(), []);

  if (typeof window !== 'undefined' && !window.WebGLRenderingContext) {
    return <div className={styles.fallbackPanel} aria-label="3D visual fallback" />;
  }

  return (
    <div className={styles.sceneShell}>
      <Canvas
        camera={{ position: [0, 0, 4.6], fov: 38 }}
        dpr={reducedMotion ? [1, 1.25] : [1, 1.8]}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={['#0B1220']} />
        <fog attach="fog" args={['#0B1220', 4, 11]} />
        <ambientLight intensity={1.2} color="#F7E3B2" />
        <directionalLight position={[3, 4, 2]} intensity={2.6} color="#F6D580" />
        <directionalLight position={[-2, -1, 1]} intensity={0.9} color="#8BB5FF" />
        <GoldStructure />
        <ContactShadows
          position={[0, -2.2, 0]}
          opacity={0.45}
          blur={2.2}
          far={5}
          scale={7}
          color="#000000"
        />
        <Environment preset="studio" />
        {!reducedMotion && <OrbitControls enablePan={false} enableZoom={false} enableRotate={false} />}
      </Canvas>
    </div>
  );
};
