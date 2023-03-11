import { SceneButtonData } from "lib/Data";
import Image from "next/image";
import styles from "../../src/styles/Home.module.css";
import { useDonutStore } from "store/PhysicsStore";

export default function SceneButtons(props) {
	const setOpen = useDonutStore((state) => state.setOpen);
	const open = useDonutStore((state) => state.open);

	const setRoofOpen = useDonutStore((state) => state.setRoofOpen);
	const openRoof = useDonutStore((state) => state.openRoof);

	const setViewInside = useDonutStore((state) => state.setViewInside);
	const viewInside = useDonutStore((state) => state.viewInside);

	const states = [setViewInside, setOpen, setRoofOpen];
	const currentState = [viewInside, open, openRoof];
	SceneButtonData.map((data, index) => {
		data.index = index;
		if (data.index === index) {
			data.onClick = states[index];
			data.state = currentState[index];
		}
	});

	return (
		<div className={styles.sceneButtonsContainer}>
			{SceneButtonData.map((props, index) => {
				return (
					<div
						key={index}
						onClick={props.onClick}
						className={styles.sceneButtonContainer}
					>
						<Image
							src={props.link}
							alt="Icon"
							width={30}
							height={30}
						/>

						<span>
							{props.state ? props.stateText : props.text}
						</span>
					</div>
				);
			})}
		</div>
	);
}
