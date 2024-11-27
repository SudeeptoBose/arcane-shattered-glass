import React from 'react'
import { Float, OrbitControls, Text } from '@react-three/drei'
import { Shattered } from './Shattered'

const Experience = () => {
	return (
		<>
			<Float>
				<Text maxWidth={1} font='/BrokenGlass.ttf' textAlign='center' position={[0, 0, -2]}>
					Ekko × Powder
				</Text>
			</Float>
			<Float>
				<Shattered  scale={1.5}/>
			</Float>
		</>
	)
}

export default Experience