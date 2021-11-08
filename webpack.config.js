const path = require('path')
const Dotenv = require('dotenv-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const isProduction = process.env.NODE_ENV === 'production'
const stylesHandler = isProduction
  ? MiniCssExtractPlugin.loader
  : 'style-loader'

const config = {
  target: 'web',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    sourceMapFilename: './dist/[name].js.map',
    publicPath: 'auto',
  },
  devServer: {
    open: false,
    host: 'localhost',
    port: 8080,
    static: {
      directory: path.resolve(__dirname, './asset/'),
      publicPath: '/',
    },
    devMiddleware: {
      index: true,
      publicPath: '/',
      serverSideRender: true,
      writeToDisk: true,
    },
  },
  optimization: {
    minimizer: [],
  },
  plugins: [
    new HtmlWebpackPlugin({
      
      template: 'index.html',
      minify: isProduction === true,
    }),
    new CleanWebpackPlugin(),
    new Dotenv(),
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/i,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },
    ],
  },
}

module.exports = () => {
  if (isProduction) {
    config.mode = 'production'

    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: 'styles.css',
      })
    )

    config.optimization.minimize = true
    config.optimization.minimizer.push('...', new CssMinimizerPlugin())
  } else {
    ;(config.devtool = 'source-map'), (config.mode = 'development')
  }

  return config
}
