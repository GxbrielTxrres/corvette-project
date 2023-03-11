import styles from "../../src/styles/Home.module.css";

export default function Backgrounds() {
	return (
		<div className={styles.Bgb}>
			<div
				style={{ backgroundColor: "black" }}
				className={styles.BlackBg}
			></div>

			<div className={styles.Summary}>
				<span
					style={{ marginRight: ".3rem" }}
					class="material-symbols-outlined"
				>
					list
				</span>
				ABOUT
			</div>

			<div
				style={{ backgroundColor: "#262626" }}
				className={styles.Steps}
			>
				<span
					style={{ marginRight: ".3rem" }}
					class="material-symbols-outlined"
				>
					skip_next
				</span>
				NEXT STEPS
			</div>
		</div>
	);
}
