const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const HTMLplugin = require('html-webpack-plugin')
const path = require('path')

const isDev = process.env.NODE_ENV === 'development'
console.log(process.env.NODE_ENV)
let config

config = {
	mode: 'development',
	entry: path.join(__dirname, '../src/index.js'),
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, '../dist'),
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			// {
			// 	test: /\.css$/,
			// 	use: [
			// 	'style-loader',
			// 	'css-loader'
			// 	] 
			// }
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			}
		]
	},
	plugins: [
		new VueLoaderPlugin(),
		new HTMLplugin({
	    template: path.join(__dirname, '../index.html')
	  })
	// 	new webpack.DefinePlugin({
 //  		'process.env': {
 //  			NODE_ENV: isDev ? '"development"': '"production"'
 //  		}
 //  	})
	]
}

module.exports = config