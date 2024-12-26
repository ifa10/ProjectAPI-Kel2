/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'static.nike.com',
				port: '',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'lh3.googleusercontent.com',
				port: '',
				pathname: '/**',
			},
		],
	},
	// async middleware() {
	// 	return [
	// 		{
	// 			source: '/',
	// 			destination: '/middlewares/auth',
	// 		},
	// 	];
	// },
};

module.exports = nextConfig;
