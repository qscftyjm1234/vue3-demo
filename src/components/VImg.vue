<script setup>
// const emit = defineEmits(['AddInt']); // 陣列寫法
const emit = defineEmits({
    AddInt: (payload) => {
        console.log(payload)
        // 進行emit 上去前的驗證，上層收的到，但可以提醒devloper
        if (payload === 10) {
            console.log(payload)
            return true
        } else {
            console.log(payload)
            return false // 不會回傳emit
        };
    }
})
const props = defineProps({
    alt: {
        type: String, // 型態
        default: "預設值",
    },
    src: {
        type: String, // 型態
        default: "",
    },
    // * 物件、陣列定義要注意
    obj: {
        type: Object,
        default: ()=> {
            return {}
        }, // * Vue官方希望的
        // 同等於 () => ({})
    },
    arr: {
        type: Array,
        default: () => [], // 用return的
    }  
})
// const props = defineProps([
//     "alt" // 陣列，較不推薦
// ])

const handleAddClick = () => {
    const coin = 3 + 11;
    emit("AddInt", coin)
}

</script>
<template>
    <div>
       <button @click="handleAddClick">click</button>
    </div>
</template>