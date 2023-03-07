<template>
  <div class="mx-auto w-1444px min-h-screen h-full text-start text-20px font-normal px-31px md:px-80px">

      <div class="hidden md:flex items-center w-full h-46px bg-#030303 rounded-lg  mt-18px mb-0">
          <p class="text-start md:text-16px font-normal px-24px py-14px ">Turn on <span class="font-bold">Location Services</span> to find cinema theaters nearest you!</p>
      </div>

      <!-- main content -->
      <div class="w-full h-full flex flex-wrap gap-10px ">

          <!-- mapped theater cards -->
        <div  v-for ="(cinema, index) in sortedCinemaDetails"
              :key="index"
              class="flex justify-between w-624px h-183px bg-#262626 rounded-xl mt-14px">
                <!-- left part -->
            <div class="">

              <div class="flex gap-14px w-full pt-16px xl:pt-23px pl-18px xl:pl-26px">
                <img :src="'/cinemas/'+ cinema.cinemaPosterURL" 
                    alt="" 
                    class="rounded-full h-37px w-37px xl:h-53px xl:w-53px"
                    >
                <div>
                  <h2 class="font-normal text-16px xl:text-24px m-0">{{ cinema.location }}</h2>
                  <h3 class="font-thin text-13px xl:text-20px m-0">Cinema {{ cinema.cinemaNum }}</h3>
                </div>
              </div>

               <!-- time slots -->
            <div class="pl-15px xl:pl-27px pr-75px xl:pr-150px  flex flex-wrap gap-x-15px xl:gap-x-26px mt-10px xl:mt-15px" >
              <h2 v-for="(time, qIndex) in cinema.timeSlot"
                  :key="qIndex"
                  class="m-0 font-light text-15px xl:text-20px"
                  >{{ time }}</h2> 
             </div>
          </div>

         
          <!-- image -->
          <div  v-for="(movie, qIndex) in movies"
                :key="qIndex"
                class="flex gap-0 my-auto mr-2px">
                
           <div v-if="movie.title === cinema.title"
                class="overflow-hidden">
              <img  :src="'/images/'+movie.posterLink" alt="" class="h-142px w-95px object-cover ">
           </div>     
          </div>


        </div>
      </div>

  </div>
    
</template>

<script setup>

const { cinemaDetails } = useSchedule();
const { movies } = useMovieData();
// sort cinema location a-z
const sortedCinemaDetails = cinemaDetails.sort((a,b)=> a.location.localeCompare(b.location))


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
