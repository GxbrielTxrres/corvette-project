import "@/styles/globals.css";

import { styles } from "lib/styles";

import { Canvas } from "@react-three/fiber";

import Experience from "components/Experience";
import { Html, Loader } from "@react-three/drei";
import { Suspense } from "react";

export default function App({ Component, pageProps }) {
	return (
		<>
			<Canvas
				shadows
				gl={{ antialias: false }}
				camera={{ fov: 85, position: [7.5, 0, -5] }}
				style={{ ...styles }}
			>
				<Suspense fallback={<Html>...loading</Html>}>
					<Experience />
				</Suspense>
			</Canvas>
			<Loader />
			<Component {...pageProps} />
		</>
	);
}
