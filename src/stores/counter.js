import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import axios from "axios";
// options API寫法
// export const useCounterStore = defineStore({
//     id: "counter",
//     state: () => ({
//         counter: 99
//     }),
//     getters: {
//         doubleCount: (state) => state.counter * 2
//     },
//     actions: {
//         addCount(){
//             this.counter++
//         }
//     }
// })


// 不用寫this
// 參數1.定義唯一id; 參數2. 函式內容
export const useCounterStore = defineStore("counter", () => {
    const counter = ref(4);
    const doubleCount = computed(() => {
        return counter.value;
    })
    const addCount = () => {
        console.log('1331')
        console.log(counter.value)
        counter.value++;
        console.log(counter.value)
    }
   
    // call API 方法
    const cardList = ref([])
    const fetchApiData = async () => {
        console.log('1313')
        try {
            const res = await axios.get("https://60bd9841ace4d50017aab3ec.mockapi.io/api/post_card")
            console.log(res)
            cardList.value = res.data;
        } catch (error) {

        }
    }
    return { counter, addCount, doubleCount, fetchApiData, cardList }
})