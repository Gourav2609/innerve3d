import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";


export default function ThreeJS() {
    return (
        <Canvas>
            <OrbitControls />
            <ambientLight />
            <mesh>
                <LaptopModel scale={{ scale: 5, position: 0.5 }} />
            </mesh>
        </Canvas>
    )
}