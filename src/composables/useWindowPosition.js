import { onMounted, onUnmounted, ref } from "vue";
export function useWindowPosition() {
    const pageX = ref(0);
    const pageY = ref(0);
    const movePosition = (e) => {
        pageX.value = e.pageX;
        pageY.value = e.pageY;
    };
    // 生命週期區
    onMounted(() => {
        // 監聽滑鼠移動
        window.addEventListener("mousemove", movePosition)
        // ...
    })
    // 銷毀
    onUnmounted(() => {
        window.removeEventListener("mousemove", movePosition)
    });
    return {
        pageX,
        pageY,
    }
};