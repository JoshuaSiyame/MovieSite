// import modules/packages
import path from "path";
import config from "./webpack.common";
import { merge } from "webpack-merge";

// development configuration
const prodConfig = merge(config, {
    mode: "production",
    devtool: "source-map",
    
});

export default prodConfig;