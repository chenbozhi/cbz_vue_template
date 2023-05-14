import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// 引入vant自动引入组件
import Components from 'unplugin-vue-components/vite';
import {VantResolver} from 'unplugin-vue-components/resolvers';

// 引入element-plus自动引入组件
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// 路径
import path from "path";  //这个path用到了上面安装的@types/node

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        Components({
            resolvers: [
                VantResolver(),
                ElementPlusResolver()
            ],
        }),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
    ],
    //这里进行配置别名
    resolve: {
        alias: {
            // '@': path.resolve(__dirname, './src') // @代替src  path.resolve(__dirname, './src')
            '@': path.resolve(__dirname, 'src')
        }
    },
    // 代理配置
    server: {
        port: 8081,
        host: '0.0.0.0',  // 为了设置局域网可以访问
        https: false,
        proxy: {
            '/api': { // 配置需要代理的路径 --> 这里的意思是代理http://localhost:80/api/后的所有路由
                target: 'http://localhost:8093', // 目标地址 --> 服务器地址
                changeOrigin: true, // 允许跨域
                ws: true,  // 允许websocket代理
                // 重写路径 --> 作用与vue配置pathRewrite作用相同
                rewrite: (path) => path.replace(/^\/api/, "")
            }
        },
        hmr: {
            protocol: 'ws',
            host: 'localhost',
        },
    },
    esbuild: {
        // 禁用ESBuild来处理JavaScript
        // 从而使我们可以使用Babel
        exclude: /node_modules/,
        // 使用Babel来处理JavaScript
        loader: 'babel',
        // Babel配置文件的路径
        // 如果您将其放在项目根目录中，
        // 这里应该是babel.config.js
        options: {
            configFile: './babel.config.js'
        }
    }
})
