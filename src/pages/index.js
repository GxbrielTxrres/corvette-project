import Head from "next/head";
import styles from "@/styles/Home.module.css";

import { useDonutStore } from "store/PhysicsStore";
import Interface from "components/html/Interface";
import About from "components/html/About";
import Contact from "components/html/Contact";

export default function Home() {
	const { customize, setCustomize, about, setAbout, steps, setSteps } =
		useDonutStore();
	function handleClick() {
		setCustomize();
		if (about === true) {
			setAbout();
		}

		if (steps === true) {
			setSteps();
		}
	}
	return (
		<>
			<Head>
				<title>Corvette Simulator</title>
				<meta
					name="description"
					content="An app made with three.js and react three fiber to customize and view a 3d model of the c8 corvette."
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
				/>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
				/>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
				/>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Tilt+Warp&display=swap"
					rel="stylesheet"
				/>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
				/>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
				/>
			</Head>
			<main>
				<div className={styles.container}>
					<Interface />

					{about && <About />}
					{steps && <Contact />}

					{customize && (
						<button
							className={styles.customizeBtn}
							style={{
								position: "absolute",
								top: "95%",
								left: "50%",
								transform: "translate(-50%, -50%)",

								backgroundColor: "transparent",
								outline: "unset",
								border: "unset",
							}}
							onClick={handleClick}
						>
							Back
						</button>
					)}
				</div>
			</main>
		</>
	);
}
