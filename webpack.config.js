const WebpackBar = require( 'webpackbar' );

module.exports = [

	// Build the settings js..
	{
		entry: [ './src/insert-special-characters.js' ],
		output: {
			filename: 'insert-special-characters.js',
			path: __dirname + '/dist/',
		},
		module: {
			rules: [
				{
					test: /\.js$/,

					use: [
						{
							loader: 'babel-loader',
							query: {
								presets: [ [ '@babel/env', {
									'useBuiltIns': 'entry',
								} ], '@babel/preset-react' ],
							}
						}
					]
				},
				{
					test: /\.css$/,
					use: [ 'style-loader', 'css-loader' ],
				},
			]
		},
		plugins: [ new WebpackBar(
			{
				name: 'Plugin Entry Points',
				color: '#B6CD58',
			}
		) ],
	},

];
