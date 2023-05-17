
<template>
    <el-config-provider :locale="zhCn">
        <el-button>测试</el-button>
    </el-config-provider>
</template>

<script setup>
import { ElConfigProvider } from 'element-plus'

import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

</script>

<style scoped>

</style>
