import { useState, useRef, Suspense, useMemo } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { Points, PointMaterial, Preload, Float, useTexture, useGLTF } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'
import * as THREE from 'three'

const StarField = (props) => {
    const ref = useRef()
    const [sphere] = useState(() => random.inSphere(new Float32Array(6000), { radius: 50 }))

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#ffffff"
                    size={0.05}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.8}
                />
            </Points>
        </group>
    )
}

const OrbitPath = () => {
    return (
        <group position={[2.5, 0, 0]} rotation={[0.5, 0, 0]}>
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[2.8, 0.005, 16, 100]} />
                <meshBasicMaterial color="#00f0ff" transparent opacity={0.3} />
            </mesh>
        </group>
    )
}

const Earth = () => {
    const earthRef = useRef()
    const cloudsRef = useRef()

    const [colorMap, normalMap, specularMap, cloudsMap] = useTexture([
        'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg',
        'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_normal_2048.jpg',
        'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg',
        'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_clouds_1024.png'
    ])

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        earthRef.current.rotation.y = t * 0.05
        cloudsRef.current.rotation.y = t * 0.07
    })

    return (
        <group position={[2.5, 0, 0]} rotation={[0, -1.5, 0.4]}>
            <mesh ref={earthRef}>
                <sphereGeometry args={[1.2, 128, 128]} />
                <meshStandardMaterial
                    map={colorMap}
                    normalMap={normalMap}
                    roughness={0.5}
                    metalness={0.1}
                />
            </mesh>
            <mesh ref={cloudsRef} scale={[1.01, 1.01, 1.01]}>
                <sphereGeometry args={[1.2, 128, 128]} />
                <meshStandardMaterial
                    map={cloudsMap}
                    transparent={true}
                    opacity={0.4}
                    blending={THREE.AdditiveBlending}
                    side={THREE.DoubleSide}
                    depthWrite={false}
                />
            </mesh>
            {/* Atmosphere Glow */}
            <mesh scale={[1.15, 1.15, 1.15]}>
                <sphereGeometry args={[1.2, 64, 64]} />
                <meshBasicMaterial color="#4488ff" transparent opacity={0.1} side={THREE.BackSide} blending={THREE.AdditiveBlending} />
            </mesh>
        </group>
    )
}

const Satellite = () => {
    const groupRef = useRef()
    const { scene } = useGLTF('/aqua.glb')

    useFrame((state) => {
        // Start at top of orbit (90 degrees) for maximum visibility
        const t = state.clock.getElapsedTime() * 0.2 + Math.PI / 2
        const radius = 2.8

        // Calculate position on the inclined plane matching OrbitPath
        // OrbitPath rotation is [0.5, 0, 0]
        const x = Math.cos(t) * radius
        const z = Math.sin(t) * radius
        const y = 0

        const pos = new THREE.Vector3(x, y, z)
        pos.applyEuler(new THREE.Euler(0.5, 0, 0)) // Apply inclination
        pos.add(new THREE.Vector3(2.5, 0, 0)) // Add Earth offset

        groupRef.current.position.copy(pos)

        // Update Satellite rotation logic to ensure the sensor points correctly at Earth.
        // The sensor and lens are aligned along the local Z-axis.
        // We want the local Z-axis to point towards Earth.
        // The `lookAt` function makes the object's local -Z axis point towards the target.
        // So we rotate 180 degrees around Y to flip it, making +Z point towards the target.
        groupRef.current.lookAt(new THREE.Vector3(2.5, 0, 0))
        groupRef.current.rotateY(Math.PI)
    })

    return (
        <Float speed={1} rotationIntensity={0.2} floatIntensity={0.2}>
            <group ref={groupRef} scale={0.05}>
                {/* Loaded GLB Model */}
                <primitive object={scene} rotation={[0, -Math.PI / 2, 0]} />

                {/* Physics Simulator Coordinate Frame - Scaled up for the model */}
                <group scale={[7, 7, 7]}>
                    {/* X Axis - Red */}
                    <mesh position={[1, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
                        <cylinderGeometry args={[0.03, 0.03, 2]} />
                        <meshStandardMaterial
                            color="#ff0000"
                            emissive="#ff0000"
                            emissiveIntensity={0.8}
                            depthTest={true}
                            depthWrite={true}
                        />
                    </mesh>
                    <mesh position={[2.1, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
                        <coneGeometry args={[0.08, 0.3, 16]} />
                        <meshStandardMaterial
                            color="#ff0000"
                            emissive="#ff0000"
                            emissiveIntensity={0.8}
                            depthTest={true}
                            depthWrite={true}
                        />
                    </mesh>

                    {/* Y Axis - Green */}
                    <mesh position={[0, 1, 0]}>
                        <cylinderGeometry args={[0.03, 0.03, 2]} />
                        <meshStandardMaterial
                            color="#00ff00"
                            emissive="#00ff00"
                            emissiveIntensity={0.8}
                            depthTest={true}
                            depthWrite={true}
                        />
                    </mesh>
                    <mesh position={[0, 2.1, 0]}>
                        <coneGeometry args={[0.08, 0.3, 16]} />
                        <meshStandardMaterial
                            color="#00ff00"
                            emissive="#00ff00"
                            emissiveIntensity={0.8}
                            depthTest={true}
                            depthWrite={true}
                        />
                    </mesh>

                    {/* Z Axis - Blue */}
                    <mesh position={[0, 0, 1]} rotation={[Math.PI / 2, 0, 0]}>
                        <cylinderGeometry args={[0.03, 0.03, 2]} />
                        <meshStandardMaterial
                            color="#0000ff"
                            emissive="#0000ff"
                            emissiveIntensity={0.8}
                            depthTest={true}
                            depthWrite={true}
                        />
                    </mesh>
                    <mesh position={[0, 0, 2.1]} rotation={[Math.PI / 2, 0, 0]}>
                        <coneGeometry args={[0.08, 0.3, 16]} />
                        <meshStandardMaterial
                            color="#0000ff"
                            emissive="#0000ff"
                            emissiveIntensity={0.8}
                            depthTest={true}
                            depthWrite={true}
                        />
                    </mesh>
                </group>
            </group>
        </Float>
    )
}

const SpaceBackground = () => {
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: 0 }}>
            <Canvas camera={{ position: [0, 0, 6], fov: 40 }}>
                <color attach="background" args={['#000000']} />
                <ambientLight intensity={0.3} />
                <directionalLight position={[-5, 2, 5]} intensity={3} />
                {/* <directionalLight position={[5, -2, -5]} intensity={1} color="#445566" /> Fill light */}
                <Suspense fallback={null}>
                    <group position={[0.5, 0, 0]}>
                        <StarField />
                        <OrbitPath />
                        <Earth />
                        <Satellite />
                    </group>
                </Suspense>
                <Preload all />
            </Canvas>
        </div>
    )
}

export default SpaceBackground
