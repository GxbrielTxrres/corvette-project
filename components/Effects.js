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
	ToneMapping,
	N8AO,
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
			{/* <Autofocus
				mouse
				focusRange={0.0125}
				resolutionScale={0.4}
				bokehScale={5}
			/> */}
			<BrightnessContrast brightness={0.05} contrast={0} />
			<N8AO
				aoRadius={0.2}
				intensity={10}
				denoiseRadius={1}
				quality="high"
			/>
		</EffectComposer>
	);
}
