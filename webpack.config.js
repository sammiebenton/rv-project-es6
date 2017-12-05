var path = require('path');

module.exports = {
    entry: './src/index.js',
	
    output: {
        path: path.join(__dirname, "dist/assets/js/"),
        filename: 'index.bundle-2.js'
    },
	
		module: {
			loaders: [
				{
					test: /\.js$/,
					exclude: /node_modules|bower_components/,
					loader: 'babel-loader',
					query: {
						presets: ['env']
					}
				},
//				{
//					test: /\.scss$/,
//					loader: 'style-loader!css-loader!sass-loader'
//				},
//				{
//					test: /\.png$/,
//					loader: "url-loader",
//					query: { mimetype: "image/png" }
//				}
			]
		}
};