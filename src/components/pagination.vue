<!-- 分頁組件 -->
<script setup>
    import { ref } from 'vue'

    defineProps({
        page: Number,
    })
    const emit = defineEmits(['pageHandle'])
    // 【變數】
    const childPage = ref(1);
    const setPageNumber = (page) => {
        childPage.value = page;
    };
    // 【方法】
    // emit 出去點選頁數
    const emitPageHandle = (pageNumber) => {
        setPageNumber(pageNumber)
        emit("pageHandle", childPage.value)
    };
</script>

<template>
    <div class="font-sans flex justify-center space-x-1 select-none">
        <a @click="setPageNumber(childPage - 1)" class="flex items-center px-4 py-2 text-gray-500 bg-gray-300 rounded-md cursor-pointer" v-if="page > 1 && childPage != 1">
            上一頁
        </a>
        <a 
            class="px-4 py-2 rounded-md hover:bg-teal-400 hover:text-white cursor-pointer"
            :class="pageNumber == childPage ? 'bg-teal-400 text-white' : 'text-gray-700 bg-gray-200'"
            @click.prevent="emitPageHandle(pageNumber)"
            style="transition: all 0.2s ease;" 
            v-for="(pageNumber, index) in page" :key="index"
        >
            {{ pageNumber }}
        </a>
        <a @click="setPageNumber(childPage + 1)" class="px-4 py-2 font-bold text-gray-500 bg-gray-300 rounded-md hover:bg-teal-400 hover:text-white cursor-pointer" style="transition: all 0.2s ease;" v-if="page > 1 && childPage != 7">
            下一頁
        </a>
    </div>
</template>
