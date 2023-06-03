import { useControls } from "leva";

export default function Controls() {
	const { effectProps } = useControls("Effects", {
		brightness: { value: 0.05, min: 0, max: 1, step: 0.01 },
	});

	return effectProps;
}
