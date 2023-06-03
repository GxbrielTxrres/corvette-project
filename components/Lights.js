import { useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";
import { useControls } from "leva";

export default function Lights() {
	const headlights = useRef();
	const redLights = useRef();
	const topLight = useRef();

	const { scene } = useThree();

	useEffect(() => {
		scene.add(
			headlights.current.target,
			redLights.current.target,
			topLight.current.target,
		);

		headlights.current.target.y = headlights.current.target.z = -2.25;

		redLights.current.target.position.set(-0.5, -0.3, 1.5);
		topLight.current.target.position.y = -2;
	}, []);

	return (
		<group>
			<spotLight
				ref={redLights}
				position={[-0.75, -0.25, -1]}
				args={["#ff0000", 0.25, 1, 0.45, 0.9, 0]}
			/>
			<spotLight
				ref={headlights}
				position={[0, 0.25, 0.5]}
				args={["#ffffff", 0.9, 20, 0.5, 0.3, 1]}
			/>
			<spotLight
				castShadow
				ref={topLight}
				position={[-2, 1, -0.5]}
				args={["#ffffff", 0.9, 20, 1, 1, 1]}
			/>
			<rectAreaLight
				width={2}
				height={3}
				intensity={6}
				position={[3, -2.5, 2.5]}
			/>
			<ambientLight intensity={0.03} />
		</group>
	);
}
