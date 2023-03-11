import { useDonutStore } from "store/PhysicsStore";
import styles from "../../src/styles/Home.module.css";

export default function Customize() {
	const setCustomize = useDonutStore((state) => state.setCustomize);

	return (
		<footer>
			<div
				onClick={() => {
					setCustomize();
				}}
				className={styles.customizeText}
			>
				<span class="material-symbols-outlined">handyman</span>
				<button
					style={{
						margin: "0 0.4rem",
						backgroundColor: "unset",
						outline: "none",
						border: "unset",
						fontFamily: "Tilt Warp, cursive",
						letterSpacing: ".15rem",
					}}
					className={styles.handy}
				>
					CUSTOMIZE
				</button>
			</div>
		</footer>
	);
}
