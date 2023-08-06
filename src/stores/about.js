import { defineStore } from "pinia"


export const useAboutStore = defineStore("about", () => {
    const name = ref("gino")
    const setName = (userName) => {
        name.value = userName;
    }
    return {
        name,
        setName,
    }
})