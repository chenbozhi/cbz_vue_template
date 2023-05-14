<template>
    <van-nav-bar fixed left-arrow
                 left-text="返回"
                 title="添加账单"
                 @click-left="onClickLeft"/>

    <div style="height: 50px;"></div>

    <van-grid>
        <van-grid-item v-for="value in 8" :key="value" icon="todo-list" text="文字" />
    </van-grid>

    <van-field v-model="value" label="文本" placeholder="请输入备注" @focus="show = true"/>

    <van-number-keyboard
            :show="show"
            theme="custom"
            extra-key="."
            close-button-text="完成"
            @blur="show = false"
            @input="onInput"
            @delete="onDelete"
    />
</template>

<script setup>
import {ref} from "vue";
import {showToast} from "vant";

const onClickLeft = () => {
    history.go(-1)
}

const value = ref('')

const show = ref(true);
const onInput = (value) => showToast(value);
const onDelete = () => showToast('删除');
</script>

<style scoped>

</style>
