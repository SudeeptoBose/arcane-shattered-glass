/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 public/shattered.glb -o src/Shattered2.jsx -k -r public 
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF, useScroll, useVideoTexture } from '@react-three/drei'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

export function Shattered(props) {
	const { nodes, materials } = useGLTF('/shattered.glb')

	const group = useRef()

	const videoTexture = useVideoTexture('/vid.mp4', {
		muted: true
	  })
	videoTexture.flipY = false

	const newMaterial = new THREE.MeshBasicMaterial({
		map:videoTexture
	})

	useEffect(() => {

		// Get group world position
		const groupWorldPosition = new THREE.Vector3()
		group.current.getWorldPosition(groupWorldPosition)

		group.current.children.forEach((mesh) => {
			// Get position of mesh
			mesh.originalPosition = mesh.position.clone()
			mesh.originalRotation = mesh.rotation.clone()

			// Get world position of the mesh
			const meshWorldPosition = new THREE.Vector3() // Variable to get the world position of each mesh

			mesh.getWorldPosition(meshWorldPosition)

			// Rotation math
			const randomVector = new THREE.Vector3(Math.random()*2,Math.random()*2,Math.random()*2)
			mesh.targetRotation = mesh.originalRotation.clone().setFromVector3(randomVector)

			// Calculate the distance from the groupWorldPosition to the mesWorldPosition
			mesh.directionVector = meshWorldPosition.clone().sub(groupWorldPosition).normalize()

			// Set a target position so that the mesh knows where to go after scrolling
			mesh.targetPosition = mesh.originalPosition.clone().add(mesh.directionVector.clone().multiplyScalar(0.5))

		})
	}, [])

	const scrollData = useScroll()

	useFrame(() => {
		group.current.children.forEach((mesh) => {
			if(scrollData.offset <0.0001)
			{
				if(mesh.name === "origin")
				{
					mesh.visible = true
				}
				else{
					mesh.visible = false
				}
			} else
			{
				if(mesh.name === "origin")
				{
					mesh.visible = false
				}
				else 
				{
					mesh.visible = true
				}
			}
			mesh.position.x = THREE.MathUtils.lerp(
				mesh.originalPosition.x,
				mesh.targetPosition.x,
				scrollData.offset // 0 at beginning , 1 at end
			)
			mesh.position.y = THREE.MathUtils.lerp(
				mesh.originalPosition.y,
				mesh.targetPosition.y,
				scrollData.offset // 0 at beginning , 1 at end
			)
			mesh.position.z = THREE.MathUtils.lerp(
				mesh.originalPosition.z,
				mesh.targetPosition.z,
				scrollData.offset // 0 at beginning , 1 at end
			)
			mesh.rotation.x = THREE.MathUtils.lerp(
				mesh.originalRotation.x,
				mesh.targetRotation.x,
				scrollData.offset // 0 at beginning , 1 at end
			)
			mesh.rotation.y = THREE.MathUtils.lerp(
				mesh.originalRotation.y,
				mesh.targetRotation.y,
				scrollData.offset // 0 at beginning , 1 at end
			)
			mesh.rotation.z = THREE.MathUtils.lerp(
				mesh.originalRotation.z,
				mesh.targetRotation.z,
				scrollData.offset // 0 at beginning , 1 at end
			)
		})
	})
	return (
		<group {...props} ref={group} dispose={null}>
			<mesh name="origin" geometry={nodes.origin.geometry} rotation={[Math.PI / 2, 0, 0]} scale={[2, 1, 1]}>
			<meshBasicMaterial map={videoTexture}/>
			</mesh>
			<mesh name="Plane001" geometry={nodes.Plane001.geometry} position={[-1.696, 0.661, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[2, 1, 1]}>
			<meshBasicMaterial map={videoTexture}/>
			</mesh>
			<mesh name="Plane002" geometry={nodes.Plane002.geometry} position={[-1.255, 0.643, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[2, 1, 1]}>
			<meshBasicMaterial map={videoTexture}/>
			</mesh>
			<mesh name="Plane003" geometry={nodes.Plane003.geometry} position={[-0.568, 0.835, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[2, 1, 1]}>
			<meshBasicMaterial map={videoTexture}/>
			</mesh>
			<mesh name="Plane004" geometry={nodes.Plane004.geometry} position={[0.052, 0.886, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[2, 1, 1]}>
			<meshBasicMaterial map={videoTexture}/>
			</mesh>
			<mesh name="Plane005" geometry={nodes.Plane005.geometry} position={[0.289, 0.953, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[2, 1, 1]}>
			<meshBasicMaterial map={videoTexture}/>
			</mesh>
			<mesh name="Plane006" geometry={nodes.Plane006.geometry} position={[1.069, 0.909, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[2, 1, 1]}>
			<meshBasicMaterial map={videoTexture}/>
			</mesh>
			<mesh name="Plane007" geometry={nodes.Plane007.geometry} position={[1.446, 0.792, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[2, 1, 1]}>
			<meshBasicMaterial map={videoTexture}/>
			</mesh>
			<mesh name="Plane008" geometry={nodes.Plane008.geometry} position={[1.797, 0.687, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[2, 1, 1]}>
			<meshBasicMaterial map={videoTexture}/>
			</mesh>
			<mesh name="Plane009" geometry={nodes.Plane009.geometry} position={[1.978, 0.525, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[2, 1, 1]}>
			<meshBasicMaterial map={videoTexture}/>
			</mesh>
			<mesh name="Plane010" geometry={nodes.Plane010.geometry} position={[1.95, -0.029, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[2, 1, 1]}>
			<meshBasicMaterial map={videoTexture}/>
			</mesh>
			<mesh name="Plane011" geometry={nodes.Plane011.geometry} position={[1.829, 0.122, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[2, 1, 1]}>
			<meshBasicMaterial map={videoTexture}/>
			</mesh>
			<mesh name="Plane012" geometry={nodes.Plane012.geometry} position={[1.382, 0.125, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[2, 1, 1]}>
			<meshBasicMaterial map={videoTexture}/>
			</mesh>
			<mesh name="Plane013" geometry={nodes.Plane013.geometry} position={[0.709, 0.695, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[2, 1, 1]}>
			<meshBasicMaterial map={videoTexture}/>
			</mesh>
			<mesh name="Plane014" geometry={nodes.Plane014.geometry} position={[0.219, 0.261, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[2, 1, 1]}>
			<meshBasicMaterial map={videoTexture}/>
			</mesh>
			<mesh name="Plane015" geometry={nodes.Plane015.geometry} position={[-0.459, 0.212, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[2, 1, 1]}>
			<meshBasicMaterial map={videoTexture}/>
			</mesh>
			<mesh name="Plane016" geometry={nodes.Plane016.geometry} position={[-0.985, 0.229, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[2, 1, 1]}>
			<meshBasicMaterial map={videoTexture}/>
			</mesh>
			<mesh name="Plane017" geometry={nodes.Plane017.geometry} position={[-1.225, -0.005, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[2, 1, 1]}>
			<meshBasicMaterial map={videoTexture}/>
			</mesh>
			<mesh name="Plane018" geometry={nodes.Plane018.geometry} position={[-1.801, 0.082, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[2, 1, 1]}>
			<meshBasicMaterial map={videoTexture}/>
			</mesh>
			<mesh name="Plane019" geometry={nodes.Plane019.geometry} position={[-1.891, -0.375, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[2, 1, 1]}>
			<meshBasicMaterial map={videoTexture}/>
			</mesh>
			<mesh name="Plane020" geometry={nodes.Plane020.geometry} position={[-1.345, -0.34, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[2, 1, 1]}>
			<meshBasicMaterial map={videoTexture}/>
			</mesh>
			<mesh name="Plane021" geometry={nodes.Plane021.geometry} position={[-1.954, -0.729, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[2, 1, 1]}>
			<meshBasicMaterial map={videoTexture}/>
			</mesh>
			<mesh name="Plane022" geometry={nodes.Plane022.geometry} position={[-1.775, -0.871, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[2, 1, 1]}>
			<meshBasicMaterial map={videoTexture}/>
			</mesh>
			<mesh name="Plane023" geometry={nodes.Plane023.geometry} position={[-1.301, -0.871, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[2, 1, 1]}>
			<meshBasicMaterial map={videoTexture}/>
			</mesh>
			<mesh name="Plane024" geometry={nodes.Plane024.geometry} position={[-0.824, -0.556, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[2, 1, 1]}>
			<meshBasicMaterial map={videoTexture}/>
			</mesh>
			<mesh name="Plane025" geometry={nodes.Plane025.geometry} position={[-0.403, -0.287, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[2, 1, 1]}>
			<meshBasicMaterial map={videoTexture}/>
			</mesh>
			<mesh name="Plane026" geometry={nodes.Plane026.geometry} position={[-0.055, -0.48, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[2, 1, 1]}>
			<meshBasicMaterial map={videoTexture}/>
			</mesh>
			<mesh name="Plane027" geometry={nodes.Plane027.geometry} position={[0.832, -0.64, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[2, 1, 1]}>
			<meshBasicMaterial map={videoTexture}/>
			</mesh>
			<mesh name="Plane028" geometry={nodes.Plane028.geometry} position={[-0.312, -0.79, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[2, 1, 1]}>
			<meshBasicMaterial map={videoTexture}/>
			</mesh>
			<mesh name="Plane029" geometry={nodes.Plane029.geometry} position={[1.594, -0.428, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[2, 1, 1]}>
			<meshBasicMaterial map={videoTexture}/>
			</mesh>
			<mesh name="Plane030" geometry={nodes.Plane030.geometry} position={[0.891, -0.152, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[2, 1, 1]}>
			<meshBasicMaterial map={videoTexture}/>
			</mesh>
			<mesh name="Plane031" geometry={nodes.Plane031.geometry} position={[1.956, -0.564, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[2, 1, 1]}>
			<meshBasicMaterial map={videoTexture}/>
			</mesh>
			<mesh name="Plane032" geometry={nodes.Plane032.geometry} position={[1.808, -0.644, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[2, 1, 1]}>
			<meshBasicMaterial map={videoTexture}/>
			</mesh>
			<mesh name="Plane033" geometry={nodes.Plane033.geometry} position={[1.427, -0.85, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[2, 1, 1]}>
			<meshBasicMaterial map={videoTexture}/>
			</mesh>
		</group>
	)
}

useGLTF.preload('/shattered.glb')
