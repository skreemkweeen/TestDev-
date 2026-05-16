"use client";

import { useRef, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Preload } from "@react-three/drei";
import * as THREE from "three";
import { FloatingGeometry } from "./FloatingGeometry";
import { ParticleField } from "./ParticleField";
import type { MousePosition } from "@/types";

function CameraRig({ mouse }: { mouse: MousePosition }) {
  useFrame(({ camera }) => {
    camera.position.x += (mouse.normalizedX * 1.5 - camera.position.x) * 0.04;
    camera.position.y += (mouse.normalizedY * 0.8 - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

function VolumetricFog() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const m = ref.current.material as THREE.MeshBasicMaterial;
    m.opacity = 0.04 + Math.sin(clock.elapsedTime * 0.3) * 0.02;
  });

  return (
    <mesh ref={ref} scale={[30, 30, 30]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial color="#0d2040" side={THREE.BackSide} transparent opacity={0.06} />
    </mesh>
  );
}

interface HeroCanvasProps {
  mouse: MousePosition;
}

export function HeroCanvas({ mouse }: HeroCanvasProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.2,
      }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <CameraRig mouse={mouse} />

        <ambientLight intensity={0.15} />
        <pointLight position={[5, 5, 5]} intensity={2} color="#4a9eff" distance={20} decay={2} />
        <pointLight position={[-5, -3, -3]} intensity={1} color="#1a3a6a" distance={15} decay={2} />
        <spotLight
          position={[0, 8, 4]}
          angle={0.5}
          penumbra={1}
          intensity={3}
          color="#60b4ff"
          castShadow={false}
        />

        <FloatingGeometry mouse={mouse} />
        <ParticleField count={1500} mouse={mouse} />
        <VolumetricFog />

        <Environment preset="night" />
        <Preload all />
      </Suspense>
    </Canvas>
  );
}
