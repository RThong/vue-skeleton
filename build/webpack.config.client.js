const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const HTMLplugin = require('html-webpack-plugin')
const path = require('path')

const isDev = process.env.NODE_ENV === 'development'

const devServer = {
	port: 8080,
  host: '0.0.0.0',
  overlay: {
    errors: true,
  },
  // headers: {
  //   'Access-Control-Allow-Origin': '*'
  // },
  // historyApiFallback: {
  //   index: '/public/index.html'
  // },//history模式手动刷新url会发送请求，出现错误
  hot: true
}

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
			{
				test: /\.sass$/,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'postcss-loader',
            options: {
              sourceMap: true,
            }
					},
					'sass-loader'
				]
			}
		]
	},
	devServer,
	plugins: [
		new VueLoaderPlugin(),
		new HTMLplugin({
	    template: path.join(__dirname, '../index.html')
	  }),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
	]
}

module.exports = config