/* eslint-disable strict */
/* eslint-disable no-undef */
const path = require('path');

module.exports = {
    entry: './src/index.js', //? точка входа
    output: { //? точка выхода
        filename: 'production-bundle.js', //? собираем бандел с именем бандел
        path: path.resolve(__dirname, './dist') //? путь к папке
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env'] //? сюда через запятую прописываем плагины
                    },
                },
                exclude: /node_modules/,
            }
        ]
    }
};
