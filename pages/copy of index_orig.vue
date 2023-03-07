<template>
  <!-- main content -->
    <div class="mx-auto w-1444px w-full text-start text-20px font-normal px-31px md:px-80px">
    <p class="hidden md:block mb-17px padding-custom">NOW SHOWING</p>

    <div class="flex justify-center flex-wrap gap-x-16px md:gap-x-20px gap-y-17px">
      <!-- mapped cards -->
      <nuxt-link
        v-for="(movie, index) in movies"
        :key="index"
        :to="{ path: '/movie/' + movie.title.toLowerCase().replace(/ /g, '-') }"
        class="w-156px h-232px md:w-240px md:h-356px cursor-pointer hover:scale-105 duration-200 overflow-hidden"
      >
        <img :src="'/images/' + movie.posterLink" :alt="movie.title" class="w-full object-cover" />
      </nuxt-link>
    </div>

    <p class="w-full mt-42px text-start font-400">COMING SOON</p>
  </div>
  <!-- end of main content -->
</template>

<script setup>
const { movies } = useMovieData()
</script>

<style scoped>
a {
  text-decoration: none;
  color: white;
}

.router-link-active {
  border-bottom: 1px solid white;
  padding-bottom: 5px;
}

 @media (max-width: 1020px) {
  
  padding-left: 122px
}
</style>
