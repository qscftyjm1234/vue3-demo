<!-- 使用者彈跳式視窗頁面 -->
<script setup>
import { ref, watch, defineProps, toRaw } from "vue";
const props = defineProps({
  modalDetail: {
    type: Object,
  },
});
const myRef = ref(null);
const showMenu = (flag) => {
  props.modalDetail.modalStatus = flag;
  // menu.classList.toggle("hidden");
};

watch(
  () => props.modalDetail,
  (newValue, oldValue) => {
    console.log(toRaw(newValue));
    // showMenu(newValue.modalStatus)
  },
  { deep: true }
);
</script>

<template>
  <div class="relative flex justify-center items-center">
    <div
      v-if="modalDetail.modalStatus && modalDetail.userDetail"
      class="w-full h-full bg-gray-900 bg-opacity-80 top-0 fixed sticky-0"
    >
      <div
        class="2xl:container 2xl:mx-auto py-48 px-4 md:px-28 flex justify-center items-center"
      >
        <div
          class="w-full max-w-xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden"
        >
          <div class="max-w-xl mx-auto">
            <div class="flex justify-center p-2">
              <img
                class="w-72 h-72 rounded-full text-center object-cover shadow-lg"
                :src="modalDetail.userDetail.picture.large"
              />
            </div>
            <div class="p-4 sm:p-6">
              <div class="flex items-center justify-between">
                <!-- 姓名 -->
                <h2 class="text-lg font-semibold text-gray-900 -mt-1">
                  {{ modalDetail.userDetail.name.first }}
                  {{ modalDetail.userDetail.name.last }}
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
                    :class="modalDetail.userDetail.isLove ? 'text-red-500' : ''"
                    @click="
                      modalDetail.userDetail.isLove =
                        !modalDetail.userDetail.isLove
                    "
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path
                      d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7"
                    />
                  </svg>
                </div>
              </div>
              <div class="flex flex-row">
                <p class="text-[#3C3C4399] text-[17px] mr-2">
                  {{ modalDetail.userDetail.phone }}
                </p>
              </div>
              <p class="text-[#7C7C80] font-[15px] mt-6">
                {{ modalDetail.userDetail.email }}
              </p>
              <a
                @click="showMenu(false)"
                class="cursor-pointer block mt-10 px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#FFC933] rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
              >
                關閉
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
