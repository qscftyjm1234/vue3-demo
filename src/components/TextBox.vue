<script setup>
    const props = defineProps({
        name: {
            type: String,
            default: "",
        }, 
        func: {
            type: Function,
            default: () =>{},
        }
    })
</script>

<template>
    <div>
        <h1>{{ props.name }}</h1>
        <button @click="props.func('jacky')">click <menu></menu></button>
    </div>
</template>