import { useThree } from "@react-three/fiber";

export default function About() {
	const { width, height } = useThree((state) => state.viewport);

	return (
		<group>
			<mesh scale={[width, height, 1]}>
				<planeGeometry />
			</mesh>
		</group>
	);
}
