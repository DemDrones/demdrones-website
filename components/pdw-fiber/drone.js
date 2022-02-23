import useScrollPosition from "@react-hook/window-scroll";
import { useWindowHeight } from "@react-hook/window-size";
import { config, useSpring } from "@react-spring/three";
import { useGLTF, useMatcapTexture, useTexture } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useLayoutEffect, useState } from "react";
import { MeshMatcapMaterial, Vector3 } from "three";

export function Model(props) {
  const { camera, mouse } = useThree();
  const { scene, nodes, materials } = useGLTF("/webgl/drone/drone7.glb");
  const scrollY = useScrollPosition(10);
  const height = useWindowHeight();

  const matcap = useTexture("/webgl/drone/textures/mat1.png");
  // const [matcap] = useMatcapTexture(21, 64);
  const material = new MeshMatcapMaterial({ matcap, flatShading: true });

  const { y } = useSpring(
    {
      y: -scrollY / height / 2,
      config: config.molasses,
      onChange: (e) => {
        scene.position.x = e.value.y / 2;
        scene.position.y = e.value.y;
        scene.rotation.x = -e.value.y * 0.2;
      },
    },
    [height, scrollY]
  );

  // const { z } = useSpring(
  //   {
  //     z: mouse.y,
  //     config: config.slow,
  //     onChange: (e) => {
  //       console.log(e.value.z);
  //       scene.rotation.z = e.value.z;
  //     },
  //   },
  //   [mouse]
  // );

  useLayoutEffect(() => {
    for (const [key, node] of Object.entries(nodes)) node.material = material;
  }, [scene, nodes, materials]);

  useFrame(({ clock }) => {
    const rotation = clock.getElapsedTime() * 97;
    nodes.fly_spinny00.rotation.y = rotation;
    nodes.fly_spinny01.rotation.y = rotation;
    nodes.fly_spinny11.rotation.y = rotation;
    nodes.fly_spinny10.rotation.y = rotation;
  });

  return <primitive object={scene} {...props} />;
}
