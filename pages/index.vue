<template>
  <!-- main content -->
  <div class="mx-auto   2xl:px-80px ">
    <div class="">
      <p class="hidden md:block mb-17px md:px-80px lg:px-0 padding-custom text-20px">NOW SHOWING</p>

      <div
        class="flex flex-wrap justify-center lg:grid lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-16px md:gap-x-20px gap-y-17px  2xl:px-0"
      >
        <!-- mapped cards -->
        <nuxt-link
          v-for="(movie, index) in movies"
          :key="index"
          :to="{ path: '/movie/' + movie.title.toLowerCase().replace(/ /g, '-') }"
          class="w-156px h-232px lg:w-240px lg:h-356px  xl:w-auto xl:h-auto cursor-pointer hover:scale-105 duration-200 overflow-hidden"
        >
          <img :src="'/images/' + movie.posterLink" :alt="movie.title" class="object-cover h-full w-full" />
        </nuxt-link>
      </div>
    </div>
    <p class="w-full mt-42px text-start text-20px font-400">COMING SOON</p>
  </div>
  <!-- end of main content -->
</template>

<script  setup>
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
</style>
