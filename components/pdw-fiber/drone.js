import { useWindowHeight } from "@react-hook/window-size";
import { config, useSpring } from "@react-spring/three";
import { useGLTF, useMatcapTexture } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useLayoutEffect } from "react";
import { MeshMatcapMaterial } from "three";
import useScrollPosition from "@react-hook/window-scroll";

export function Model(props) {
  const { scene, nodes, materials } = useGLTF("/webgl/drone/drone7.glb");
  const scrollY = useScrollPosition(10);
  const { camera } = useThree();
  const height = useWindowHeight();

  const [matcap] = useMatcapTexture(21, 64);
  const material = new MeshMatcapMaterial({ matcap, flatShading: true });

  const { y } = useSpring(
    {
      y: -scrollY / height / 2,
      config: config.molasses,
      onChange: (e) => {
        scene.position.z = e.value.y;
      },
    },
    [height, scrollY]
  );

  useLayoutEffect(() => {
    scene.rotation.y = Math.PI;
    for (const [key, node] of Object.entries(nodes)) {
      node.castShadow = true;
      node.receiveShadow = true;
      node.material = material;
    }
  }, [scene, nodes, materials]);

  useFrame(({ clock }) => {
    const rotation = clock.getElapsedTime() * 96;
    nodes.fly_spinny00.rotation.y = rotation;
    nodes.fly_spinny01.rotation.y = rotation;
    nodes.fly_spinny11.rotation.y = rotation;
    nodes.fly_spinny10.rotation.y = rotation;
  });

  return <primitive object={scene} {...props} />;
}
