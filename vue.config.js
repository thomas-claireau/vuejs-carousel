module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? '/vuejs-carousel/dist/' : '/',
	chainWebpack: (config) => {
		config.module.rules.delete('svg');
	},
	configureWebpack: {
		module: {
			rules: [
				{
					test: /\.svg$/,
					loader: 'vue-svg-loader',
				},
			],
		},
	},
};
