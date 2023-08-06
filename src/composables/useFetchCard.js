import { ref } from "vue";
import axios from "axios";

export function useFetchCard() {
    const datas = ref([]);
    const errorMessage = ref("");
    const fetchInit = async(pageCount, page) => {
        try {
            const res = await axios.get(`https://randomuser.me/api/?page=${ page }&results=${ pageCount }&seed=abc _`);
            res.data.results.forEach(item => {
                item.isLove = 0;
            });
            datas.value = res.data.results;
        } catch (error) {
            errorMessage.value = "API發生錯誤";
        }
    };
    return {
        datas,
        errorMessage,
        fetchInit,
    };
};