import CustomizeInterface from "./sceneHtml/Exterior";
import Lights from "components/Lights";
import Floor from "components/Floor";
import Effects from "./Effects";

import gsap from "gsap";

import { useDonutStore } from "store/PhysicsStore";
import {
	Grid,
	Environment,
	Lightformer,
	OrbitControls,
	SoftShadows,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Model } from "./Corvette2";
import { Perf } from "r3f-perf";
import Env from "./Env";

export default function Experience() {
	const { viewInside, customize } = useDonutStore();

	const { camera } = useThree();
	const [setFov] = useState(window.innerWidth);
	const controls = useRef();

	useLayoutEffect(() => {
		if (viewInside === true) {
			gsap.to(camera.position, {
				x: -0.361,
				y: -1.02,
				z: 0.32,
				duration: 2,
				ease: "easeOut",
			});

			gsap.to(controls.current.target, {
				x: -0.3623,
				y: -1.04,
				z: 0.156,
				duration: 2,
				ease: "easeOut",
			});

			camera.fov = 65;
		} else if (viewInside === false) {
			gsap.to(camera.position, {
				x: -9.85,
				y: -0.263,
				z: 0.06,
				duration: 2,
				ease: "power.out",
			});

			gsap.to(controls.current.target, {
				x: 0,
				y: -2,
				z: 0,
				duration: 2,
				ease: "easeOut",
			});
		}
	}, [viewInside]);

	useLayoutEffect(() => {
		if (setFov >= 1000 && viewInside === false) {
			camera.fov = 35;
			camera.updateProjectionMatrix();
		} else if (setFov < 1000 && viewInside === false) {
			camera.fov = 65;
			camera.updateProjectionMatrix();
		}
	}, []);

	return (
		<>
			<Perf />
			<Model position={[0, -2, 0]} />
			<OrbitControls
				ref={controls}
				maxPolarAngle={viewInside ? Math.PI : Math.PI / 2.25}
				minPolarAngle={viewInside ? 0 : -Math.PI}
				minDistance={viewInside ? 0 : 5}
				maxDistance={viewInside ? Infinity : 7.5}
				makeDefault
				enableZoom={viewInside ? false : true}
				enablePan={false}
				target={[0, -2, 0]}
			/>
			<Effects />

			<Floor />
			<Lights />
			<Grid
				renderOrder={-1}
				position={[0, -1.96, 0]}
				infiniteGrid
				cellSize={0.5}
				cellThickness={0.2}
				sectionSize={3}
				sectionThickness={0.8}
				sectionColor={[5, 5, 5]}
				fadeDistance={12}
			/>
			{/* <SoftShadows /> */}
			{customize && <CustomizeInterface />}
			<Env />
		</>
	);
}
