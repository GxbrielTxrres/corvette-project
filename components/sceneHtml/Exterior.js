import Image from "next/image";
import styles from "../../src/styles/Home.module.css";

import { colorData } from "lib/Data";
import { useDonutStore } from "store/PhysicsStore";

import { Html } from "@react-three/drei";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

export default function CustomizeInterface() {
	return (
		<>
			<Exterior />
		</>
	);
}

function Exterior() {
	const setCustomize = useDonutStore((state) => state.setCustomize);

	const [hidden, set] = useState();
	const html = useRef();

	useFrame(({ camera }) => {
		if (camera.position.x > 0) {
			set(true);
		} else {
			set(false);
			html.current.lookAt(camera.position);
		}
	});

	const links = [
		"/arctic-white.jpg",
		"/hypersonic.jpg",
		"/black.jpg",
		"/red-mist.jpg",
		"/acc-yellow.jpg",
		"/rapid-blue.jpg",
	];

	return (
		<group ref={html}>
			<Html
				className={styles.threedHtml}
				transform
				center
				scale={0.2}
				occlude
				onOcclude={set}
				style={{
					transition: "all 0.5s",
					opacity: hidden ? 0 : 1,
					transform: `scale(${hidden ? 0.5 : 1})`,
				}}
			>
				<h1>Exterior Colors</h1>
				<div className={styles.colorPickerContainer}>
					{colorData.map((data, index) => {
						return (
							<div
								key={index}
								onClick={() => {
									useDonutStore.setState({
										color: data.color,
									});
								}}
								className={styles.carColorAndText}
							>
								<Image
									height={75}
									width={175}
									style={{ objectFit: "fill" }}
									src={links[index]}
									alt="Car Color"
								/>
								<p style={{ textAlign: "center" }}>
									{data.text}
								</p>
							</div>
						);
					})}
				</div>
				<div
					style={{
						margin: "1rem auto",
						width: "50%",
						display: "flex",
						alignContent: "right",
						justifyContent: "right",
					}}
				>
					<span
						onClick={() => {
							setCustomize();
						}}
						style={{ fontSize: "4rem" }}
						className="material-symbols-outlined"
					>
						arrow_forward
					</span>
				</div>
			</Html>
		</group>
	);
}
