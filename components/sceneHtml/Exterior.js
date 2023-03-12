import { colorData } from "lib/Data";
import { useDonutStore } from "store/PhysicsStore";

import { useRef, useState, useEffect, useLayoutEffect } from "react";
import { Color } from "three";
import { useFrame, useThree } from "@react-three/fiber";

import gsap from "gsap";

export default function CustomizeInterface() {
	const html = useRef();
	const spheres = useRef([]);

	const { viewInside, setViewInside } = useDonutStore();

	const [hovered, setHovered] = useState(false);

	const { camera } = useThree();

	useEffect(() => {
		if (viewInside) {
			setViewInside();
		}
		document.body.style.cursor = hovered ? "pointer" : "auto";
	}, [hovered]);

	useLayoutEffect(() => {
		gsap.to(camera.position, {
			x: -9.85,
			y: -0.263,
			z: 0.06,
			duration: 2,
			ease: "power2.out",
		});
	}, []);

	useFrame(({ camera }) => {
		if (camera.position.x > html.current.position.x) {
			for (const sphere of html.current.children) {
				gsap.to(sphere.material, {
					opacity: 0,
					duration: 1,
					ease: "power.out",
				});
			}
		} else {
			for (const sphere of html.current.children) {
				gsap.to(sphere.material, {
					opacity: 1,
					duration: 2,
					ease: "power.in",
				});
			}
		}
	});

	return (
		<group
			position={[-1.2, 0.07, -0.9]}
			rotation-y={-Math.PI / 2}
			ref={html}
			onPointerOver={() => setHovered(true)}
			onPointerOut={() => setHovered(false)}
		>
			{colorData.map((data, index) => {
				return (
					<mesh
						ref={(element) => {
							spheres.current[index] = element;
						}}
						castShadow
						key={index}
						scale={0.4}
						position={[index * 0.4, -0.5, index * 0.02]}
						onClick={() => {
							useDonutStore.setState({
								color: data.color,
							});
						}}
					>
						<sphereGeometry args={[0.35]} />
						<meshStandardMaterial
							transparent
							opacity={0}
							metalness={0}
							roughness={0.1}
							color={new Color(
								data.color.r,
								data.color.g,
								data.color.b,
							).convertSRGBToLinear()}
							envMapIntensity={0.3}
						/>
					</mesh>
				);
			})}
		</group>
	);
}
