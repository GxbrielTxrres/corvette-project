import "@/styles/globals.css";

import { styles } from "lib/styles";

import { Canvas } from "@react-three/fiber";

import Experience from "components/Experience";
import { Loader } from "@react-three/drei";

export default function App({ Component, pageProps }) {
	return (
		<>
			<Canvas
				shadows
				gl={{ antialias: false }}
				camera={{ fov: 75 }}
				style={{ ...styles }}
			>
				<Experience />
			</Canvas>
			<Loader />
			<Component {...pageProps} />
		</>
	);
}
