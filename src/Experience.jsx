import React from 'react'
import { Float, OrbitControls, Text } from '@react-three/drei'
import { Shattered } from './Shattered'

const Experience = () => {
	return (
		<>
			<Float>
				<Text maxWidth={1} font='/BrokenGlass.ttf' textAlign='center' position={[0, 0, -2]}>
					Ekko x Powder
				</Text>
			</Float>
			<Float rotationIntensity={2}>
				<Shattered />
			</Float>
		</>
	)
}

export default Experience