import { Bloom, EffectComposer } from "@react-three/postprocessing";
export default function Effects() {
	return (
		<EffectComposer multisampling={3} autoClear disableNormalPass>
			<Bloom
				radius={0.5}
				mipmapBlur
				levels={3}
				intensity={1}
				luminanceThreshold={0.3}
				luminanceSmoothing={0.9}
			/>
		</EffectComposer>
	);
}
