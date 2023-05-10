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
} from "@react-three/postprocessing";
import { useControls } from "leva";
import { BlendFunction } from "postprocessing";
export default function Effects() {
	return (
		<EffectComposer disableNormalPass multisampling={0}>
			<Bloom
				radius={0.5}
				mipmapBlur
				intensity={1}
				luminanceThreshold={0.3}
				luminanceSmoothing={0.9}
			/>
			<BrightnessContrast brightness={0.01} contrast={0.1} />
			{/* <ColorDepth
				bits={24}
				opacity={0.9}
				blendFunction={BlendFunction.ADD}
			/>
			r
			<Depth
				opacity={0.3}
				inverted
				blendFunction={BlendFunction.DARKEN}
			/> */}
			<DepthOfField focalLength={0} />
		</EffectComposer>
	);
}
