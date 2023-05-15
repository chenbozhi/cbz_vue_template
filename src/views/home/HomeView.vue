<template>

    <van-nav-bar fixed title="首页"/>

    <div style="margin-top: 50px;">
        <van-grid :column-num="3">
            <van-grid-item>
                <div  @click="goToBillList">账单列表</div>
            </van-grid-item>
            <van-grid-item>
                <div @click="goToAddBill">添加账单</div>
            </van-grid-item>
            <van-grid-item>
                <div @click="goToAddBillTag">添加账单标签</div>
            </van-grid-item>
            <van-grid-item>
                <div @click="goToBillTagList">账单标签列表</div>
            </van-grid-item>
        </van-grid>
    </div>

    <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item icon="search">标签</van-tabbar-item>
        <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
        <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>

</template>

<script setup>

import {ref} from "vue";

import {useRouter} from "vue-router";

const router = useRouter()

const active = ref(0)

const goToBillList = () => {
    router.push({
        name: 'billList',
        params: {}
    })
}

const goToAddBill = () => {
    router.push({
        name: 'addBill',
        params: {}
    })
}

const goToAddBillTag = () => {
    router.push({
        name: 'addBillTag',
        params: {}
    })
}

const goToBillTagList = () => {
    router.push({
        name: 'billTagList',
        params: {}
    })
}

</script>

<style scoped>
</style>
