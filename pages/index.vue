<template>
  <div >
    
      <!-- main content -->
      <div class="w-full text-start text-20px font-normal px-80px">

          <p class="mb-17px">NOW SHOWING</p>

          <div class="flex flex-wrap gap-x-20px gap-y-17px">
            <!-- mapped cards -->
              <nuxt-link v-for="(movie, index) in movies" :key="index" :to="{ path: '/movie/' + movie.title.toLowerCase().replace(/ /g, '-') }" class="w-240px h-356px  cursor-pointer hover:scale-105 duration-200 overflow-hidden">
                  <img :src="'/images/' + movie.posterLink" :alt="movie.title" class="w-full object-cover "/>
              </nuxt-link>
              
          </div>
          
          <p class="w-full mt-42px text-start font-400">COMING SOON</p>

      </div>
      <!-- end of main content -->
  </div>
</template>

<script>

export default {

data() {
  return {
    movies: [
    {
      
      title: "Doctor Strange in the Multiverse of Madness",
      movieId : "movie1",
      year: "2022",
      rated: "PG-13",
      released: "18 Dec 2022",
      runtime: "2h 6m",
      imdbRating: "6.9",
      rTRating: "74%",
      posterLink: "doctor.png",
      type: "movie",
    },
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
      
      title: "Sonic the HedgeHog 2",
      movieId : "movie3",
      year: "2022",
      rated: "PG-13",
      released: "8 April 2022",
      runtime: "2h 2m",
      imdbRating: "6.5",
      rTRating: "64%",
      posterLink: "sonic.png",
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
    {
      
      title: "Doctor Strange in the Multiverse of Madness",
      movieId : "movie1",
      year: "2022",
      rated: "PG-13",
      released: "18 Dec 2022",
      runtime: "2h 6m",
      imdbRating: "6.9",
      rTRating: "74%",
      posterLink: "doctor.png",
      type: "movie",
    },
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
      
      title: "Sonic the HedgeHog 2",
      movieId : "movie3",
      year: "2022",
      rated: "PG-13",
      released: "8 April 2022",
      runtime: "2h 2m",
      imdbRating: "6.5",
      rTRating: "64%",
      posterLink: "sonic.png",
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
    
  ]

        }},

  methods: {
      redirectToPage (index){
      const slug = movies[index].title.toLowerCase().replace(/ /g, '-')
      this.$router.push(`/movie/${slug}`)
    }
  },

}

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
