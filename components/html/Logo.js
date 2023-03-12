import Image from "next/image";
import styles from "../../src/styles/Home.module.css";
import imgPath from "../../public/corvette-stingray-logo.png";

export default function Logo() {
	return (
		<div className={styles.Logo}>
			<div className={styles.log}>
				<Image
					alt=""
					style={{
						marginTop: ".8rem",
						marginBottom: ".8rem",
					}}
					src={imgPath}
					width={350}
				/>
			</div>
		</div>
	);
}
