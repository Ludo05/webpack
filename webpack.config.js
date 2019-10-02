const HTMLWebpackPlugin = require('html-webpack-plugin');

/*
* WEBPACK BUNDLES ALL YOU FILES INTO A DIST WHICH CAN THEN BE READ BY BROWSERS.
* */


module.exports = {
    module: {
        rules: [
            {
              test: /\.(jpe?g|png|gif|svg)$/i,
              use: [
                  'file-loader'
              ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                //Tests for all html files
                test: /\.html$/,
                use: [
                    {
                        //Use this loader against the html files.
                        loader: "html-loader",
                        options: { minimize: true}
                    }
                ]
            },
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            //Template define the file we want to bundle
            template: "./src/index.html",
            //The name of the file in the dist folder
            filename: './index.html'
        })
    ]
};
