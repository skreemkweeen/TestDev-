"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { MousePosition } from "@/types";

interface ParticleFieldProps {
  count?: number;
  mouse: MousePosition;
}

const vertexShader = `
  uniform float uTime;
  uniform float uMouseX;
  uniform float uMouseY;
  attribute float aSize;
  attribute float aPhase;
  varying float vOpacity;

  void main() {
    vec3 pos = position;

    float wave = sin(pos.x * 0.5 + uTime * 0.3 + aPhase) * 0.15;
    wave += cos(pos.z * 0.4 + uTime * 0.2 + aPhase * 1.3) * 0.1;
    pos.y += wave;

    float dx = pos.x - uMouseX * 3.0;
    float dz = pos.z - uMouseY * 3.0;
    float dist = sqrt(dx * dx + dz * dz);
    float repel = smoothstep(2.0, 0.0, dist) * 0.4;
    pos.y += repel;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = aSize * (300.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;

    vOpacity = 0.3 + sin(uTime * 0.5 + aPhase) * 0.15;
  }
`;

const fragmentShader = `
  varying float vOpacity;

  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    float d = length(uv);
    if (d > 0.5) discard;
    float alpha = (1.0 - d * 2.0) * vOpacity;
    gl_FragColor = vec4(0.6, 0.78, 1.0, alpha);
  }
`;

export function ParticleField({ count = 2000, mouse }: ParticleFieldProps) {
  const ref = useRef<THREE.Points>(null);

  const { positions, sizes, phases } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const phases = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
      sizes[i] = Math.random() * 1.5 + 0.5;
      phases[i] = Math.random() * Math.PI * 2;
    }

    return { positions, sizes, phases };
  }, [count]);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouseX: { value: 0 },
      uMouseY: { value: 0 },
    }),
    []
  );

  useFrame(({ clock }) => {
    uniforms.uTime.value = clock.elapsedTime;
    uniforms.uMouseX.value += (mouse.normalizedX - uniforms.uMouseX.value) * 0.05;
    uniforms.uMouseY.value += (mouse.normalizedY - uniforms.uMouseY.value) * 0.05;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-aSize" args={[sizes, 1]} />
        <bufferAttribute attach="attributes-aPhase" args={[phases, 1]} />
      </bufferGeometry>
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
