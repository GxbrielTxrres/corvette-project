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
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";

import { useEffect, useLayoutEffect, useRef } from "react";
import { Model } from "./Corvette2";

export default function Experience() {
	const { viewInside, customize } = useDonutStore();

	const { camera } = useThree();
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

			camera.fov = 55;
			camera.updateProjectionMatrix();
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

		camera.fov = 35;
		camera.updateProjectionMatrix();
	}, [viewInside]);

	return (
		<group>
			<Model position={[0, -2, 0]} />
			<OrbitControls
				ref={controls}
				maxPolarAngle={viewInside ? Math.PI : Math.PI / 2.25}
				minPolarAngle={viewInside ? 0 : Math.PI / 2.25}
				minDistance={viewInside ? 0 : 5}
				maxDistance={viewInside ? Infinity : 10}
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

			{customize && <CustomizeInterface />}

			<Environment
				frames={1}
				near={1}
				far={100}
				resolution={256}
				preset="night"
			>
				<Lightformer
					position={[1.21, 0, 0]}
					color="#0a0a0a"
					intensity={20}
					form="circle"
				/>

				<Lightformer
					position={[0, -0.03, 2]}
					target={[0, 0, -4]}
					scale={[1, 1, 1]}
					color="#51556f"
					intensity={1.8}
					form="circle"
				/>
				<Lightformer
					position={[3.17, 0.96, 0]}
					target={[0, -2.19, 0]}
					scale={[1, 1, 1]}
					color="#ffffff"
					intensity={1.73}
					form="ring"
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
		</group>
	);
}
