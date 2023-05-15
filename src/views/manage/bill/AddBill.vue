<template>


    <TopNavBar title="添加账单"/>

    <div class="s-card-container">
        <el-scrollbar :height="height" always>
            <van-grid>
                <van-grid-item v-for="tag in billTagList" :key="tag.id" @click="tag.clicked = !tag.clicked">
                    <template #default>
                        <div :class="{'s-card-item': true, 's-card-clicked': tag.clicked}">
                            <div>
                                <van-icon :name="tag.icon"/>
                            </div>
                            <div>{{ tag.name }}</div>
                        </div>
                    </template>
                </van-grid-item>
            </van-grid>
        </el-scrollbar>
    </div>

    <van-field ref="input"
               v-model="value"
               class="s-input"
               label="备注"
               placeholder="请输入备注"
               @blur="show = true" @focus="show = true">
        <template #extra>
            <span class="s-money">{{ money }}</span>
        </template>
    </van-field>


    <van-number-keyboard
            v-model="money"
            :show="show"
            close-button-text="完成"
            extra-key="."
            theme="custom"
    />

</template>

<script setup>
import {computed, onMounted, ref, watch} from "vue";
import {showToast} from "vant";
import {billTags} from './billData.js'
import TopNavBar from "@/components/TopNavBar.vue";

const onClickLeft = () => {
    history.go(-1)
}

const value = ref('')

const money = ref('0')

const inputNumberOffsetTop = ref(0)

const input = ref("input")

const show = ref(true);
/*const onInput = (value) => {
    money.value = value
}*/
const onDelete = () => {

}

onMounted(() => {
    inputNumberOffsetTop.value = document.getElementsByClassName("van-number-keyboard")[0].offsetTop
    console.log('offsetTop:', inputNumberOffsetTop.value)
    console.log('document.body.clientHeight:', window.screen.availHeight)
    height.value = inputNumberOffsetTop.value - 44 - 50
})

const inputStyle = computed(() => {
    return {
        top: show.value ? (inputNumberOffsetTop.value - 94) + 'px' : (inputNumberOffsetTop.value + 244 - 44 - 50) + 'px',
    }
})

const height = ref(350)

const billTagList = ref(billTags)

watch(show, (value) => {
})

</script>

<style scoped>

:deep(.van-grid-item__content) {
    padding: 0;
}

.s-card-item {
    height: 70px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
    padding-top: 15px;
}

.s-card-clicked {
    background-color: #2DB0FE;
    color: white;
}

.s-money {
    color: #F6A125;
    font-weight: bold;
    font-size: 20px;
}
</style>
