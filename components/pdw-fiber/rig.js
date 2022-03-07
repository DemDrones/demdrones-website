import { CameraShake } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useLayoutEffect, useState } from "react";
import { Vector3 } from "three";

export function Rig() {
  const [vec] = useState(() => new Vector3());
  const { camera, mouse } = useThree();

  const maxYaw = 0.5;
  const maxPitch = 0.51;
  const maxRoll = 0.11;
  const yawFrequency = 0.2;
  const pitchFrequency = 0.15;
  const rollFrequency = 2;

  useLayoutEffect(() => {
    camera.position.y = 2;
  }, [camera]);

  useFrame(() => {
    vec.set(0.15 + -mouse.x / 20, 0.15, 0.15 + mouse.x / 32);
    camera.position.lerp(vec, 0.02);
  });

  return (
    <CameraShake
      intensity={0.25}
      maxYaw={maxYaw}
      maxPitch={maxPitch}
      maxRoll={maxRoll}
      yawFrequency={yawFrequency}
      pitchFrequency={pitchFrequency}
      rollFrequency={rollFrequency}
    />
  );
}
