<!--
  添加账单标签
-->
<template>
  <TopNavBar title="添加账单标签" />

    <van-cell-group inset>
        <van-field v-model="tagName" label="标签名称" placeholder="请输入标签名称" size="large"/>
        <van-field v-model="tagSort" label="标签排序" type="digit" placeholder="请输入标签序号" size="large"/>
    </van-cell-group>

    <van-button type="primary" block style="bottom: 0;position: fixed;">添加</van-button>
</template>

<script setup>

import TopNavBar from "@/components/TopNavBar.vue";
import {ref} from "vue";

const tagName = ref('')
const tagSort = ref(0)
</script>

<style scoped>

</style>
