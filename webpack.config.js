const path = require('path')

module.exports = {
	entry: './in.js',
	output: {
		filename: 'out.js',
		path: __dirname,
	},
	module: {
		rules: [
			{
				test: /\.png/,
				use: [
					{
						//loader: 'url-loader' // worked
						type: 'asset/resource', // not work
					},
				]
			}
		]
	}
}
