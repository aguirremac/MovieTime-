<template>
  <!-- main content -->
  <div class="mx-auto w-1444px md:px-80px ">
    <div class="">
    <p class="hidden md:block mb-17px lg:px-80px 2xl:px-0 padding-custom">NOW SHOWING</p>

    <div class="flex flex-wrap justify-center lg:grid  lg:grid-cols-3   xl:grid-cols-4 2xl:grid-cols-5 gap-x-16px md:gap-x-20px gap-y-17px lg:px-80px  2xl:px-0">
      <!-- mapped cards -->
      <nuxt-link
        v-for="(movie, index) in movies"
        :key="index"
        :to="{ path: '/movie/' + movie.title.toLowerCase().replace(/ /g, '-') }"
        class="w-156px h-232px md:w-240px md:h-356px lg:w-280px lg:h-auto xl:w-auto xl:h-auto cursor-pointer hover:scale-105 duration-200 overflow-hidden"
      >
        <img :src="'/images/' + movie.posterLink" :alt="movie.title" class=" object-cover h-full w-full" />
      </nuxt-link>
    </div>
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
  padding-left: 122px;
}
</style>
