import {
	Bloom,
	EffectComposer,
	BrightnessContrast,
	N8AO,
	SMAA,
} from "@react-three/postprocessing";
import { EdgeDetectionMode } from "postprocessing";
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
				/>

				<BrightnessContrast brightness={0.05} contrast={0.05} />
				<SMAA edgeDetectionMode={EdgeDetectionMode.COLOR} />
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
