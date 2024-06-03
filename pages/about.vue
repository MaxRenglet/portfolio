<script setup>
const { data } = await useAsyncData('hello', () => queryContent('/about').findOne())
console.log(data);
</script>

<template>
    <ContentRenderer :value="data" />
</template>