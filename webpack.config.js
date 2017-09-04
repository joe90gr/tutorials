// var webpack = require('webpack');

module.exports = {
	entry: './src/site/createClient.js',
	output: {
		path: __dirname + '/public/js',
		filename: 'bundle.js',
		publicPath: './js/bundles/'
	},
	module: {
		rules: [
			{
				test: /.jsx?$/,
				exclude: [ /node_modules/ ],
				use: [ { loader: 'babel-loader' } ]
			}
		]
	},
	devtool: 'source-map',
	resolve: { extensions: [ '.js', '.jsx' ] },
	plugins: [
		// new webpack.DefinePlugin({
		// 	'process.env': {
		// 		NODE_ENV: JSON.stringify('production')
		// 	}
		// }),
		// new webpack.optimize.UglifyJsPlugin({ minimize: true })
	]
};
