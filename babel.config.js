export default {
	exclude: /node_modules\/(?!(@springernature\/))/, // Exclude node_modules except ones from @springernature
	presets: [
		['@babel/preset-env'],
	],
	plugins: [],
	env: {
		test: {
			presets: [
				['@babel/preset-env', {
					targets: {
						node: 'current',
					},
				}],
			],
		},
	},
};
