"use client";

import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import * as THREE from "three";
import type { MousePosition } from "@/types";

function PulsingRings({ mouse }: { mouse: MousePosition }) {
  const groupRef = useRef<THREE.Group>(null);

  const rings = useMemo(() =>
    Array.from({ length: 5 }, (_, i) => ({
      radius: 1 + i * 0.8,
      speed: 0.1 + i * 0.03,
      opacity: 0.15 - i * 0.02,
      phase: (i / 5) * Math.PI * 2,
    })),
    []
  );

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.elapsedTime;
    groupRef.current.rotation.x = Math.sin(t * 0.2) * 0.3 + mouse.normalizedY * 0.2;
    groupRef.current.rotation.y = t * 0.08 + mouse.normalizedX * 0.2;
  });

  return (
    <group ref={groupRef}>
      {rings.map((ring, i) => (
        <mesh key={i} rotation={[Math.PI / 2 + ring.phase * 0.3, ring.phase, 0]}>
          <torusGeometry args={[ring.radius, 0.008, 2, 100]} />
          <meshBasicMaterial color="#4a9eff" transparent opacity={ring.opacity} />
        </mesh>
      ))}
      <mesh>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial
          color="#4a9eff"
          emissive="#4a9eff"
          emissiveIntensity={2}
          transparent
          opacity={0.8}
        />
      </mesh>
    </group>
  );
}

export function ContactCanvas({ mouse }: { mouse: MousePosition }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.1} />
        <pointLight position={[0, 0, 5]} intensity={3} color="#4a9eff" />
        <pointLight position={[3, 2, 2]} intensity={1} color="#8cc8ff" />
        <PulsingRings mouse={mouse} />
        <Environment preset="night" />
      </Suspense>
    </Canvas>
  );
}
