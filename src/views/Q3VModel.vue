<script setup>
import { ref } from "vue";
import InputBar from "../components/InputBar.vue"
import TextBox from "../components/TextBox.vue"
const name = ref('gino');
const gender = ref(true);
const selectOption = ref({});
const checkedName = ref([]);
const num = ref(1);
// 可以再父層處理邏輯，不用利用emit ，用單向資料流處理
const updateName = (newName) => {
    console.log(newName)
    name.value = newName;
}


const setName = (str) => {
    name.value = str;
}
</script>
<template>
    <div>
        <!-- 雙向綁定 -->
        <!-- 1. input、seletc、textarea、components、checkbox -->
        <input type="text" v-model="name">
        <button @click="setName('dog')">狗狗</button>
        {{ name }}    
        <h1>1. 一些v-model修飾符號</h1>
        <ul>
            <li>
                <label>v-model.lazy</label>
                <span>會onchange事件，當fouse結束後才會執行</span>
            </li>
            <li>
                <label>v-model.number</label>
                <span>會變數字，但0會被刪除</span>
            </li>
            <li>
                <label>v-model.trim</label>
                <span>前後空格問題</span>
            </li>
        </ul>
        
        <hr>
        <label for="">Jack</label>
        <input type="checkbox" value="Jack" v-model="checkedName">
        <label for="">dog</label>
        <input type="checkbox" value="dog" v-model="checkedName">
        <label for="">cat</label>
        <input type="checkbox" value="cat" v-model="checkedName">
        {{ checkedName }}
        <hr>
        <label>測試true-value</label>
        <input
            type="checkbox"
            v-model="gender"
            :true-value="'男'"
            :false-value="'女'"
        >
        {{ gender }}

        <hr>
        <label>測試 select options</label>
        <select v-model="selectOption">
            <option :value="{ number: 123 }">123</option>
        </select>
        {{ selectOption }}

        <hr>
        <label>component model</label>
        <InputBar v-model="num"/>
        <!-- v-model裡面已經有處理value -->
        {{ num }}

        <hr>
        <!-- // one way data flow 單向資料流 ， 使用情境: 較直覺的專案，讓資料不會emit回來 -->
        <TextBox :name="name" :func="updateName"/>
    </div>
</template>
<style>
</style>