import Image from "next/image";
import corvette from "../../public/aboutCorv.jpg";
import styles from "../../src/styles/Home.module.css";

import { useEffect, useRef } from "react";
import gsap from "gsap";
export default function About() {
	const about = useRef();

	useEffect(() => {
		gsap.to(about.current, { opacity: 1, duration: 2, ease: "power.out" });
	}, []);
	return (
		<div ref={about} style={{ opacity: 0 }}>
			<Image
				alt=""
				width="auto"
				height="auto"
				style={{
					position: "absolute",
					aspectRatio: "16:9",
					height: "100vh",
					width: "100vw",
					filter: "blur(12px)",
					WebkitFilter: "blur(12px)",
				}}
				src={corvette}
			/>

			<div className={styles.aboutContainer}>
				<h1>C8 Corvette</h1>
				<p>
					The C8 is powered by a 6.2-liter V8 engine, which is mounted
					behind the driver in a mid-engine configuration. This design
					choice provides several advantages, including better weight
					distribution, improved handling, and faster acceleration.
					The engine is capable of producing up to 495 horsepower and
					470 lb-ft of torque, which can propel the car from 0 to 60
					mph in just 2.9 seconds.
				</p>
				<br />
				<p>
					The C8 also features an eight-speed dual-clutch automatic
					transmission, which delivers smooth and lightning-fast gear
					changes. Additionally, the C8 Corvette has a top speed of
					194 mph, making it one of the fastest cars on the road.
				</p>
				<br />
				Overall, the C8 Corvette is a remarkable feat of engineering,
				with a powerful and responsive engine that delivers exhilarating
				performance and an unmatched driving experience.
			</div>
		</div>
	);
}
