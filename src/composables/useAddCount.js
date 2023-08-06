import { ref, readonly } from "vue";
export function useAddCount() {
    const count = ref(0);
    const addCount = () => {
        count.value++;
    };
    return {
        // 不可修改，指可讀
        count: readonly(count),
        addCount,
    }
}