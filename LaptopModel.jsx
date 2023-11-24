import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Flex } from "@react-three/flex";

export default function LaptopModel(scale) {
  const ref = useRef();
  const modelPath = "model/scene.glb";
  const { nodes, animations } = useGLTF(modelPath);
  const { actions } = useAnimations(animations, ref);

  //   console.log(ref.current)

//   useEffect(() => {
//     // console.log(Object.keys(actions))
//     actions.bodyaction.repetitions = 1;
//     actions.screenaction.repetitions = 1;
//     actions.screenaction.clampWhenFinished = true;
//     actions.bodyaction.clampWhenFinished = true;
//     actions.bodyaction.play();
//     actions.screenaction.play();
//     // console.log(window.scrollY);
//     if(window.scrollY ===280){
//       actions.displayaction.clampWhenFinished = true;
//       actions.displayaction.repetitions = 1;
//       actions.displayaction.play();
//     }
//   });
  console.log(scale);
  return (
    <>
      <Flex justifyContent="center">
        <primitive
          object={nodes.Scene}
          scale={scale.scale.scale}
          rotation = {[0.000,-0.05,0]}
          position={[0, -1 * scale.scale.position, 0]}
          ref={ref}
        />
      </Flex>
    </>
  );
}