import { useGLTF } from "@react-three/drei"

const WashingMachine = (props) => {

  const washingMachine = useGLTF('/models/washingMachine/scene.gltf')

    return (
      <primitive 
        castShadow
        object={washingMachine.scene}
        position={props.position}
        scale={0.25}
        rotation={[0, 0, 0]}
      />
    )
}

export default WashingMachine