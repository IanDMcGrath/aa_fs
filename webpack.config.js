const path = require('path');

module.exports = {
	context: __dirname,
	entry: './frontend/artcoag.jsx',
	output: {
		path: path.resolve(__dirname, "app", "assets", "javascripts"),
		filename: 'bundle.js'
	},
	devtool: 'source-map',
	resolve: {
		extensions: ['.js', '.jsx', '*']
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/env', '@babel/react']
					}
				}
			}, {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: 'assets/images/user_icons',
            },
          },
        ],
      }
		]
	}
}