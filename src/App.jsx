import { Loader, ScrollControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Experience from "./Experience"
import Footer from "./Footer"
import AudioPlayer from "./AudioPlayer"
import { useEffect } from "react"

function App() {

	useEffect(() => {
		document.body.style.overscrollBehavior = 'none';
		return () => {
		  document.body.style.overscrollBehavior = 'auto';
		};
	  }, []);
	return (
		<>
			<Canvas>
				<color args={['#000000']} attach={'background'} />
				<ScrollControls pages={3}>
					<Experience />
				</ScrollControls>
			</Canvas>
			<AudioPlayer/>
			<Loader />
			<Footer/>
		</>
	)
}

export default App
