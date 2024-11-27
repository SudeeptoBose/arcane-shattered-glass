import { Loader, ScrollControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Experience from "./Experience"
import Footer from "./Footer"

function App() {

	return (
		<>
			<Canvas>
				<color args={['#000000']} attach={'background'} />
				<ScrollControls pages={3}>
					<Experience />
				</ScrollControls>
			</Canvas>
			<Loader />
			<Footer/>
		</>
	)
}

export default App
