import {
	Bloom,
	EffectComposer,
	BrightnessContrast,
	Autofocus,
	N8AO,
} from "@react-three/postprocessing";
import { useControls } from "leva";

export default function Effects() {
	const {
		brightness,
		resScale,
		contrast,
		autoEnabled,
		aoEnabled,
		bokehScale,
		...aoProps
	} = useControls("Effects", {
		autoEnabled: true,
		aoEnabled: false,
		brightness: { value: 0.05, min: 0, max: 1, step: 0.01 },

		contrast: { value: 0.05, min: 0, max: 1, step: 0.01 },
		bokehScale: { value: 6, min: 0, max: 50, step: 0.1 },
		resScale: { value: 0.4, min: 0, max: 1, step: 0.01 },
		aoRadius: { value: 0.2, min: 0, max: 10, step: 0.1 },
		denoiseRadius: { value: 0.2, min: 0, max: 10, step: 0.1 },
		intensity: { value: 0.2, min: 0, max: 20, step: 0.1 },
		// quality: "medium",
	});

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
			{autoEnabled && (
				<Autofocus
					mouse
					focusRange={0.0125}
					resolutionScale={resScale}
					bokehScale={bokehScale}
				/>
			)}
			<BrightnessContrast brightness={brightness} contrast={contrast} />
			{aoEnabled && (
				<N8AO
					// aoRadius={0.2}
					// intensity={10}
					// denoiseRadius={1}
					// quality="performance"

					{...aoProps}
				/>
			)}
		</EffectComposer>
	);
}
