<script setup>
import { ref } from "vue";
import { computed } from "@vue/reactivity"
import VImg from '../components/VImg.vue' //.跟目錄
import InputBar from '../components/InputBar.vue' //.跟目錄
import HelloWorld from "../components/HelloWorld.vue";

const resInt = ref(0);
const AddInt = (res) => {
    resInt.value = res;
}

const isChange = ref(0)
const componets = computed(() => {
    switch (isChange.value) {
        case 0:
            return VImg // no 字串 Vue2可塞字串
        case 1:
            return VImg
        case 2:
            return ""
    }
}) 
// 切換組件
const changeComponent = (index) => {
    isChange.value = index;
}
</script>
<template>
    <div>
        <button @click="changeComponent(0)">components 1</button>
        <button @click="changeComponent(1)">components 2</button>
        <button @click="changeComponent(2)">components 3</button>
        <!-- 如何有效動態切換控制組件，別再用v-if啦 -->
        <component :is='componets'></component>
        <VImg 
            alt="狗屎"
            @AddInt="AddInt"
        />
    </div>

    <InputBar />
</template>
<style>
</style>