import React, { useRef } from "react";
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";
import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";

const BackDrop = () => {
  const shadows = useRef();
  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      alphaTest={0.85}
      frames={60}
      scale={5}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
    >
      <RandomizedLight
        amount={4}
        intensity={0.55}
        ambient={1.25}
        position={[5, 5, -10]}
        radius={5}
      />
      <RandomizedLight
        amount={4}
        intensity={0.25}
        ambient={0.55}
        position={[-5, 5, -9]}
        radius={5}
      />
    </AccumulativeShadows>
  );
};

export default BackDrop;
