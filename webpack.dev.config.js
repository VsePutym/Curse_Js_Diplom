/* eslint-disable strict */
/* eslint-disable no-undef */
const path = require('path'); //? плагин


module.exports = {
    entry: './src/index.js', //? точка входа
    output: { //? точка выхода
        publicPath: '/',
        filename: 'dev-bundle.js', //? собираем бандел с именем бандел
        path: path.resolve(__dirname, './dist'), //? путь к папке, то куда мы собираем проект
    },
    mode: 'development',
    devServer: {
        open: true,
        port: 8080,
        hot: true,
        writeToDisk: true,
    },
    module: {
        rules: [ //? набор правил
            {
                test: /\.js$/, //? все JS файлы
                use: { //? что мы будем использовать
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
