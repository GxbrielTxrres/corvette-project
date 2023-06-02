import {
	Bloom,
	EffectComposer,
	DepthOfField,
	SSR,
	Depth,
	ColorDepth,
	ColorAverage,
	BrightnessContrast,
	Noise,
	Autofocus,
} from "@react-three/postprocessing";
import { useControls } from "leva";
import { BlendFunction } from "postprocessing";
export default function Effects() {
	return (
		<EffectComposer disableNormalPass multisampling={4}>
			<Bloom
				radius={0.5}
				mipmapBlur
				intensity={1}
				levels={2}
				luminanceThreshold={0.3}
				luminanceSmoothing={0.4}
			/>
			<Autofocus
				mouse
				focusRange={0.01}
				resolutionScale={0.4}
				bokehScale={7}
			/>
			<BrightnessContrast brightness={0.01} contrast={0.1} />
		</EffectComposer>
	);
}
