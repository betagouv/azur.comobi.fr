// You can't use import statements here
const path = require("path");
let webpack = require('webpack')
let devMode = process.env.NODE_ENV === 'development'
let envFile = devMode ? '.env.development' : '.env'
const dotenv = require('dotenv').config( {
  path: path.join(__dirname, envFile)
} );

console.log(dotenv.parsed.INSTANCE);
console.log(dotenv.parsed.SERVER_URL);

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
			INSTANCE : JSON.stringify(dotenv.parsed.INSTANCE),
			SERVER_URL : JSON.stringify(dotenv.parsed.SERVER_URL)
		})
	].filter(Boolean)
}
