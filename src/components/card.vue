<!-- card頁面 -->
<script setup>
    import { ref, defineProps  } from 'vue'
    const props = defineProps({
        msg: { default: '', type: String },
        data: { default: '', type: Object },
        typesetting: { default: '', type: String },
    })
    const emit = defineEmits(['showDetailHandle'])
    // 【方法】
    const showDetail = () => {
        console.log(props.typesetting)
        console.log(props.data)
        emit("showDetailHandle", props.data)
    };
</script>

<template>
    <div class="p-4">
        <!-- card樣式 -->
        <div class="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl" v-if="typesetting == 'card'">
            <img :src="data.picture.large" alt="plant" class="h-auto w-full" />
            <div class="p-4">
                <div class="flex justify-between">
                    <!-- 個人姓名 -->
                    <h2 class="text-lg font-semibold text-gray-900 -mt-1">{{ data.name.first }} {{ data.name.last }}</h2>
                    <!-- 我的最愛 -->
                    <div>
                        <!-- text-red-500 -->
                        <svg
                            class="h-8 w-8 cursor-pointer"  
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24" 
                            stroke-width="2" 
                            stroke="currentColor" 
                            fill="none" 
                            stroke-linecap="round" 
                            stroke-linejoin="round"
                            :class="data.isLove ? 'text-red-500' : ''"
                            @click="data.isLove = !data.isLove"
                        >  
                            <path stroke="none" d="M0 0h24v24H0z"/>  
                            <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" />
                        </svg>
                    </div>
                </div>
                <p class="text-medium mb-5 text-gray-700">{{ data.phone }}</p>
                <p class="text-medium mb-5 text-gray-700">{{ data.email }}</p>
                <button 
                    class="w-full rounded-md bg-teal-400  py-2 text-white hover:bg-teal-500 hover:shadow-md duration-75"
                    @click="showDetail()"
                >
                    更多詳細資訊
                </button>
            </div>
        </div>
        <!-- list樣式 -->
        <div class="flex p-6 overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl cursor-pointer" v-if="typesetting == 'list'">
            <img class="w-12 h-12 rounded-full object-cover mr-4 shadow" :src="data.picture.large" alt="avatar">
            <div class="w-full">
                <div class="flex items-center justify-between">
                    <!-- 姓名 -->
                    <h2 class="text-lg font-semibold text-gray-900 -mt-1">
                        {{ data.name.first }} {{ data.name.last }}
                    </h2>
                    <!-- 我的最愛 -->
                    <div>
                        <svg
                            class="h-8 w-8 cursor-pointer text-sm"  
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24" 
                            stroke-width="2" 
                            stroke="currentColor" 
                            fill="none" 
                            stroke-linecap="round" 
                            stroke-linejoin="round"
                            :class="data.isLove ? 'text-red-500' : ''"
                            @click="data.isLove = !data.isLove"
                        >  
                            <path stroke="none" d="M0 0h24v24H0z"/>  
                            <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" />
                        </svg>
                    </div>
                </div>
                <!-- 電話 -->
                <p class="text-gray-700">{{ data.phone }}</p>
                <!-- 信箱 -->
                <p class="mt-3 text-gray-700 text-sm">
                    {{ data.email }}
                </p>
                <button 
                    class="mt-3 rounded-lg bg-teal-400 text-white hover:bg-teal-500 hover:shadow-md duration-75 px-3 py-1"
                    @click="showDetail()"
                >
                    更多詳細資訊
                </button>
            </div>
        </div>
    </div>
</template>
