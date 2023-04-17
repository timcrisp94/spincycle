import { Canvas } from "@react-three/fiber"
import { OrbitControls, Stage, Center, SpotLight } from "@react-three/drei"

import WashingMachine from "./WashingMachine"
import { AmbientLight } from "three"

const WashingMachineScene = () => {

  return (
    <Canvas className="bg-slate-600">
      <OrbitControls />
      <ambientLight intensity={0.75} />

      <WashingMachine position={[0, 0, 0]} />

    </Canvas>
  )
}

export default WashingMachineScene