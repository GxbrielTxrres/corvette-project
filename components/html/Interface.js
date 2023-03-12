import Backgrounds from "./Backgrounds";
import Logo from "./Logo";
import SceneButtons from "./SceneButtons";
import Customize from "./Customize";
import { useDonutStore } from "store/PhysicsStore";
import About from "./About";

export default function Interface() {
	const customize = useDonutStore((state) => state.customize);
	function check(customize) {
		if (customize === false) {
			return (
				<>
					<Backgrounds />
					<Logo />
					<SceneButtons />
					<Customize />
				</>
			);
		}
	}
	return check(customize);
}
