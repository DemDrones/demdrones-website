import { Model } from "@components/pdw-fiber/drone";
import { Rig } from "@components/pdw-fiber/rig";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Vector3 } from "three";

export function PdwFiber() {
  return (
    <Canvas
      dpr={[1, 2]}
      colorManagement
      shadows={false}
      camera={{ fov: 30, far: 2, position: new Vector3(0.15, 0.15, 0.15) }}
    >
      <Suspense fallback={null}>
        <Stage
          shadows={false}
          adjustCamera={false}
          environment={null}
          contactShadow={false}
        >
          <Model scale={0.01} />
        </Stage>
      </Suspense>

      <OrbitControls
        makeDefault
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
      <Rig />
    </Canvas>
  );
}
