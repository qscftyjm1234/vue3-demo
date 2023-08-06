
<!-- 1.根據公司需求使用Composition api，非op，非options api  -->
<script setup> // 在後面加上setup語法糖果，可拿掉exprot 跟 return
import HelloWorld from './components/HelloWorld.vue';
import { onMounted, onUnmounted, ref } from "vue";
import { useWindowPosition } from "./composables/useWindowPosition";
import { useAddCount } from "./composables/useAddCount";
import { useFetchCard } from "./composables/useFetchCard";
import { RouterLink, RouterView } from "vue-router";

const { count, addCount } = useAddCount();
// 可以參
const { pageX, pageY } = useWindowPosition();
// 發API
const {
  data,
  errorMessage,
  fetchInit,
} = useFetchCard();
// 之後改變資料盡量用set方式改
const setName = (nameA) => {
  const name = ref(nameA);
};
setName("dog");
// 少用
let a = ref("big");
a = "pig";
// ref 包裝資料的函式，每次定義資料都要用，畫面綁定需要加上
// export default {
//   props: {
//     // ...
//   },
//   components: {
//     // ...
//   },
//   setup() {
//     const count = ref(0); // 定義變數
//     const increment = () => {
//       count.value += 1;
//     }; // 定義function

//     onMounted(() => {
//       // ...
//     })
//     return { count, increment };  // 透過return方式丟到template調用
//   },
// }
  // const count = ref(0); // 定義變數(沒語法糖情況)
  // props區
  const props = defineProps({
    data: {
      type: Object,
      default: () => ({}),
    }
  })

  // 變數區
  // 用const常數定義較可以抓到錯誤
  // const name = ref("dog");
  const likes = 1; // 不用綁定
  // 所有tab
  const tabs = ref([
    {
      id: 1,
      name: "home",
      router: "/",
    },
    {
      id: 2,
      name: "Quiz 1 - Random User",
      router: "/q1",
    },
    {
      id: 3,
      name: "Quiz 2 - Nested Key-Value Pair TreeViewer",
      router: "/q2",
    },
    {
      id: 4,
      name: "Quiz 3 - v-model教學",
      router: "/q3",
    },
    {
      id: 5,
      name: "Quiz 4 - Pinia",
      router: "/q4",
    },
  ]);
  const tab = ref(1);  // 控制tab
  // 方法區
  // const change = () => {
  //   name.value = "cat";
  // };
  // 生命週期
  // onMounted(() => {
  //   fetchInit();
  // })
</script>
<template>
  <!-- 取得的API資料:{{ data }} -->
  <!-- <button @click="addCount()">
    增加{{ count }}
  </button> -->
  <!-- 1.根據公司需求使用Composition api，非op，非options api  -->
  <!-- <div>{{ name }}</div> -->
  <!-- <div>
    pageX: {{ pageX }}
    pageY: {{ pageY }}
  </div> -->
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <!-- 切換頁面 -->
  <nav class="space-y-5">
    <div class="border-b border-b-gray-200">
      <ul class="-mb-px flex items-center gap-4 text-sm font-medium">
        <li class="flex-1" v-for="(tab, index) in tabs" :key="index">
          <RouterLink :to="tab.router">
            <a
              href="#"
              class="relative flex items-center justify-center gap-2 px-1 py-3 text-gray-500 hover:text-blue-700"
              :class="tabId == tab.id ? 'text-blue-700 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-blue-700' : ''"
              @click="tabId = tab.id"
            >
              {{ tab.name }}</a
            >
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
  <!-- 顯示頁面 -->
  <div class="container px-6 py-10 mx-auto">
    <RouterView />
  </div>
</template>
<style scoped>
</style>
