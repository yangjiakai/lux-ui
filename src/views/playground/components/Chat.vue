<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
const route = useRoute()
onMounted(() => {
    console.log('route', route)
})
</script>

<template>
    <div class="">
        newChat{{ route.params.id }}
    </div>
</template>

<style scoped lang="scss"></style>
