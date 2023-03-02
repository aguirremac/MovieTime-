<template>
 <div>
      <!-- main content -->
      <div class="w-full h-screen text-start text-20px font-400 px-80px mb-55">

        <p>NOW SHOWING</p>

        <div class="flex flex-wrap gap-x-20px gap-y-17px">
          <!-- mapped cards -->
         <div v-for="movie in movies"  :key="movie.movieId"
              class="w-240px h-356px object-contain cursor-pointer hover:scale-105 duration-200">
            <img :src="'/images/' + movie.posterLink" :alt="movie.title"/>
          </div>
        </div>
        


        </div>


    
  </div>

</template>

<script>
export default {
  data() {
        return {
movies: [
    
    {
      
      title: "The Bad Guys",
      movieId : "movie2",
      year: "2022",
      rated: "PG",
      released: "22 April 2022",
      runtime: "1h 40m",
      imdbRating: "6.8",
      rTRating: "62%",
      posterLink: "bad.png",
      type: "movie",
    },
    {
      
      title: "Firestarter",
      movieId : "movie4",
      year: "2022",
      rated: "R",
      released: "12 May 2022",
      runtime: "1h 34m",
      imdbRating: "4.6",
      rTRating: "55%",
      posterLink: "firestarter.png",
      type: "movie",
    },
    {
      
      title: "Everything Everywhere All at Once",
      movieId : "movie5",
      year: "2022",
      rated: "R",
      released: "8 April 2022",
      runtime: "2h 19m",
      imdbRating: "8.0",
      rTRating: "85%",
      posterLink: "eeaao.png",
      type: "movie",
    },
  ]}
  }}




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
