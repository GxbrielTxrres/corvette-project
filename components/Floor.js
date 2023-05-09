import { useTexture } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { BackSide, NearestMipmapLinearFilter, RepeatWrapping } from "three";

export default function Floor() {
	let diffTexture =
		"./textures/Concrete/textures/concrete_floor_worn_001_diff_1k.jpg";
	let displacementTexture =
		"./textures/Concrete/textures/concrete_floor_worn_001_disp_1k.png";
	let roughTexture =
		"./textures/Concrete/textures/concrete_floor_worn_001_rough_1k.jpg";

	[diffTexture, roughTexture, displacementTexture] = useTexture(
		[diffTexture, roughTexture, displacementTexture],
		([diffTexture, roughTexture, displacementTexture]) => {
			diffTexture.wrapS = diffTexture.wrapT = RepeatWrapping;
			diffTexture.repeat.set(6, 6);
			roughTexture.wrapS = roughTexture.wrapT = RepeatWrapping;
			roughTexture.repeat.set(4, 4);
		},
		[],
	);

	return (
		<group>
			<Cube />

			<mesh position={[0, -2, 0]} rotation-x={-Math.PI / 2} receiveShadow>
				<planeGeometry args={[20, 20]} />
				<meshStandardMaterial
					map={diffTexture}
					displacementMap={displacementTexture}
					displacementBias={0}
					displacementScale={0.2}
					roughnessMap={roughTexture}
					roughness={3}
					metalness={0.8}
				/>
			</mesh>
		</group>
	);
}

function Cube() {
	let difTexture = "./textures/Wall/textures/concrete_wall_008_diff_1k.jpg";
	let displacement = "./textures/Wall/textures/concrete_wall_008_disp_1k.png";
	let roughTexture =
		"./textures/Concrete/textures/concrete_floor_worn_001_rough_1k.jpg";

	const box = useRef();

	useEffect(() => {
		box.current.material.envMapIntensity = 0.3;
	});

	[difTexture, displacement, roughTexture] = useTexture(
		[difTexture, roughTexture, displacement],
		([difTexture, roughTexture]) => {
			difTexture.wrapS = difTexture.wrapT = RepeatWrapping;
			difTexture.repeat.set(3, 3);
			difTexture.center.set(0.5, 0.5);
			difTexture.minFilter = NearestMipmapLinearFilter;
			roughTexture.wrapS = roughTexture.wrapT = RepeatWrapping;
			roughTexture.repeat.set(2, 2);
		},
		[],
	);

	return (
		<mesh receiveShadow ref={box} position={[0, -2, 0]}>
			<boxGeometry args={[15, 7, 15]} />
			<meshStandardMaterial
				map={difTexture}
				displacementMap={displacement}
				displacementBias={0.05}
				displacementScale={0.05}
				roughnessMap={roughTexture}
				roughness={4}
				color="silver"
				side={BackSide}
			/>
		</mesh>
	);
}
