import { Canvas } from "@react-three/fiber";
import "./App.css";
import { OrbitControls } from "@react-three/drei";
import LaptopModel from "../LaptopModel";
import ThreeJS from "./ThreeJS";

function App() {
  return (
    <div className="w-full h-screen bg-black">
      <Canvas>
        <OrbitControls autoRotate={true} />
        <ambientLight intensity={0.08} />
        <directionalLight position={[0.028, 1.9, 8.407]} intensity={3} />
        <mesh>
          <LaptopModel scale={{ scale: 1, position: 0.5 }} />
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
