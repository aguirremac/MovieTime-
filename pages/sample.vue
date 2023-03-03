<template>
    <div>
        <p>moviesRef[1].title</p>
    </div>
</template>

<script setup>

</script>
import {data().movies} from '/index.vue';
import {ref} from 'vue';

const moviesRef = ref(movies);
<style  scoped>

</style>