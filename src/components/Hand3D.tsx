import { useRef, useEffect, Suspense } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { Stars, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function HandModel() {
  const gltf = useLoader(GLTFLoader, '/Images/hand.glb')
  const handRef = useRef<THREE.Group>()

  useEffect(() => {
    if (handRef.current) {
      // Center and adjust the model
      const box = new THREE.Box3().setFromObject(handRef.current)
      const center = box.getCenter(new THREE.Vector3())
      
      // Only center horizontally, keep vertical position manual
      handRef.current.position.x = -center.x
      handRef.current.position.z = -center.z

      // Create rotation animation
      gsap.to(handRef.current.rotation, {
        y: Math.PI * 2,
        ease: "none",
        scrollTrigger: {
          trigger: "#hand-section",
          start: "top top",
          end: "+=2000",
          scrub: 2,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1
        }
      })
    }
  }, [])

  return (
    <group position={[0, 0, 0]}>
      <primitive 
        ref={handRef}
        object={gltf.scene} 
        scale={5}
        position={[0, -3, 0]}  // Changed from 4 to -6 to move it lower
      />
    </group>
  )
}

function LoadingScreen() {
  return (
    <div className="absolute inset-0 flex items-center justify-center text-white">
      Loading 3D Model...
    </div>
  )
}

export default function Hand3D() {
  return (
    <div id="hand-section" className="relative w-full h-[100vh] bg-black -mt-1 -mb-1">
      <Suspense fallback={<LoadingScreen />}>
        <Canvas shadows>
          <PerspectiveCamera makeDefault position={[0, -2, 20]} fov={35} />  {/* Adjusted camera to look down */}
          <OrbitControls enableZoom={false} enablePan={false} />
          
          {/* Enhanced lighting setup */}
          <ambientLight intensity={2} />
          <hemisphereLight intensity={2} />
          <directionalLight
            position={[5, 5, 5]}
            intensity={3}
            castShadow
          />
          <directionalLight
            position={[-5, 5, -5]}
            intensity={2}
          />
          <pointLight
            position={[0, 0, 10]}
            intensity={3}
          />
          <spotLight
            position={[0, 10, 0]}
            intensity={2}
            angle={0.5}
            penumbra={1}
          />
          
          {/* Space effect */}
          <Stars 
            radius={50}
            depth={50}
            count={3000}
            factor={4}
            saturation={0}
            fade
            speed={0.5}
          />
          
          <HandModel />

          {/* Add fog for depth */}
          <fog attach="fog" args={['black', 15, 55]} />
        </Canvas>
      </Suspense>
    </div>
  )
} 