const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, '..', './src/index.js'),
	module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        //use: ['babel-loader', 'eslint-loader'],
        use: ['babel-loader']
      },{
				test: /\.(ttf|eot|svg|woff(2)?)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				use: {
					loader: "file-loader",
					options: {
            name: "[name].[ext]",
            outputPath: "fonts/",
            publicPath: "../fonts/"
					}
				}
			},{
				test: /\.(svg|png|jpg|gif|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				use: {
					loader: "file-loader",
					options: {
						name: "[name].[ext]",
						outputPath: "images/"
					}
				}
			},{
				test: /\.scss$/,
				use: [{ loader: MiniCssExtractPlugin.loader, options: {publicPath: '/'} }, "css-loader", "sass-loader"]
			}
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
		new HtmlWebpackPlugin({
			title: 'DIGITAL FrontEnd - ALTRAN 2021',
      template: path.resolve(__dirname, '..', './public/index.html'),
			meta: {
				viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
			}
    }),
		new MiniCssExtractPlugin({
			filename: "css/[name].[chunkhash].css"
		}),
		new CleanWebpackPlugin()
  ],
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'js/[name].[chunkhash].js',
		publicPath: '/'
  },
};
