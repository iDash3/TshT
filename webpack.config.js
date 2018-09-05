const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: {
    index: path.resolve(__dirname, 'src/js/index.js'),
  	project_detail: path.resolve(__dirname, 'src/js/project_detail.js'),
    project: path.resolve(__dirname, 'src/js/project.js')
  },
  output: {
  	path: path.resolve(__dirname, 'dist'),
  	filename: '[name].js'
  },
  module: {
  	rules: [
  		{
  			test: /\.css$/,
  			use: 
  			// ['style-loader', 'css-loader'],
				[
					MiniCssExtractPlugin.loader,
					'css-loader'
				]
			},
			{
  			test: /\.js$/,
  			exclude: /(node_modules)/,
  			use: {
  				loader: 'babel-loader',
  				options: {
  					presets: ['@babel/preset-env']
  				}
  			},
			},
  	]
  },
  plugins: [
  	new MiniCssExtractPlugin({
  		filename: 'css/[name].css'
  	})
  ]
}