// import modules/packages
import path from "path";
import config from "./webpack.common";
import { merge } from "webpack-merge";

// development configuration
const devConfig = merge(config, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        static: path.resolve(__dirname, "dist"),
        historyApiFallback: true,
        port: 4000,
        // hot: true
        open: true
    }
});

export default devConfig;