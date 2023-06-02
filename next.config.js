/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images-visualizer.gm.com",
			},
		],
	},
	transpilePackages: ["@react-three/postprocessing"],
};

module.exports = nextConfig;
