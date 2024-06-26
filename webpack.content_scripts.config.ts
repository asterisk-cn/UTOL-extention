const path = require("path");
module.exports = {
    mode: "production",
    entry: "./src/content_scripts/index.ts",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "content_script.js",
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: {
                    loader: "ts-loader",
                    options: {
                        transpileOnly: true,
                        configFile: "tsconfig.content_scripts.json",
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
};
