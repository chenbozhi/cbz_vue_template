import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// 引入vant自动引入组件
import Components from 'unplugin-vue-components/vite';
import {VantResolver} from 'unplugin-vue-components/resolvers';

// 引入element-plus自动引入组件
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'


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
})
