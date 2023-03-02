<template>
    <div class="h-screen" >
        This is movie page {{ id }}
    </div>
</template>

<script setup>

const { id } = useRoute().params

definePageMeta({ 
    layout: 'movie'
})


</script>

<style lang="scss" scoped>

</style>