"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial, Float } from "@react-three/drei";
import * as THREE from "three";
import type { MousePosition } from "@/types";

interface FloatingGeometryProps {
  mouse: MousePosition;
}

function GlassSphere({
  position,
  scale,
  speed,
  mouse,
}: {
  position: [number, number, number];
  scale: number;
  speed: number;
  mouse: MousePosition;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.elapsedTime * speed;
    ref.current.rotation.x = t * 0.3;
    ref.current.rotation.y = t * 0.5;
    ref.current.position.x = position[0] + mouse.normalizedX * 0.3;
    ref.current.position.y = position[1] + mouse.normalizedY * 0.2 + Math.sin(t * 0.7) * 0.1;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={ref} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 3]} />
        <MeshTransmissionMaterial
          backside
          samples={8}
          thickness={0.5}
          chromaticAberration={0.08}
          anisotropy={0.3}
          distortion={0.2}
          distortionScale={0.4}
          temporalDistortion={0.1}
          color="#4a9eff"
          attenuationColor="#1a4a8a"
          attenuationDistance={0.8}
          transmission={0.95}
          roughness={0.05}
          metalness={0}
        />
      </mesh>
    </Float>
  );
}

function WireframeTorus({
  position,
  mouse,
}: {
  position: [number, number, number];
  mouse: MousePosition;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.elapsedTime;
    ref.current.rotation.x = t * 0.2 + mouse.normalizedY * 0.3;
    ref.current.rotation.y = t * 0.15 + mouse.normalizedX * 0.3;
    ref.current.rotation.z = t * 0.1;
  });

  return (
    <mesh ref={ref} position={position}>
      <torusGeometry args={[1.4, 0.02, 3, 80]} />
      <meshBasicMaterial color="#4a9eff" transparent opacity={0.25} />
    </mesh>
  );
}

function AmbientRing({
  position,
  radius,
  rotSpeed,
}: {
  position: [number, number, number];
  radius: number;
  rotSpeed: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.z = clock.elapsedTime * rotSpeed;
    ref.current.rotation.x = Math.sin(clock.elapsedTime * 0.3) * 0.4;
  });

  return (
    <mesh ref={ref} position={position}>
      <torusGeometry args={[radius, 0.004, 2, 120]} />
      <meshBasicMaterial color="#8cc8ff" transparent opacity={0.12} />
    </mesh>
  );
}

export function FloatingGeometry({ mouse }: FloatingGeometryProps) {
  return (
    <group>
      <GlassSphere position={[0, 0, 0]} scale={1.2} speed={0.4} mouse={mouse} />
      <GlassSphere position={[-3.5, 1.5, -2]} scale={0.5} speed={0.6} mouse={mouse} />
      <GlassSphere position={[3.5, -1, -3]} scale={0.35} speed={0.8} mouse={mouse} />

      <WireframeTorus position={[0, 0, 0]} mouse={mouse} />

      <AmbientRing position={[0, 0, 0]} radius={2.5} rotSpeed={0.08} />
      <AmbientRing position={[0, 0, 0]} radius={3.5} rotSpeed={-0.05} />
      <AmbientRing position={[-2, 1, -1]} radius={1.2} rotSpeed={0.15} />
    </group>
  );
}
