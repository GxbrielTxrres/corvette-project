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
};

module.exports = nextConfig;
