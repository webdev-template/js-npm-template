import babel from "rollup-plugin-babel"

// 压缩
import {
    terser
} from "rollup-plugin-terser"

// 输出文件夹清除
import del from 'rollup-plugin-delete'
const path = require('path')

const resolve = function (filePath) {
    return path.join(__dirname, filePath)
}
export default {
    input: resolve('/src/index.js'), // 入口文件
    output: [{ // 出口文件
        file: resolve('dist/index.min.js'),
        format: 'umd',
        name: 'npm-lib',
    }],
    plugins: [
        del({
            targets: ["dist"]
        }),
        babel({
            exclude: 'node_modules/**',
            runtimeHelpers: true
        }), terser()
    ],
    external: []
}
