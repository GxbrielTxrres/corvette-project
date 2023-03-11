import gsap from "gsap";

import { Color } from "three";

export function ConvertibleDown(
	roof,
	roofInterior,
	rightDoorGlass,
	leftDoorGlass,
) {
	gsap.to(roof.current.position, {
		y: 0,
		duration: 2,
		ease: "easeIn",
	});
	gsap.to(roof.current.rotation, {
		x: 0,
		duration: 3,
		delay: 0.5,
		ease: "easeIn",
	});
	gsap.to(roofInterior.current.position, {
		y: 0,
		duration: 2,
		ease: "easeIn",
	});
	gsap.to(roofInterior.current.rotation, {
		x: 0,
		duration: 3,
		delay: 0.5,
		ease: "easeIn",
	});
	gsap.to(rightDoorGlass.current.position, {
		z: 0,
		duration: 2,
		ease: "easeIn",
	});
	gsap.to(leftDoorGlass.current.position, {
		z: 0,
		duration: 2,
		ease: "easeIn",
	});
}

export function ConvertibleUp(
	roof,
	roofInterior,
	rightDoorGlass,
	leftDoorGlass,
) {
	gsap.to(roof.current.position, {
		y: -0.42,
		duration: 2,
		delay: 0.5,
		ease: "easeIn",
	});
	gsap.to(roof.current.rotation, {
		x: Math.PI / 2,
		duration: 3,
		ease: "easeIn",
	});
	gsap.to(roofInterior.current.position, {
		y: -0.42,
		duration: 2,
		delay: 0.5,

		ease: "easeIn",
	});
	gsap.to(roofInterior.current.rotation, {
		x: Math.PI / 2,
		duration: 3,
		ease: "easeIn",
	});
	gsap.to(rightDoorGlass.current.position, {
		z: -0.5,
		duration: 2,
		ease: "easeIn",
	});
	gsap.to(leftDoorGlass.current.position, {
		z: -0.5,
		duration: 2,
		ease: "easeIn",
	});
}

export function OpenCar(frunk, rightDoor, leftDoor, midTrunk) {
	gsap.to(frunk.current.rotation, {
		x: -Math.PI / 4,
		duration: 2,
		ease: "easeIn",
	});
	gsap.to(rightDoor.current.rotation, {
		z: Math.PI / 2,
		duration: 3,
		ease: "easeIn",
	});

	gsap.to(leftDoor.current.rotation, {
		z: -Math.PI / 2,
		duration: 3,
		ease: "easeIn",
	});
	gsap.to(midTrunk.current.rotation, {
		x: -Math.PI / 1.5,
		duration: 3,
		ease: "easeIn",
	});
}

export function CloseCar(frunk, rightDoor, leftDoor, midTrunk) {
	gsap.to(frunk.current.rotation, {
		x: -Math.PI / 2,
		duration: 2,
		ease: "easeIn",
	});

	gsap.to(rightDoor.current.rotation, {
		z: 0,
		duration: 3,
		ease: "easeIn",
	});
	gsap.to(leftDoor.current.rotation, {
		z: 0,
		duration: 3,
		ease: "easeIn",
	});
	gsap.to(midTrunk.current.rotation, {
		x: -Math.PI / 2,
		duration: 3,
		ease: "easeIn",
	});
}

export function ColorFade(ref, color) {
	//grab the color, and convert it to Linear
	const fadeColor = new Color(
		color.r,
		color.g,
		color.b,
	).convertSRGBToLinear();

	//animate the color change
	gsap.to(ref.current.material.color, {
		r: fadeColor.r,
		g: fadeColor.g,
		b: fadeColor.b,
		duration: 0.75,
		ease: "EaseIn",
	});
}

export function MakeBloomLights(refs) {
	//change each materials toneMapping and Emissive in order to create a bloom effect
	refs.forEach((ref, index) => {
		//map the index to a object
		ref.current.i = index;

		ref.current.material.toneMapped = false;

		if (ref.current.i < 3) {
			ref.current.material.emissive = new Color(5, 5, 5);
			ref.current.material.emissiveIntensity = 2;
		}
	});

	refs[3].current.material.emissive = new Color(100, 0, 0);
	refs[4].current.material.emissive = new Color(8, 8, 8);
	refs[5].current.material.emissive = new Color(0.02, 0.02, 0.02);
}
