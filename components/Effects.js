import { Bloom, EffectComposer, SMAA, SSR } from "@react-three/postprocessing";
import { useControls } from "leva";
export default function Effects() {
	return (
		<EffectComposer multisampling={4}>
			<Bloom
				radius={0.5}
				mipmapBlur
				intensity={1}
				luminanceThreshold={0.3}
				luminanceSmoothing={0.9}
			/>
		</EffectComposer>
	);
}
