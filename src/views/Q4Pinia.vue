<script setup>
import { NButton, NSpace, NCollapseItem, NCollapse } from "naive-ui"
import { ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useCounterStore } from "../stores/counter.js";
import axios from "axios";
// pinia資料
const store = useCounterStore();
// 運用解構方式，就不用store.XXX
const { fetchApiData, addCount } = store; // fun一般解構就好
const { counter, doubleCount, cardList } = storeToRefs(store); // 定義好的資料利用storeToRefs輸出解構，因為解構出來就不是Pxx物件會直接取value
// 背離原本ref()
// const store = useCounterStore();
const clickAdd = () => {
    addCount();
};
 
// 監測pinai內資料
// store.$subscribe((mutations, state) => {

// })
</script>
<template>
    <div>
        數字:{{ counter }}
        <button @click="clickAdd">按鈕+</button>
        <!-- <button @click="fetchApiData">Fetch API Btn</button> -->
        <!-- {{ store.$state.counter }} option API -->
        <!-- cardList:{{ cardList }} -->

        <NSpace>
            <NButton>Default</NButton>
            <NButton type="tertiary"> Tertiary </NButton>
            <NButton type="primary"> Primary </NButton>
            <NButton type="info" disabled> Info </NButton>
            <NButton type="success"> Success </NButton>
            <NButton type="warning"> Warning </NButton>
            <NButton type="error"> Error </NButton>
        </NSpace>
        <NButton disabled>
            不许点
        </NButton>

        <n-collapse>
            <n-collapse-item title="青铜" name="1">
            <div>可以</div>
            </n-collapse-item>
            <n-collapse-item title="白银" name="2">
            <div>很好</div>
            </n-collapse-item>
            <n-collapse-item title="黄金" name="3">
            <div>真棒</div>
            </n-collapse-item>
        </n-collapse>
    </div>
</template>
<style>
</style>