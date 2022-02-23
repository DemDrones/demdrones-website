import { Model } from "@components/pdw-fiber/drone";
import { Rig } from "@components/pdw-fiber/rig";
import { animated } from "@react-spring/three";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Vector3 } from "three";

export function PdwFiber() {
  return (
    <Canvas
      dpr={[1, 2]}
      shadows={false}
      camera={{ fov: 30, far: 200, position: new Vector3(0.15, 0.15, 0.15) }}
    >
      <Suspense fallback={null}>
        <Stage adjustCamera={false} environment={null}>
          <animated.group>
            <Model scale={0.01} />
          </animated.group>
        </Stage>
      </Suspense>

      {/*<OrbitControls*/}
      {/*  makeDefault*/}
      {/*  enableZoom={false}*/}
      {/*  enablePan={false}*/}
      {/*  enableRotate={false}*/}
      {/*/>*/}
      <Rig />
    </Canvas>
  );
}
