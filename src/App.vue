
<template>
<!--    <el-config-provider :locale="zhCn">
        <router-view/>
    </el-config-provider>-->

    <div class="s-app-container">
        <router-view/>
    </div>
</template>

<script setup>

import { ElConfigProvider } from 'element-plus'

import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

// 禁用双指放大
document.documentElement.addEventListener('touchstart', function (event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, {
    passive: false

});
// 禁用双击放大
let lastTouchEnd = 0;
document.documentElement.addEventListener('touchend', function (event) {
    let now = Date.now();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, {
    passive: false
})

</script>

<style scoped>

.s-app-container {
    position: absolute;
    width: 100%;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch; /* 解决ios滑动不流畅问题 */
}
</style>
