const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    mode: 'none',
    entry: path.join(__dirname, './public/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [
        // make sure to include the plugin for the magic
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            // //{  test  正则规则  ，use  依赖}
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            {test:/\.(jpg|png|gif)$/,use:'url-loader?limit=7000&name=[hash:8][name].[ext]'},
            // {test:/\.(jpg|png|gif)$/,use:'file-loader?limit=10000&name=[hash:8][name].[ext]'},
            {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},
            { test: /\.vue$/, use: 'vue-loader' }
        ]
    }
}