module.exports = {
    mode: 'development',           //実行モード
    entry: './src/index.js',       //エントリーポイント
    //出力先のファイル名
    output: {
        path: `${__dirname}/dist`, //出力先のフォルダ
        filename: 'main.js'        //ファイル名
    },
};