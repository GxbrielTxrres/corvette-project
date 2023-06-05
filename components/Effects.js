import {
	Bloom,
	EffectComposer,
	BrightnessContrast,
	N8AO,
} from "@react-three/postprocessing";
import { useMemo } from "react";

export default function Effects() {
	const effects = useMemo(() => {
		return (
			<EffectComposer disableNormalPass multisampling={0}>
				<Bloom
					radius={0.5}
					mipmapBlur
					intensity={1}
					levels={2}
					luminanceThreshold={0.3}
					luminanceSmoothing={0.4}
					resolutionScale={0.1}
				/>

				<BrightnessContrast brightness={0.05} contrast={0.05} />

				<N8AO
					aoRadius={0.5}
					intensity={2.7}
					denoiseRadius={5.5}
					quality="performance"
				/>
			</EffectComposer>
		);
	}, []);

	return <>{effects}</>;
}
