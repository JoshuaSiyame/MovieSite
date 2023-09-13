// import modules/packages
import HtmlWebpackPlugin from "html-webpack-plugin";
import { Configuration as WebpackConfig, HotModuleReplacementPlugin } from "webpack";
import { ServerConfiguration as WebpackDevServerConfig } from "webpack-dev-server";

type Configuration = WebpackConfig & {
    devServer?: WebpackDevServerConfig
};

const config: Configuration = {
    entry: {
        app: "./src/index.tsx"
    },
    output: {
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)?x$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript",
                        ]
                    }
                }
            },
            {
                test: /\.css$/i,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                exclude: /node_modules/,
                use: "file-loader"
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        }),
        new HotModuleReplacementPlugin()
    ]
}

export default config;