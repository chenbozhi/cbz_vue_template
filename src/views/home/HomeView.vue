<template>

    <van-nav-bar fixed title="首页"/>

    <div style="height: 100vh;display: flex;flex-direction: column;background-color: rebeccapurple;">
        <div style="height: 60px;width: 100%;background-color: antiquewhite;">

        </div>
        <div style="flex: 1;">
            <van-pull-refresh v-model="refreshing" @refresh="onRefresh" style="">
                <van-list
                    v-model:loading="loading"
                    :finished="finished"
                    finished-text="没有更多了"
                    @load="onLoad"
                >
                    <van-cell v-for="item in list" :key="item" :title="item"/>
                </van-list>
            </van-pull-refresh>
        </div>
        <div style="height: 60px;width: 100%;background-color: chartreuse;"></div>
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

const active = ref(0)

const list = ref([]);
const loading = ref(false);
const finished = ref(false);
const refreshing = ref(false);

const onLoad = () => {
    setTimeout(() => {
        if (refreshing.value) {
            list.value = [];
            refreshing.value = false;
        }

        for (let i = 0; i < 10; i++) {
            list.value.push(list.value.length + 1);
        }
        loading.value = false;

        if (list.value.length >= 40) {
            finished.value = true;
        }
    }, 1000);
};

const onRefresh = () => {
    // 清空列表数据
    finished.value = false;

    // 重新加载数据
    // 将 loading 设置为 true，表示处于加载状态
    loading.value = true;
    onLoad();
};

</script>

<style scoped>

</style>
