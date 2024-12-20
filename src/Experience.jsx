import React from 'react'
import { Float, Text } from '@react-three/drei'
import { Shattered } from './Shattered'
import { useThree } from '@react-three/fiber'

const Experience = () => {
	const { viewport } = useThree()
	const scale = Math.min(viewport.width / 3, viewport.height / 3)

	return (
		<>
			<Float>
				<Text color={'lightgreen'} maxWidth={1} font='/BrokenGlass.ttf' textAlign='center' position={[0, 0.75, -2]}>
					Ekko
				</Text>
				<Text maxWidth={1} font='/BrokenGlass.ttf' textAlign='center' position={[0, 0, -2]}>
				×
				</Text>
				<Text color={'mediumpurple'} maxWidth={1} font='/BrokenGlass.ttf' textAlign='center' position={[0, -0.75, -2]}>
					Powder
				</Text>
			</Float>
			<Float>
				<Shattered scale={scale}/>
			</Float>
		</>
	)
}

export default Experience