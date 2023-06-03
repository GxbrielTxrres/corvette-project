import { Lightformer, Environment } from "@react-three/drei";

export default function Env() {
	return (
		<Environment
			frames={1}
			resolution={256}
			// files="/dikhololo_night_1k.hdr"
			preset="night"
			path="/dikhololo_night_1k.hdr"
		>
			<Lightformer
				position={[1.21, 2, 1]}
				color="#0a0a0a"
				intensity={200}
				form="circle"
			/>

			<Lightformer
				position={[0, -0.03, 2]}
				target={[0, 0, -4]}
				scale={[1, 1, 1]}
				color="#000000"
				intensity={0.5}
				form="circle"
			/>
			<Lightformer
				position={[2, -1, 0]}
				target={[0, -3, 0]}
				scale={0.2}
				color="#ffffff"
				intensity={2}
				form="circle"
			/>

			<Lightformer
				position-y={0.8}
				target={[0, -1.48, 1.57]}
				scale={[0.5, 20]}
				color="#ffffff"
				intensity={0.75}
				form="rect"
			/>
			<Lightformer
				position-y={1.3}
				color="#6287f8"
				intensity={1.22}
				form="ring"
			/>
			<Lightformer
				position={[0, 0, -2]}
				target={[0, 0, 4]}
				scale={[0.48, 0.19]}
				color="#ffffff"
				intensity={10}
				form="circle"
			/>
		</Environment>
	);
}
