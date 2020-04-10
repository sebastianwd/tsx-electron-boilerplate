const rules = require('./webpack.rules')
const plugins = require('./webpack.plugins')
const path = require('path')

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
})

module.exports = {
  module: {
    rules,
  },
  plugins: plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
    alias: {
      '@views': path.resolve(__dirname, './src/renderer/views'),
      '@layouts': path.resolve(__dirname, './src/renderer/layouts'),
      '@components': path.resolve(__dirname, './src/renderer/components'),
      '@routes': path.resolve(__dirname, './src/renderer/routes.js'),
    },
  },
  /* output: {
    chunkFilename: 'main_window/[name].chunk.js',
  },*/
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: {
          chunks: 'async',
          minChunks: 2,
        },
      },
    },
  },
}
