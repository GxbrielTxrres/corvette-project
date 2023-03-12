import styles from "../../src/styles/Home.module.css";
import { useDonutStore } from "store/PhysicsStore";
export default function Backgrounds() {
	const { setAbout, setCustomize, setSteps, steps } = useDonutStore();
	return (
		<div className={styles.Bgb}>
			<div
				style={{ backgroundColor: "black" }}
				className={styles.BlackBg}
			></div>

			<div
				onClick={() => {
					setAbout();
					setCustomize();
				}}
				className={styles.Summary}
			>
				<span
					style={{ marginRight: ".3rem" }}
					className="material-symbols-outlined"
				>
					list
				</span>
				ABOUT
			</div>

			<div
				onClick={() => {
					setSteps();
					setCustomize();
				}}
				style={{ backgroundColor: "#262626" }}
				className={styles.Steps}
			>
				<span
					style={{ marginRight: ".3rem" }}
					className="material-symbols-outlined"
				>
					skip_next
				</span>
				NEXT STEPS
			</div>
		</div>
	);
}
