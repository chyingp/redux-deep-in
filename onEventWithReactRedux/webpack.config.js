module.exports = {
	entry: './public/entry.jsx',
	output: {
		path: __dirname,
		filename: 'public/bundle.js'
	},
	module: {
		loaders: [
			{
			  test: /\.jsx$/,
			  exclude: /node_modules/,
			  loader: 'babel', // 'babel-loader' is also a valid name to reference
			  query: {
			    presets: ['react', 'es2015']
			  }
			},
			{
			  test: /\.js$/,
			  exclude: /node_modules/,
			  loader: 'babel', // 'babel-loader' is also a valid name to reference
			  query: {
			    presets: ['es2015']
			  }
			}
		]
	}	
};