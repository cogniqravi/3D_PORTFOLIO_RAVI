import {Suspense,useEffect,useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload ,useGLTF} from '@react-three/drei'
import CanvasLoader from '../Loader'


const Computers = ({ismobile}) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')


  return (
    <mesh>
      <hemisphereLight intensity={1.5} groundColor="black" />
      <pointLight intensity={1.2} />
      <spotLight
        position={[-20,50,10]}
        angle={0.15}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive 
        object={computer.scene}
        scale={ismobile? 0.5: 0.75}
        position={ismobile? [0,-2.5,-0.75] : [0,-3.45,-1.5]}  
        rotation={[-0.01,-0.2,-0.1]}
      />
      
    </mesh>
  )
}

const ComputersCanvas = () => {

  const [ismobile,setIsMobile] = useState(false);

  useEffect(() =>{

    // add a Listener for changes to the screen size 
    const mediaQuery = window.matchMedia('(max-width:500px)');
            
    // set the initial value of the "ismobile" state variable

    setIsMobile(mediaQuery.matches);
    
    // define a call back function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    // Add the callback function as a listner for changes to media query
    mediaQuery.addEventListener('change',handleMediaQueryChange);

    // Remove the Listner when the component is unmounted
    return() =>{
      mediaQuery.removeEventListener('change',handleMediaQueryChange);
    }


  },[])

   return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers ismobile={ismobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
  );
}

export default ComputersCanvas