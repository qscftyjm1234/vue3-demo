<script setup>
    import { onMounted, ref, toRaw } from "vue";
    import { useFetchCard } from "../composables/useFetchCard"; // fetch user api
    import Card from '../components/card.vue'; // 卡片
    import Pagination from '../components/pagination.vue'; // 分頁
    import NoSearch from '../components/noSearch.vue'; // 無任何資料
    import UserModal from '../components/userModal.vue'; // 個人資訊彈跳式式窗

    // 【變數】
    // 標籤組
    const tabs = ref([
        {
            id: 1,
            name: "All",
        },
        {
            id: 2,
            name: "Favorite",
        },
    ]);
    // 定義標籤狀態
    const tabId = ref(1);
    // 當頁數量組
    const pageCounts = ref([10, 20, 30]);
    // 數量組狀態
    const pageCount = ref(10);
    // 排版狀態 類型: 1. card; 2. list
    const typesetting = ref("card");
    const page = ref(7);
    // 彈跳式視窗狀態
    const modalDetail = ref({
        modalStatus: true, // 彈跳式視窗開啟、關閉狀態
        userDetail: false, // 拋入modal資料
    })

    // 【API】
    // 取得user資料
    const {
        datas,
        errorMessage,
        fetchInit,
    } = useFetchCard();

    // 【方法】
    // 頁數切換
    const pageHandle = (childPage) => {
        page.value = childPage;
    };
    const showDetailHandle = (data) => {
        console.log(data)
        modalDetail.value.modalStatus = true;
        modalDetail.value.userDetail = toRaw(data);
        console.log(modalDetail)
    };

    // 【生命週期】
    // 呼叫api
    onMounted(() => {
        fetchInit(pageCount.value, page.value);
    })
</script>
<template>
    <!-- Filter頁面 -->
    <div class="flex justify-center">
        <!-- 切換全部與我的最愛tab -->
        <div class="w-full">
            <ul class='flex cursor-pointer'>
                <li 
                    class='py-2 px-6 rounded-t-lg'
                    v-for="(tab, index) in tabs"
                    :key="index"
                    :class="tabId == tab.id ? 'bg-teal-400 text-white' : 'text-gray-500 bg-gray-200'"
                    @click="tabId = tab.id"
                >
                    {{ tab.name }}
                </li>
            </ul>
        </div>
        <!-- 切換單頁數量Select -->
        <select
            class="
                bg-gray-80 border 
                border-gray-100 
                text-gray-900 
                text-sm 
                rounded-lg
                focus:ring-blue-500 
                focus:border-blue-500 
                block
                p-2 
                dark:border-gray-400 
                dark:placeholder-gray-400 
                dark:focus:ring-blue-500 
                dark:focus:border-blue-500
                flex-shrink-0
            "
            v-model="pageCount"
            @change="fetchInit(pageCount, page);"
        >
            <option 
                v-for="(pCount, index) in pageCounts" 
                :key="index"
                :value="pCount"
            >
                {{ pCount }}
            </option>
        </select>
        <!-- 排列組合Button -->
        <div class="ml-2">
            <svg v-if="typesetting == 'list'" @click="typesetting = 'card'" class="h-8 w-8 text-gray-400 cursor-pointer" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="3" y="3" width="7" height="7" />  <rect x="14" y="3" width="7" height="7" />  <rect x="14" y="14" width="7" height="7" />  <rect x="3" y="14" width="7" height="7" /></svg>
            <svg v-if="typesetting == 'card'" @click="typesetting = 'list'" class="h-8 w-8 text-gray-400 cursor-pointer" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4" y="4" width="16" height="6" rx="2" />  <rect x="4" y="14" width="16" height="6" rx="2" /></svg>
        </div>   
    </div>
    <!-- 卡片資料頁面 -->
    <template v-if="datas.length && datas.filter(item => tabId == 2 && item.isLove || tabId == 1).length">
        <div class="grid gap-4" :class="typesetting == 'card' ? 'grid-cols-4' : 'grid-cols-1'">
            <Card 
                v-for="(data, index) in datas.filter(item => tabId == 2 && item.isLove || tabId == 1)" 
                :key="index" 
                :data="data" 
                :typesetting="typesetting"
                @showDetailHandle="showDetailHandle"
            />
        </div>
        <Pagination :page="page" @pageHandle="pageHandle" />
    </template>
    <!-- 無資料狀態 -->
    <template v-else>
        <NoSearch />
    </template>
    <!-- 個人資訊彈跳式視窗 -->
    <UserModal :modalDetail="modalDetail" />
</template>