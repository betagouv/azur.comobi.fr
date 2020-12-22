// You can't use import statements here
let webpack = require('webpack')
let devMode = process.env.NODE_ENV === 'development'

const instance = process.env.INSTANCE !== undefined ? process.env.INSTANCE : 'valberg' 
console.log(instance)

module.exports = {
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader'
					}
				]
			},
			{
				test: /\.(jpe?g|png|svg)$/,
				use: {
					loader: 'file-loader'
				}
			},
			{
				test: /\.yaml$/,
				use: 'js-yaml-loader'
			}
		]
	},
	mode: devMode ? 'development' : 'production',
	plugins: [
		devMode && new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
			INSTANCE: JSON.stringify(instance)
		})
	].filter(Boolean)
}
