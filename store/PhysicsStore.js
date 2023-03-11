import { create } from "zustand";

export const useDonutStore = create((set) => ({
	open: false,
	setOpen: () => {
		set((state) => ({
			open: !state.open,
		}));
	},

	openRoof: false,
	setRoofOpen: () => {
		set((state) => ({ openRoof: !state.openRoof }));
	},

	viewInside: false,
	setViewInside: () => {
		set((state) => ({ viewInside: !state.viewInside }));
	},

	customize: false,
	setCustomize: () => {
		set((state) => ({ customize: !state.customize }));
	},

	color: { r: 1, g: 0, b: 0 },
}));
