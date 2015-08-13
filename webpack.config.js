var path = require("path");
var webpack = require("webpack");

module.exports = {
	context: path.join(__dirname),
	devtool: "source-map",
	entry: {
        wfu: "./index.js"
    },
	output: {
		path: path.join(__dirname),
		filename: "[name].js",
        publicPath: "/assets/"
	},
    module: {
        loaders: [{
            test: /\.js?$/,
            loader: "babel",
            include: path.join(__dirname)
        }]
    }
};