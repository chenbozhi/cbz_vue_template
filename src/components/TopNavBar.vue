<!--
  顶部导航栏，通用返回
-->
<template>
    <van-nav-bar
                class="s-top-nav-bar"
                :left-arrow="back"
                 :left-text="back ? '返回' : ''"
                 :title="title"
                 fixed
                 @click-left="onClickLeft"/>

    <div style="height: 46px;"></div>
</template>

<script setup>

const props = defineProps({
    // 是否需要左侧返回按钮，默认是需要的,有默认返回行为
    back: {
        default: true,
        required: false,
    },
    // 标题
    title: {
        default: '',
        required: false,
    },
    // 是否需要自定义返回的行为
    action: {
        default: false,
        required: false,
    }
})

const emit = defineEmits(['action'])

const onClickLeft = () => {
    if (!props.back) return
    if (props.action) {
        emit('action')
    } else {
        history.go(-1)
    }
}
</script>


<style scoped>

</style>
