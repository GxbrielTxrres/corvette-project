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

	const {
		width,
		height,
		intensity,
		lookAt,
		position,
		lightEnabled,
		ambientIntensity,
	} = useControls("Light", {
		lightEnabled: true,
		ambientIntensity: { value: 0.05, min: 0, max: 1, step: 0.01 },
		width: { value: 2, min: 0, max: 30, step: 1 },
		height: { value: 2, min: 0, max: 30, step: 1 },
		intensity: { value: 2, min: 0, max: 30, step: 0.1 },
		lookAt: {
			value: { x: 0, y: 0, z: 0 },
			min: -10,
			max: 30,
			step: 0.1,
		},
		position: {
			value: { x: 0, y: 0, z: 0 },
			min: -10,
			max: 30,
			step: 0.1,
		},
	});

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
			{lightEnabled && (
				<rectAreaLight
					width={width}
					height={height}
					intensity={intensity}
					position={[position.x, position.y, position.z]}
					lookAt={[lookAt.x, lookAt.y, lookAt.z]}
				/>
			)}
			<ambientLight intensity={ambientIntensity} />
		</group>
	);
}
