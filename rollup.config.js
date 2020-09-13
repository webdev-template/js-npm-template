const path = require('path')

const resolve = function (filePath) {
    return path.join(__dirname, '..', filePath)
}
export default {
    input: resolve('src/main.js'), // 入口文件
    output: [{ // 出口文件
        file: resolve('lib/index.js'),
        format: 'umd',
        name: 'npm-lib',
        plugins:[babel()]
    }, {
        file: resolve('lib/index.min.js'),
        name: 'npm-lib',
        plugins: [terser(),babel()]
    }],
    external: []
}
