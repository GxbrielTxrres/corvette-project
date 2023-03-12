import Image from "next/image";
import corvette from "../../public/interior.jpg";
import styles from "../../src/styles/Home.module.css";

import { useEffect, useRef } from "react";
import gsap from "gsap";
export default function Contact() {
	const about = useRef();

	useEffect(() => {
		gsap.to(about.current, { opacity: 1, duration: 2, ease: "power.out" });
	}, []);
	return (
		<div ref={about} style={{ opacity: 0 }}>
			<Image
				alt=""
				width={400}
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

			<div className={styles.stepsContainer}>
				<a href="https://twitter.com/DeveloperGT">
					Made by Gabriel Torres
				</a>
			</div>
		</div>
	);
}
