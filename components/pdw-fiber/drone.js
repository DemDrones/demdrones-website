import useScrollPosition from "@react-hook/window-scroll";
import { useWindowHeight } from "@react-hook/window-size";
import { config, useSpring } from "@react-spring/three";
import { useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useLayoutEffect } from "react";
import { MeshMatcapMaterial } from "three";

export function Model(props) {
  const { scene, nodes, materials } = useGLTF("/webgl/drone/drone7.glb");
  const scrollY = useScrollPosition(10);
  const height = useWindowHeight();

  const matcap = useTexture("/webgl/drone/textures/mat3.png");
  // const [matcap] = useMatcapTexture(21, 64);
  const material = new MeshMatcapMaterial({ matcap, flatShading: true });

  const { y } = useSpring(
    {
      y: -scrollY / height / 2,
      from: { y: 0 },
      config: config.molasses,
      onChange: (e) => (scene.position.y = -e.value.y / 2),
    },
    [height, scrollY]
  );

  useLayoutEffect(() => {
    for (const [key, node] of Object.entries(nodes)) {
      let nodeMaterial = node.material;
      if (nodeMaterial) {
        node.material = material;
        nodeMaterial.dispose();
      }
    }
  }, [scene, nodes, materials]);

  useFrame(({ clock }) => {
    const rotation =
      clock.getElapsedTime() * Math.PI * Math.PI * Math.PI * Math.PI;
    nodes.fly_spinny00.rotation.y = rotation;
    nodes.fly_spinny01.rotation.y = rotation;
    nodes.fly_spinny11.rotation.y = rotation;
    nodes.fly_spinny10.rotation.y = rotation;
  });

  return <primitive object={scene} {...props} />;
}
